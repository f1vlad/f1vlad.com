(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[178],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/legacy/pwa-toast.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/legacy/pwa-toast.entry.js ***!
  \*****************************************************************************/
/*! exports provided: pwa_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pwa_toast", function() { return PWAToast; });
/* harmony import */ var _ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionicpwaelements-51948158.js */ "./node_modules/@ionic/pwa-elements/dist/esm/legacy/ionicpwaelements-51948158.js");

var PWAToast = /** @class */ (function () {
    function PWAToast(hostRef) {
        Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.duration = 2000;
        this.closing = null;
    }
    PWAToast.prototype.hostData = function () {
        var classes = {
            out: !!this.closing
        };
        if (this.closing !== null) {
            classes['in'] = !this.closing;
        }
        return {
            class: classes
        };
    };
    PWAToast.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.closing = false;
        });
        setTimeout(function () {
            _this.close();
        }, this.duration);
    };
    PWAToast.prototype.close = function () {
        var _this = this;
        this.closing = true;
        setTimeout(function () {
            _this.el.parentNode.removeChild(_this.el);
        }, 1000);
    };
    PWAToast.prototype.__stencil_render = function () {
        return (Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "wrapper" }, Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "toast" }, this.message)));
    };
    Object.defineProperty(PWAToast.prototype, "el", {
        get: function () { return Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    PWAToast.prototype.render = function () { return Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["h"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(PWAToast, "style", {
        get: function () { return ":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}"; },
        enumerable: true,
        configurable: true
    });
    return PWAToast;
}());



/***/ })

}]);
//# sourceMappingURL=178.js.map