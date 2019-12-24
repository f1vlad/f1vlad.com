(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-share-module"],{

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: SharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share.page */ "./src/app/share/share.page.ts");







var routes = [
    {
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]
    }
];
var SharePageModule = /** @class */ (function () {
    function SharePageModule() {
    }
    SharePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]]
        })
    ], SharePageModule);
    return SharePageModule;
}());



/***/ }),

/***/ "./src/app/share/share.page.html":
/*!***************************************!*\
  !*** ./src/app/share/share.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <img class=\"modestlogo\" src=\"assets/ctlogo.png\">\n  </ion-toolbar>\n  <h3 class=\"ion-text-center\">Crypto Currency Field Validator</h3>\n</ion-header>\n\n<!-- <ion-header class=\"ion-text-center ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src=\"assets/ctlogo.png\">\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding-top\">\n        <ion-col>\n          <ion-text>\n            <h1>CRYPTO CURRENCY FIELD VALIDATOR</h1>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-header> -->\n\n<ion-content class=\"ion-padding\">\n<ion-item>\n    <ion-text color=\"primary\">3NNMRatfs5SBVHi8vAPDxtJvN6WRe7EM3y</ion-text>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Email</ion-label>\n  <ion-input type=\"email\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Notes</ion-label>\n  <ion-textarea rows=\"10\"></ion-textarea>\n</ion-item>\n<ion-button expand=\"block\">\n    <ion-ripple-effect></ion-ripple-effect>\n  Share\n  <ion-icon slot=\"end\" name=\"send\"></ion-icon>\n</ion-button>\n\n\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-text-center\">\n  2019 Copyright CipherTrace, Inc.\n</ion-footer>"

/***/ }),

/***/ "./src/app/share/share.page.scss":
/*!***************************************!*\
  !*** ./src/app/share/share.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modestlogo {\n  display: block;\n  height: 2.5rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvc2hhcmUvc2hhcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvc2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGVzdGxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/share/share.page.ts":
/*!*************************************!*\
  !*** ./src/app/share/share.page.ts ***!
  \*************************************/
/*! exports provided: SharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePage", function() { return SharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharePage = /** @class */ (function () {
    function SharePage() {
    }
    SharePage.prototype.ngOnInit = function () {
    };
    SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.page.html */ "./src/app/share/share.page.html"),
            styles: [__webpack_require__(/*! ./share.page.scss */ "./src/app/share/share.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharePage);
    return SharePage;
}());



/***/ })

}]);
//# sourceMappingURL=share-share-module.js.map