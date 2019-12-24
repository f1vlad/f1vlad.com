(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/safari-view-controller/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: SafariViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafariViewController", function() { return SafariViewController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SafariViewController = /** @class */ (function (_super) {
    __extends(SafariViewController, _super);
    function SafariViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewController.prototype.isAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isAvailable", {}, arguments); };
    SafariViewController.prototype.show = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewController.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hide", {}, arguments); };
    SafariViewController.prototype.connectToService = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "connectToService", {}, arguments); };
    SafariViewController.prototype.warmUp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "warmUp", {}, arguments); };
    SafariViewController.prototype.mayLaunchUrl = function (url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "mayLaunchUrl", {}, arguments); };
    SafariViewController.pluginName = "SafariViewController";
    SafariViewController.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewController.pluginRef = "SafariViewController";
    SafariViewController.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewController.platforms = ["Android", "iOS"];
    SafariViewController = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SafariViewController);
    return SafariViewController;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NhZmFyaS12aWV3LWNvbnRyb2xsZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtRVEsd0NBQWlCOzs7O0lBTXpELDBDQUFXO0lBY1gsbUNBQUksYUFBQyxPQUFxQztJQVExQyxtQ0FBSTtJQVNKLCtDQUFnQjtJQVNoQixxQ0FBTTtJQVVOLDJDQUFZLGFBQUMsR0FBVzs7Ozs7O0lBeERiLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7T0FDQSxvQkFBb0I7K0JBckVqQztFQXFFMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9ucyB7XG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgYmFyQ29sb3I/OiBzdHJpbmc7XG4gIGNvbnRyb2xUaW50Q29sb3I/OiBzdHJpbmc7XG4gIGVudGVyUmVhZGVyTW9kZUlmQXZhaWxhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgc2hvd0RlZmF1bHRTaGFyZU1lbnVJdGVtPzogYm9vbGVhbjtcbiAgdGludENvbG9yPzogc3RyaW5nO1xuICB0b29sYmFyQ29sb3I/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZvciBkaXNwbGF5aW5nIHJlYWQtb25seSB3ZWIgY29udGVudC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NhZmFyaSBWaWV3IENvbnRyb2xsZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTYWZhcmlWaWV3Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2FmYXJpLXZpZXctY29udHJvbGxlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FmYXJpVmlld0NvbnRyb2xsZXI6IFNhZmFyaVZpZXdDb250cm9sbGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNhZmFyaVZpZXdDb250cm9sbGVyLmlzQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICogICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICpcbiAqICAgICAgICAgdGhpcy5zYWZhcmlWaWV3Q29udHJvbGxlci5zaG93KHtcbiAqICAgICAgICAgICB1cmw6ICdodHRwOi8vaW9uaWMuaW8nLFxuICogICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gKiAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICogICAgICAgICAgIHRyYW5zaXRpb246ICdjdXJsJyxcbiAqICAgICAgICAgICBlbnRlclJlYWRlck1vZGVJZkF2YWlsYWJsZTogdHJ1ZSxcbiAqICAgICAgICAgICB0aW50Q29sb3I6ICcjZmYwMDAwJ1xuICogICAgICAgICB9KVxuICogICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xuICogICAgICAgICAgICAgaWYocmVzdWx0LmV2ZW50ID09PSAnb3BlbmVkJykgY29uc29sZS5sb2coJ09wZW5lZCcpO1xuICogICAgICAgICAgICAgZWxzZSBpZihyZXN1bHQuZXZlbnQgPT09ICdsb2FkZWQnKSBjb25zb2xlLmxvZygnTG9hZGVkJyk7XG4gKiAgICAgICAgICAgICBlbHNlIGlmKHJlc3VsdC5ldmVudCA9PT0gJ2Nsb3NlZCcpIGNvbnNvbGUubG9nKCdDbG9zZWQnKTtcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICAgICAgICApO1xuICpcbiAqICAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgIC8vIHVzZSBmYWxsYmFjayBicm93c2VyLCBleGFtcGxlIEluQXBwQnJvd3NlclxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NhZmFyaVZpZXdDb250cm9sbGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxuICBwbHVnaW5SZWY6ICdTYWZhcmlWaWV3Q29udHJvbGxlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYWZhcmlWaWV3Q29udHJvbGxlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBTYWZhcmlWaWV3Q29udHJvbGxlciBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnN9IG9wdGlvbmFsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBzaG93KG9wdGlvbnM/OiBTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gY29ubmVjdCB0byB0aGUgIENocm9tZSdzIGN1c3RvbSB0YWJzIHNlcnZpY2UuIHlvdSBtdXN0IGNhbGwgdGhpcyBtZXRob2QgYmVmb3JlIGNhbGxpbmcgYW55IG9mIHRoZSBvdGhlciBtZXRob2RzIGxpc3RlZCBiZWxvdy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdFRvU2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW5ldmVyIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHVzZXIgd2lsbCBvcGVuIGFuIGV4dGVybmFsIHVybC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd2FybVVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBldmVuIGJldHRlciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIGNhbGwgdGhpcyBtZXRob2RzIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIGEgNTAlIGNoYW5jZSB0aGUgdXNlciB3aWxsIG9wZW4gYSBjZXJ0YWluIFVSTC5cbiAgICogQHBhcmFtIHVybHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1heUxhdW5jaFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            providers: [_ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_7__["SafariViewController"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <div class=\"corp-identity\" (press)=\"envSettings()\">\n        <div class=\"splash-logo\">\n            <img src=\"assets/ctlogo-white.png\" class=\"ciphertrace-logo\">\n        </div>\n    </div>\n    <form [formGroup]=\"loginFormGroup\">\n        <ion-grid>\n            <ion-row color=\"primary\" justify-content-center>\n                <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                    <div padding>\n                        <ion-item color=\"none\">\n                            <ion-label position=\"floating\">\n                                Username or email\n                                <span *ngIf=\"username.hasError('required') && username.touched\">\n                                    field is required\n                                </span>\n                            </ion-label>\n                            <ion-input\n                                lines=\"full\"\n                                class=\"ion-no-margin ion-no-padding\"\n                                type=\"username\"\n                                name=\"username\"\n                                formControlName=\"username\"\n                                autocomplete=\"username\"\n                            ></ion-input>\n                        </ion-item>\n                        <ion-item color=\"none\">\n                            <ion-label position=\"floating\">\n                                Password\n                                <span *ngIf=\"password.hasError('required') && password.touched\">\n                                    is required\n                                </span>\n                            </ion-label>\n                            <ion-input\n                                lines=\"full\"\n                                class=\"ion-no-margin ion-no-padding\"\n                                type=\"password\"\n                                name=\"password\"\n                                formControlName=\"password\"\n                                autocomplete=\"on\"\n                            ></ion-input>\n                        </ion-item>\n                    </div>\n                    <div padding>\n                        <ion-button type=\"submit\" (click)=\"login()\" expand=\"block\" [disabled]=\"!loginFormGroup.valid\"\n                            fill=\"outline\">\n                            <ion-ripple-effect></ion-ripple-effect>\n                            Login\n                        </ion-button>\n                    </div>\n                    <div class=\"footer\">\n                        <div>\n                            <a (click)=\"signup()\" style=\"padding: .75rem\">Request a CipherTrace login</a>\n                        </div>\n                        <div>\n                            &copy; August 2019 CipherTrace, Inc. <aside *ngIf=\"appVersionString\">Version {{ appVersionString }}</aside>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 0;\n  --padding-start: 0;\n  --padding-end: 0; }\n\n.splash-logo,\n.splash-app-name,\nform,\nfooter {\n  z-index: 1; }\n\nform {\n  position: relative; }\n\n.corp-identity {\n  height: 40vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: var(--ion-color-primary); }\n\n.corp-identity .splash-logo {\n    position: relative;\n    text-align: center;\n    width: 100%; }\n\n.corp-identity .splash-logo img {\n      width: 230px; }\n\nion-content {\n  overflow: hidden; }\n\nion-content ion-item {\n    color: #000;\n    background: transparent; }\n\nion-content {\n  position: relative; }\n\n.footer {\n  text-align: center;\n  font-size: .75rem; }\n\n.footer > div {\n    display: block;\n    height: 1.75rem; }\n\n.footer aside {\n    display: inline-block; }\n\n.splash-background {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQWM7RUFDZCxrQkFBZ0I7RUFDaEIsZ0JBQWMsRUFBQTs7QUFHbEI7Ozs7RUFJSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0NBQW9DLEVBQUE7O0FBTHhDO0lBUVEsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBVm5CO01BWVksWUFBWSxFQUFBOztBQUt4QjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUlRLFdBQVc7SUFDWCx1QkFBdUIsRUFBQTs7QUFJL0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRnJCO0lBS1EsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFOdkI7SUFVUSxxQkFBcUIsRUFBQTs7QUFJN0I7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zcGxhc2gtbG9nbyxcbi5zcGxhc2gtYXBwLW5hbWUsXG5mb3JtLFxuZm9vdGVyIHtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb3JwLWlkZW50aXR5IHtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgIC5zcGxhc2gtbG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IC43NXJlbTtcblxuICAgID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMS43NXJlbTtcbiAgICB9XG5cbiAgICBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG5cbi5zcGxhc2gtYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");






// import * as hammerjs from 'hammerjs';


var LoginPage = /** @class */ (function () {
    function LoginPage(authService, route, router, menuCtrl, formBuilder, safariViewController, appVersion) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.safariViewController = safariViewController;
        this.appVersion = appVersion;
        this.loginFormGroup = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.username = this.loginFormGroup.controls['username'];
        this.password = this.loginFormGroup.controls['password'];
    }
    LoginPage.prototype.ngOnInit = function () {
        // reset login status
        // this.authenticationService.logout();
        var _this = this;
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.appVersion.getVersionNumber().then(function (value) {
            _this.appVersionString = value;
        }).catch(function (err) {
            console.error("Automatic version # fetch failed: " + err);
        });
    };
    LoginPage.prototype.signup = function () {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: 'https://ciphertrace.com/ios-signup/',
                    hidden: false,
                    animated: true,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                })
                    .subscribe(function (result) {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed')
                        console.log('Closed');
                }, function (error) { return console.error(error); });
            }
            else {
                // use fallback browser, example InAppBrowser
            }
        });
    };
    LoginPage.prototype.envSettings = function () {
        this.router.navigateByUrl('/appinfo');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.username.value, this.password.value)
            .then(function (data) {
            // login successful so redirect to return url
            _this.loginFormGroup.reset();
            _this.router.navigateByUrl(_this.returnUrl);
        });
        // },
        // error => {
        // login failed so display error
        //     this.alertService.error(error);
        //     this.loading = false;
        // });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__["SafariViewController"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map