#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const CURRENT = path.join(DIST, 'deprecated', 'portfolio');
const ARCHIVED = path.join(DIST, 'archived', 'portfolio');
const OUTPUT = path.join(DIST, 'portfolio');

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function truncate(text, max = 160) {
  if (!text || text.length <= max) return text || '';
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(' ');
  return (i > 80 ? cut.slice(0, i) : cut) + '\u2026';
}

function strip(html) {
  return (html || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function esc(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cleanHtml(html) {
  return (html || '')
    .replace(/<a\s+name="[^"]*"\s*>\s*<\/a>/gi, '')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/(<br\s*\/?>[\s]*){3,}/gi, '<br><br>')
    .trim();
}

// From project pages at dist/portfolio/projects/<slug>/ we need to reach
// back into the original asset trees. That is 3 directory levels up to dist/.
function fixCurrentPaths(html) {
  return (html || '').replace(
    /(src|href)="(?!https?:\/\/|\/\/|data:|#|mailto:)([^"]+)"/g,
    (_, attr, val) => `${attr}="../../../deprecated/portfolio/${val}"`
  );
}

function fixArchivedPaths(html) {
  return (html || '')
    .replace(/(src|href)="\.\.\/images\//g, '$1="../../../archived/portfolio/images/')
    .replace(/(src|href)="\.\.\/files\//g, '$1="../../../archived/portfolio/files/');
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// ---------------------------------------------------------------------------
// Parse current portfolio (2013-2020)
// ---------------------------------------------------------------------------

function parseCurrentPortfolio() {
  const html = fs.readFileSync(path.join(CURRENT, 'work.html'), 'utf-8');
  const $ = cheerio.load(html);
  const projects = [];
  let year = null;

  $('.projects-interactive-container').children().each((_, el) => {
    const $el = $(el);

    if ($el.is('h2')) {
      const y = parseInt($el.text().trim());
      if (!isNaN(y)) year = y;
      return;
    }

    if (!$el.is('ul') || !year) return;

    $el.find('li.item').each((_, li) => {
      const $li = $(li);
      const $a = $li.find('a[data-project]');
      if (!$a.length) return;

      const title = $a.text().replace(/\s+/g, ' ').trim();
      const dp = $a.attr('data-project');
      const slug = dp.split('/')[0];

      const tags = [];
      $li.find('aside span').each((_, s) => tags.push($(s).text().trim()));

      let aboutHtml = '';
      let aboutText = '';
      let date = String(year);
      let role = '';
      let demosHtml = '';
      let extraMetaHtml = '';

      const fp = path.join(CURRENT, 'projects', dp + '.html');
      if (fs.existsSync(fp)) {
        const frag = fs.readFileSync(fp, 'utf-8');
        const $f = cheerio.load(frag);

        const $about = $f('section.about');
        $about.find('h4').remove();
        aboutHtml = ($about.html() || '').trim();
        aboutText = strip(aboutHtml);

        $f('section.meta p').each((_, p) => {
          const t = $f(p).text();
          if (/Date:\s*/.test(t)) {
            const m = t.match(/Date:\s*(.+)/);
            if (m) date = m[1].trim();
          } else if (/Role:\s*/.test(t)) {
            const m = t.match(/Role:\s*(.+)/);
            if (m) role = m[1].trim();
          } else if (/Technologies used:\s*/.test(t)) {
            // skip, tags come from work.html
          } else if (t.trim()) {
            extraMetaHtml += $f.html(p);
          }
        });

        const $demos = $f('section.demos');
        if ($demos.length) {
          demosHtml = ($demos.html() || '').trim();
        }
      }

      aboutHtml = cleanHtml(fixCurrentPaths(aboutHtml));
      demosHtml = cleanHtml(fixCurrentPaths(demosHtml));
      extraMetaHtml = cleanHtml(fixCurrentPaths(extraMetaHtml));

      projects.push({
        title, slug, year, date, tags, role,
        images: [],
        descriptionHtml: aboutHtml,
        descriptionText: aboutText,
        demosHtml,
        extraMetaHtml,
        source: 'current',
      });
    });
  });

  return projects;
}

// ---------------------------------------------------------------------------
// Parse archived portfolio (1999-2008)
// ---------------------------------------------------------------------------

function parseArchivedPortfolio() {
  const html = fs.readFileSync(path.join(ARCHIVED, 'index.html'), 'utf-8');
  const $ = cheerio.load(html);
  const projects = [];

  const content = $('#content').html() || '';
  const parts = content.split(/<h4>(\d{4})<\/h4>/);

  for (let i = 1; i < parts.length; i += 2) {
    const year = parseInt(parts[i]);
    const section = parts[i + 1] || '';
    const $s = cheerio.load(section);

    $s('li').each((_, li) => {
      const $li = $s(li);
      const $a = $li.find('a[href*="index.php-id="]');
      if (!$a.length) return;

      const title = $a.text().trim();
      if (!title) return;

      const href = $a.attr('href') || '';
      const idMatch = href.match(/index\.php-id=(\d+)/);
      if (!idMatch) return;
      const id = idMatch[1];
      const slug = id + '-' + slugify(title);

      const divHtml = $li.find('.portfolio_list_div').html() || '';
      const teaser = strip(divHtml)
        .replace(title, '')
        .replace(/^\s*\w{3}\s+\d{1,2}\s*/, '')
        .trim();

      let descHtml = '';
      let descText = '';
      let fullDate = '';
      const tags = [];

      const pp = path.join(ARCHIVED, 'project', 'index.php-id=' + id + '.html');
      if (fs.existsSync(pp)) {
        const ph = fs.readFileSync(pp, 'utf-8');
        const $p = cheerio.load(ph);

        fullDate = $p('#projectdata em').first().text().trim();

        $p('#tags a').each((_, a) => {
          const t = $p(a).text().trim();
          if (t) tags.push(t);
        });

        descHtml = ($p('#projectdescription').html() || '').trim();
        descText = strip(descHtml);
        descHtml = cleanHtml(fixArchivedPaths(descHtml));
      }

      const hasYear = /\d{4}/.test(fullDate);
      const date = hasYear
        ? fullDate
        : fullDate
          ? fullDate + ', ' + year
          : String(year);

      projects.push({
        title, slug, year, date, tags, role: '',
        images: [],
        descriptionHtml: descHtml || (teaser ? '<p>' + esc(teaser) + '</p>' : ''),
        descriptionText: descText || teaser,
        demosHtml: '',
        extraMetaHtml: '',
        source: 'archived',
      });
    });
  }

  return projects;
}

// ---------------------------------------------------------------------------
// HTML templates
// ---------------------------------------------------------------------------

function timelineHtml(yearGroups) {
  let sections = '';
  for (const { year, projects } of yearGroups) {
    let items = '';
    for (const p of projects) {
      const desc = truncate(p.descriptionText);
      const tagsStr = p.tags.map(t => '<span>' + esc(t) + '</span>').join('');
      items += `
        <li>
          <a href="projects/${p.slug}/" class="project-title">${esc(p.title)}</a>
          ${desc ? '<p class="project-desc">' + esc(desc) + '</p>' : ''}
          ${tagsStr ? '<div class="project-tags">' + tagsStr + '</div>' : ''}
        </li>`;
    }
    sections += `
    <section class="year-group">
      <h2 id="y${year}">${year}</h2>
      <ul class="project-list">${items}
      </ul>
    </section>`;
  }

  const first = yearGroups[yearGroups.length - 1]?.year || 1999;
  const last = yearGroups[0]?.year || 2020;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio \u2014 f1vlad.com</title>
  <link rel="stylesheet" href="css/style.css">
  <script defer src="https://cloud.umami.is/script.js" data-website-id="33f9e25a-b4ed-490e-88b2-09f9216ae1d9"></script>
</head>
<body>
  <nav>
    <a href="./" aria-current="page">Projects</a>
    <a href="patents.html">Patents</a>
    <a href="resume.html">Resume</a>
    <a href="contact.html">Contact</a>
  </nav>
  <header>
    <h1>Portfolio</h1>
    <p class="subtitle">${first}\u2013${last}</p>
  </header>
  <main>${sections}
  </main>
  <footer>
    <p>\u00a9 1999\u20132026 f1vlad.com</p>
  </footer>
</body>
</html>
`;
}

function projectPageHtml(p) {
  const tagsStr = p.tags.map(t => '<span>' + esc(t) + '</span>').join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(p.title)} \u2014 Portfolio \u2014 f1vlad.com</title>
  <link rel="stylesheet" href="../../css/style.css">
  <script defer src="https://cloud.umami.is/script.js" data-website-id="33f9e25a-b4ed-490e-88b2-09f9216ae1d9"></script>
</head>
<body>
  <nav>
    <a href="../../" class="back-link">\u2190 Projects</a>
    <a href="../../patents.html">Patents</a>
    <a href="../../resume.html">Resume</a>
    <a href="../../contact.html">Contact</a>
  </nav>
  <main>
    <h1>${esc(p.title)}</h1>
    ${p.date ? '<p class="project-date">' + esc(p.date) + '</p>' : ''}
    ${tagsStr ? '<div class="project-tags">' + tagsStr + '</div>' : ''}
    <article class="project-content">
      ${p.descriptionHtml}
    </article>
    ${p.extraMetaHtml ? '<div class="project-links">' + p.extraMetaHtml + '</div>' : ''}
    ${p.demosHtml ? '<section class="project-demos">' + p.demosHtml + '</section>' : ''}
    ${p.role ? '<p class="project-role">Role: ' + esc(p.role) + '</p>' : ''}
  </main>
  <footer>
    <p>\u00a9 1999\u20132026 f1vlad.com</p>
  </footer>
</body>
</html>
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('Parsing current portfolio...');
  const current = parseCurrentPortfolio();
  console.log('  Found ' + current.length + ' projects');

  console.log('Parsing archived portfolio...');
  const archived = parseArchivedPortfolio();
  console.log('  Found ' + archived.length + ' projects');

  const all = [...current, ...archived];
  all.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

  console.log('Total: ' + all.length + ' projects');

  const yearMap = new Map();
  for (const p of all) {
    if (!yearMap.has(p.year)) yearMap.set(p.year, []);
    yearMap.get(p.year).push(p);
  }
  const yearGroups = Array.from(yearMap.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, projects]) => ({ year, projects }));

  mkdirp(path.join(OUTPUT, 'css'));

  const indexPath = path.join(OUTPUT, 'index.html');
  fs.writeFileSync(indexPath, timelineHtml(yearGroups));
  console.log('Wrote ' + indexPath);

  for (const p of all) {
    const dir = path.join(OUTPUT, 'projects', p.slug);
    mkdirp(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), projectPageHtml(p));
  }
  console.log('Wrote ' + all.length + ' project pages');
  console.log('Done!');
}

main();
