(function() {
    let queryStr = window.location.href.split("?");
    let splash;
    let splashContent = `
        <h1><span>ARETE</span>SECURITY</h1>
        <h2>The wreath of laurels represents the virtue of honor</h2>
        <div class="logoWrap"><img src="logo.svg" /></div>
        <span class="moon chroma4"></span>
        <span class="planet chroma0"></span>
        <span class="planet chroma1"></span>
        <span class="planet chroma2"></span>
        <span class="moon chroma3"></span>
        <span class="moon chroma5"></span>
        <span class="stars chroma6"></span>
        <span class="stars chroma7"></span>
        <script src="splash.js"></script>
    `;

    queryStr[1] === 'splash=true' ? splash = null : splash = sessionStorage.getItem('splash');

    if(splash === null) { // Splash screen has never been seen
        // using reset function here as functionality is the same for reset or initial
        resetAndShowSplash();
    } else { // Splash screen has been seen some time ago
        splash = JSON.parse(splash);

        // get difference between last seen and now in seconds
        let sinceLastSeen = (Date.now() - splash[1].timestamp) / 1000;
        
        // one month in seconds
        let oneMonthInSeconds = 2.628e+6;

        sinceLastSeen >= oneMonthInSeconds && resetAndShowSplash();
    }

    function resetAndShowSplash() {
        let splashContainer = document.createElement('section');
        splashContainer.classList.add('splash');
        splashContainer.innerHTML = splashContent;
        document.body.appendChild(splashContainer);

        splash = [{shown: true}, {timestamp: Date.now()}];
        sessionStorage.setItem('splash', JSON.stringify(splash));
        let splashEl = document.querySelector('.splash');
        splashEl.classList.add('shown');

        if(queryStr[1] === 'splash=true') {
            return false;
        }

        splashEl.classList.add('delete-start');
        setTimeout(removeSplashEl, 8000);
    }

    function removeSplashEl() {
        document.querySelector('.splash').remove();
    }
})();
