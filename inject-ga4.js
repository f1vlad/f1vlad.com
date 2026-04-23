#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const GA_MEASUREMENT_ID = 'G-F8M193CG7Z';

const GTAG_SNIPPET = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_MEASUREMENT_ID}');
</script>`;

function walkHtmlFiles(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkHtmlFiles(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

function stripLegacyUa($) {
  let removed = false;
  const ext = $(`script[src*="googletagmanager.com/gtag/js?id=UA-"]`);
  if (ext.length) {
    ext.remove();
    removed = true;
  }
  $('script').each((_, el) => {
    const $el = $(el);
    if ($el.attr('src')) return;
    const body = $el.html() || '';
    if (
      /gtag\s*\(\s*['"]config['"]\s*,\s*['"]UA-/.test(body) &&
      !body.includes(GA_MEASUREMENT_ID)
    ) {
      $el.remove();
      removed = true;
    }
  });
  return removed;
}

function preserveDoctype(original, serialized) {
  const doctype = original.match(/^<!DOCTYPE[^>]*>\s*/i);
  if (doctype && !/^<!DOCTYPE/i.test(serialized.trim())) {
    return doctype[0] + serialized;
  }
  return serialized;
}

function processFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const hadGa4 = html.includes(GA_MEASUREMENT_ID);
  const $ = cheerio.load(html, { decodeEntities: false, xml: false });

  const uaRemoved = stripLegacyUa($);

  let addedGa4 = false;
  if (!hadGa4) {
    const $head = $('head');
    if (!$head.length) {
      console.warn('no <head>, skip:', path.relative(ROOT, filePath));
      return { skip: true };
    }
    $head.append(`\n${GTAG_SNIPPET}\n`);
    addedGa4 = true;
  }

  if (!uaRemoved && !addedGa4) return {};

  let out = $.html();
  out = preserveDoctype(html, out);
  fs.writeFileSync(filePath, out, 'utf8');
  return { uaRemoved, addedGa4 };
}

function main() {
  const files = walkHtmlFiles(DIST);
  let nUa = 0;
  let nAdd = 0;
  let nSkip = 0;

  for (const fp of files) {
    const r = processFile(fp);
    if (r.skip) nSkip++;
    else {
      if (r.uaRemoved) nUa++;
      if (r.addedGa4) nAdd++;
    }
  }

  console.log(
    'inject-ga4: files=%d, added GA4=%d, stripped UA in=%d, no <head> skip=%d',
    files.length,
    nAdd,
    nUa,
    nSkip
  );
}

main();
