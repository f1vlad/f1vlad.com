(function(section) {
    const bodySelector = document.querySelector('body');
    const header = document.createElement('header');
    let page;

    let headerContent = `
        <div class="menu-btn">
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

    page = section.split('/');
    page = page[page.length - 1];
    page = page.split('.');
    page = page[0];

    if (page === '' || page === 'index') {
        page = 'home';
    }

    header.querySelector(`.${page}`).classList.add('current');
    bodySelector.prepend(header);
})(location.href);

(function () {
    // Selectors
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');
    const mainContainer = document.querySelector('main');
    const projectsContainer = document.querySelector('.projects-interactive-container');
    const projectDetailContainer = document.querySelector('#project-detail');
    const projectDetailImageContainer = document.querySelector('#project-detail-gallery-image');

    let showMenu = false;
    let showProject = false;
    let showImage = false;

    menuBtn.addEventListener('click', toggleMenu);
    projectsContainer && projectsContainer.addEventListener('click', loadProject, true);
    document.querySelector('body').addEventListener('keyup', escAction);

    function enlargeProjectImage(e) {
        if (!e.srcElement.getAttribute('src')) {
            return false;
        }

        let projectTitle = document.querySelector('#project-detail h3').innerText;
        let imgUrl = e.target.parentElement.querySelector('img').getAttribute('src');
        let imgLbl;
        e.target.parentElement.querySelector('span') === null ? imgLbl = '' : imgLbl = e.target.parentElement.querySelector('span').innerText;
        let tpl = `<div><header><a href="#" class="btn-close"><div class="menu-btn close"><div class="btn-line"></div><div class="btn-line"></div><div class="btn-line"></div></div></a></header><h3><a href="#">${projectTitle}</a></h3><div><img src="${imgUrl}" alt=""><span>${imgLbl}</span><div></div>`;
        projectDetailImageContainer.innerHTML = tpl;
        showImage = true;
        const btnClose = document.querySelector('#project-detail-gallery-image .btn-close');
        const projectTitleLinkBack = document.querySelector('#project-detail-gallery-image h3 a');
        btnClose.addEventListener('click', collapseProjectImage);
        projectTitleLinkBack.addEventListener('click', collapseProjectImage);
        projectDetailContainer.classList.add('blur');
        e.preventDefault();
    }

    function collapseProjectImage() {
        projectDetailImageContainer.innerHTML = '';
        showImage = false;
        projectDetailContainer.classList.remove('blur');
    }

    async function loadProject(e) {
        e.preventDefault();

        if (e.target.getAttribute('data-project') === null &&
            e.path[1].getAttribute('data-project') === null) {
            return false;
        }

        let projectTitle = e.target.innerHTML;
        let getTemplate = e.target.getAttribute('data-project') || e.path[1].getAttribute('data-project');
        let projectTechUsed = e.target.nextElementSibling.innerHTML;
        let projectFile = `./projects/${getTemplate}.html`;
        let projectContent = await getProject(projectFile);
        projectDetailContainer.innerHTML = projectContent;
        projectDetailContainer.querySelector('h3').innerText= projectTitle;

        let projectTechContainer = projectDetailContainer.querySelector('.tech');
        projectTechContainer && (projectTechContainer.innerHTML = projectTechUsed);
        
        mainContainer.classList.add('blur');
        body.classList.add('no-scroll');
        showProject = true;
        const btnClose = document.querySelector('#project-detail .btn-close');
        btnClose.addEventListener('click', closeProject);
        const projectDetailGallery = document.querySelector('#project-detail .gallery');
        projectDetailGallery && projectDetailGallery.addEventListener('click', enlargeProjectImage);

        if(!sessionStorage.getItem('escTooltipShown')) {
            showEscToCloseTip();
        }

        document.querySelectorAll('.demos pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    async function getProject(location) {
        try {
            const response = await fetch(location);
            const data = await response.text();
            return data;
        } catch (err) {
            console.error('Fetch failed', err);
        }
    }

    function closeProject(e) {
        projectDetailContainer.innerHTML = ''
        mainContainer.classList.remove('blur');
        body.classList.remove('no-scroll');
        showProject = false;
        e.preventDefault();
    }

    function showEscToCloseTip() {
        const projectHeader = document.querySelector('#project-detail header');
        const el = document.createElement('aside');
        el.classList.add('esc-to-close-tip')
        el.innerHTML = 'click `Esc` to close';
        projectHeader.prepend(el);
        sessionStorage.setItem('escTooltipShown', true);
    }

    function escAction(e) {
        if(e.keyCode !== 27) {
            return;
        }

        if(showImage === true) {
            collapseProjectImage();
            return false;
        }

        if(showMenu === true) {
            toggleMenu();
        }

        if(showProject === true) {
            closeProject(e);
        }
    }

    function toggleMenu() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));
            mainContainer.classList.add('blur');
            body.classList.add('no-scroll');

            // Set Menu State
            showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));
            mainContainer.classList.remove('blur');
            body.classList.remove('no-scroll');

            // Set Menu State
            showMenu = false;
        }
    }

    function ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function () {

    })
})();
