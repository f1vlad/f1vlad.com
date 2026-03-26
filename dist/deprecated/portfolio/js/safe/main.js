"use strict";

(function (section) {
  var bodySelector = document.querySelector("body");
  var header = document.createElement("header");
  var page;
  var headerContent =
    '\n        <div class="menu-btn">\n            <div class="btn-line"></div>\n            <div class="btn-line"></div>\n            <div class="btn-line"></div>\n        </div>\n    \n        <nav class="menu">\n            <div class="menu-branding">\n                <div class="portrait"></div>\n            </div>\n    \n            <ul class="menu-nav">\n                <li class="nav-item home">\n                    <a href="./" class="nav-link">\n                        Home\n                    </a>\n                </li>\n                <li class="nav-item about">\n                    <a href="./about.html" class="nav-link">\n                        About\n                    </a>\n                </li>\n                <li class="nav-item work">\n                    <a href="./work.html" class="nav-link">\n                        My work\n                    </a>\n                </li>\n                <li class="nav-item contact">\n                    <a href="./contact.html" class="nav-link">\n                        How to reach me\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    ';
  header.innerHTML = headerContent;
  page = section.split("/");
  page = page[page.length - 1];
  page = page.split(".");
  page = page[0];

  if (page === "") {
    page = "home";
  }

  header.querySelector(".".concat(page)).classList.add("current");
  bodySelector.prepend(header);
})(location.href);

(function () {
  // Selectors
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.querySelector(".menu");
  var menuNav = document.querySelector(".menu-nav");
  var menuBranding = document.querySelector(".menu-branding");
  var navItems = document.querySelectorAll(".nav-item");
  var mainContainer = document.querySelector("main"); // Set initial state of menu

  var showMenu = false;
  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach(function (item) {
        return item.classList.add("show");
      });
      mainContainer.classList.add("blur"); // Set Menu State

      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach(function (item) {
        return item.classList.remove("show");
      });
      mainContainer.classList.remove("blur"); // Set Menu State

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
