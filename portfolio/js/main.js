(function (section) {
  const bodySelector = document.querySelector("body");
  const header = document.createElement("header");
  let page;

  let headerContent = `
        <div class="menu-btn" role="button">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>
    
        <nav class="menu">
            <div class="menu-branding">
                <div class="portrait"></div>
            </div>
    
            <ul class="menu-nav">
                <li class="nav-item home">
                    <a href="./" class="nav-link">
                        Intro
                    </a>
                </li>
                <li class="nav-item work">
                    <a href="./work.html" class="nav-link">
                        Projects
                    </a>
                </li>
                <li class="nav-item patents">
                    <a href="./patents.html" class="nav-link">
                        Patents
                    </a>
                </li>
                <li class="nav-item resume">
                    <a href="./resume.html" class="nav-link">
                        Resume
                    </a>
                </li>
                <li class="nav-item contact">
                    <a href="./contact.html" class="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    `;

  header.innerHTML = headerContent;

  page = section.split("/");
  page = page[page.length - 1];
  page = page.split(".");
  page = page[0];

  if (page === "" || page === "index") {
    page = "home";
  }

  header.querySelector(`.${page}`).classList.add("current");
  bodySelector.prepend(header);
})(location.href);

(function () {
  // Selectors
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuNav = document.querySelector(".menu-nav");
  const menuBranding = document.querySelector(".menu-branding");
  const navItems = document.querySelectorAll(".nav-item");
  const mainContainer = document.querySelector("main");
  const projectsContainer = document.querySelector(
    ".projects-interactive-container"
  );
  const projectDetailContainer = document.querySelector("#project-detail");
  const projectDetailImageContainer = document.querySelector(
    "#project-detail-gallery-image"
  );

  let showMenu = false;
  let showProject = false;
  let showImage = false;

  menuBtn.addEventListener("click", toggleMenu);
  projectsContainer &&
    projectsContainer.addEventListener("click", loadProject, true);
  document.querySelector("body").addEventListener("keyup", escAction);

  function enlargeProjectImage(e) {
    if (!e.srcElement.getAttribute("src")) {
      return false;
    }
    e.preventDefault();

    let projectTitle = document.querySelector("#project-detail h3").innerText;
    let projectImages = document.querySelector(
      "#project-detail .demos .gallery"
    );
    let imgCurrent;
    let imgIndexCurrent;
    let imgClicked = e.target.currentSrc.split("/");
    let imgCount = projectImages.querySelectorAll("a").length;
    let controlsStateClass;
    let imgClickedEl;
    imgClicked = imgClicked[imgClicked.length - 1];

    let i = 1;
    projectImages.querySelectorAll("a").forEach((el) => {
      el.setAttribute("index", i);
      el.removeAttribute("active");

      imgCurrent = el.querySelector("img").getAttribute("src");

      if (
        imgCurrent.substr(
          imgCurrent.length - imgClicked.length,
          imgClicked.length
        ) === imgClicked
      ) {
        el.setAttribute("active", true);
        imgIndexCurrent = i;
        controlsStateClass = updateControlsState(imgCount, i);
      }
      i++;
    });

    e.target.parentElement.querySelector("span") === null
      ? (imgLbl = "")
      : (imgLbl = e.target.parentElement.querySelector("span").innerText);
    let tpl = `<div><header><a href="#" class="btn-close"><div class="menu-btn close"><div class="btn-line"></div><div class="btn-line"></div><div class="btn-line"></div></div></a></header><h3><a href="#">${projectTitle}</a></h3><div class="interactive-gallery">${projectImages.innerHTML}<div></div><section class="newInteractiveListing" style="zoom: .2"></section><section class="gallery-controls ${controlsStateClass}"><a class="prev" href="">←</a><span>&nbsp;</span><a class="next" href="">→</a></section>`;
    projectDetailImageContainer.innerHTML = tpl;
    imgClickedEl = document.querySelector(
      ".interactive-gallery a[active=true]"
    );
    showImage = true;

    imgClickedEl.scrollIntoView();

    const btnClose = document.querySelector(
      "#project-detail-gallery-image .btn-close"
    );
    const projectTitleLinkBack = document.querySelector(
      "#project-detail-gallery-image h3 a"
    );
    btnClose.addEventListener("click", collapseProjectImage);
    projectTitleLinkBack.addEventListener("click", collapseProjectImage);
    projectDetailContainer.classList.add("blur");

    let controlPrev = document.querySelector(".gallery-controls a.prev");
    let controlNext = document.querySelector(".gallery-controls a.next");
    controlPrev.addEventListener("click", controlGalleryClick);
    controlNext.addEventListener("click", controlGalleryClick);
  }

  function updateActiveImage(activeImage) {
    // debugger;
    document
      .querySelectorAll(".interactive-gallery > a")
      .forEach((el) => el.removeAttribute("active"));
    document
      .querySelector(
        '.interactive-gallery > a[index="' +
          activeImage.getAttribute("index") +
          '"]'
      )
      .setAttribute("active", "true");
  }

  function updateControlsState(imgCount, imgCurrent) {
    let controlsStateClass;
    let controlsEl = document.querySelector(".gallery-controls");
    imgCurrent = parseInt(imgCurrent);

    if (imgCount < 1) {
      // disable controls
      controlsStateClass = "";
    } else if (imgCount === imgCurrent) {
      // disable next
      controlsStateClass = "prev";
    } else if (imgCurrent === 1) {
      // disable prev
      controlsStateClass = "next";
    } else {
      // enable prev and next
      controlsStateClass = "prev next";
    }
    console.log(imgCount, imgCurrent);

    controlsEl &&
      controlsEl.setAttribute(
        "class",
        "gallery-controls " + controlsStateClass
      );

    return controlsStateClass;
  }

  function controlGalleryClick(e) {
    e.preventDefault();
    let visibleEl = document
      .querySelector('.interactive-gallery > a[active="true"]')
      .getAttribute("index");
    let scrollToEl;
    let imgCount = document.querySelectorAll(".interactive-gallery > a").length;

    if (e.target.className === "next") {
      scrollToEl = document.querySelector(
        '.interactive-gallery > a[index="' + (parseInt(visibleEl) + 1) + '"]'
      );
    } else {
      scrollToEl = document.querySelector(
        '.interactive-gallery > a[index="' + (parseInt(visibleEl) - 1) + '"]'
      );
    }

    scrollToEl.scrollIntoView();
    updateControlsState(imgCount, scrollToEl.getAttribute("index"));
    updateActiveImage(scrollToEl);
  }

  function collapseProjectImage() {
    projectDetailImageContainer.innerHTML = "";
    showImage = false;
    projectDetailContainer.classList.remove("blur");
  }

  async function loadProject(e) {
    e.preventDefault();

    if (
      e.target.getAttribute("data-project") === null &&
      e.path[1].getAttribute("data-project") === null
    ) {
      return false;
    }

    let projectTitle = e.target.innerHTML;
    let getTemplate =
      e.target.getAttribute("data-project") ||
      e.path[1].getAttribute("data-project");
    let projectTechUsed = e.target.nextElementSibling.innerHTML;
    let projectFile = `./projects/${getTemplate}.html`;
    let projectContent = await getProject(projectFile);
    projectDetailContainer.innerHTML = projectContent;
    projectDetailContainer.querySelector("h3").innerText = projectTitle;

    let projectTechContainer = projectDetailContainer.querySelector(".tech");
    projectTechContainer && (projectTechContainer.innerHTML = projectTechUsed);

    mainContainer.classList.add("blur");
    body.classList.add("no-scroll");
    showProject = true;
    const btnClose = document.querySelector("#project-detail .btn-close");
    btnClose.addEventListener("click", closeProject);
    const projectDetailGallery = document.querySelector(
      "#project-detail .gallery"
    );
    projectDetailGallery &&
      projectDetailGallery.addEventListener("click", enlargeProjectImage);

    // Push new history state when opening project
    history.pushState({ project: getTemplate }, "", `#${getTemplate}`);

    if (!sessionStorage.getItem("escTooltipShown")) {
      showEscToCloseTip();
    }

    let projectContentCode = document.querySelectorAll(".demos pre code");
    projectContentCode.length &&
      projectContentCode.forEach((block) => {
        hljs.highlightBlock(block);
      });

    if (document.querySelector(".codegithub")) {
      // handle injecting a github gist
      let gistFrameHTML =
        '<html><body style="margin: 0"><script src="https://gist.github.com/f1vlad/1cd967c9e84741a39f4311858890aa20.js"></script></body></html>';
      let gistFrame = document.createElement("iframe");
      var gistPlaceholder = document.querySelector(".codegithub div");
      gistPlaceholder.innerHTML = "";
      gistPlaceholder.appendChild(gistFrame);
      gistFrameDoc = gistFrame.contentWindow.document;
      gistFrameDoc.open();
      gistFrameDoc.writeln(gistFrameHTML);
      gistFrameDoc.close();
    }
  }

  // Add popstate event listener at the top level
  window.addEventListener("popstate", function (e) {
    if (showProject) {
      // Special case for resume page
      if (window.location.pathname.includes("resume")) {
        window.location.href = "/portfolio/resume";
        return;
      }
      closeProject(e);
    }
  });

  async function getProject(location) {
    try {
      const response = await fetch(location);
      const data = await response.text();
      return data;
    } catch (err) {
      console.error("Fetch failed", err);
    }
  }

  function closeProject(e) {
    projectDetailContainer.innerHTML = "";
    mainContainer.classList.remove("blur");
    body.classList.remove("no-scroll");
    showProject = false;
    e.preventDefault();
  }

  function showEscToCloseTip() {
    const projectHeader = document.querySelector("#project-detail header");
    const el = document.createElement("aside");
    el.classList.add("esc-to-close-tip");
    el.innerHTML = "click `Esc` to close";
    projectHeader.prepend(el);
    sessionStorage.setItem("escTooltipShown", true);
  }

  function escAction(e) {
    if (e.keyCode !== 27) {
      return;
    }

    if (showImage === true) {
      collapseProjectImage();
      return false;
    }

    if (showMenu === true) {
      toggleMenu();
    }

    if (showProject === true) {
      closeProject(e);
    }
  }

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach((item) => item.classList.add("show"));
      mainContainer.classList.add("blur");
      body.classList.add("no-scroll");

      // Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach((item) => item.classList.remove("show"));
      mainContainer.classList.remove("blur");
      body.classList.remove("no-scroll");

      // Set Menu State
      showMenu = false;
    }
  }

  function ready(fn) {
    if (
      document.attachEvent
        ? document.readyState === "complete"
        : document.readyState !== "loading"
    ) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {});
})();
