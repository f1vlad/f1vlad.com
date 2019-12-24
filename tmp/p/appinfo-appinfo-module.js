(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appinfo-appinfo-module"],{

/***/ "./src/app/appinfo/appinfo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/appinfo/appinfo.module.ts ***!
  \*******************************************/
/*! exports provided: AppinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppinfoPageModule", function() { return AppinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _appinfo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appinfo.page */ "./src/app/appinfo/appinfo.page.ts");








var routes = [
    {
        path: '',
        component: _appinfo_page__WEBPACK_IMPORTED_MODULE_7__["AppinfoPage"]
    }
];
var AppinfoPageModule = /** @class */ (function () {
    function AppinfoPageModule() {
    }
    AppinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]],
            declarations: [_appinfo_page__WEBPACK_IMPORTED_MODULE_7__["AppinfoPage"]]
        })
    ], AppinfoPageModule);
    return AppinfoPageModule;
}());



/***/ }),

/***/ "./src/app/appinfo/appinfo.page.html":
/*!*******************************************!*\
  !*** ./src/app/appinfo/appinfo.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button [text]=\"backButtonText\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Environment Settings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- <ion-list-header>Environment</ion-list-header> -->\n    <ion-item>\n      <ion-label>Backend</ion-label>\n      <ion-select placeholder=\"Production\" interface=\"action-sheet\" [(ngModel)]=\"backend\"\n      (ionChange)=\"updateBackend()\">\n        <ion-select-option value=\"prod\">Production</ion-select-option>\n        <ion-select-option value=\"stag\">Staging</ion-select-option>\n        <ion-select-option value=\"prev\">Preview</ion-select-option>\n        <ion-select-option value=\"dev\">Development</ion-select-option>\n        <ion-select-option value=\"local\">Local</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label>Platforms</ion-label>\n      {{plt.platforms()}}\n    </ion-item> -->\n  </ion-list>\n  <!-- <ion-list *ngIf=\"plt.is('cordova')\">\n    <ion-list-header>Cordova App Info</ion-list-header> -->\n<!--    <ion-item>-->\n<!--      <ion-label>Application Name</ion-label>-->\n<!--      {{appVersion.getAppName()}}-->\n<!--    </ion-item>-->\n<!--    <ion-item>-->\n<!--      <ion-label>Package Name</ion-label>-->\n<!--      {{appVersion.getPackageName()}}-->\n<!--    </ion-item>-->\n<!--    <ion-item>-->\n<!--      <ion-label>Version Code</ion-label>-->\n<!--      {{appVersion.getVersionCode()}}-->\n<!--    </ion-item>-->\n<!--    <ion-item>-->\n<!--      <ion-label>Version Number</ion-label>-->\n<!--      {{appVersion.getVersionNumber()}}-->\n<!--    </ion-item>-->\n<!-- </ion-list> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/appinfo/appinfo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/appinfo/appinfo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGluZm8vYXBwaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/appinfo/appinfo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/appinfo/appinfo.page.ts ***!
  \*****************************************/
/*! exports provided: AppinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppinfoPage", function() { return AppinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");





var AppinfoPage = /** @class */ (function () {
    function AppinfoPage(plt, appVersion, store) {
        this.plt = plt;
        this.appVersion = appVersion;
        this.store = store;
        this.backButtonText = '';
    }
    AppinfoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.store.getEnv()];
                    case 1:
                        _a.backend = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppinfoPage.prototype.updateBackend = function () {
        this.store.switchUserEnv(null, this.backend);
    };
    AppinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appinfo',
            template: __webpack_require__(/*! ./appinfo.page.html */ "./src/app/appinfo/appinfo.page.html"),
            styles: [__webpack_require__(/*! ./appinfo.page.scss */ "./src/app/appinfo/appinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"], _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
    ], AppinfoPage);
    return AppinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=appinfo-appinfo-module.js.map