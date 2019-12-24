(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result-result-module"],{

/***/ "./src/app/result/result.module.ts":
/*!*****************************************!*\
  !*** ./src/app/result/result.module.ts ***!
  \*****************************************/
/*! exports provided: ResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result.page */ "./src/app/result/result.page.ts");







var routes = [
    {
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]
    }
];
var ResultPageModule = /** @class */ (function () {
    function ResultPageModule() {
    }
    ResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]]
        })
    ], ResultPageModule);
    return ResultPageModule;
}());



/***/ }),

/***/ "./src/app/result/result.page.html":
/*!*****************************************!*\
  !*** ./src/app/result/result.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>result</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/result/result.page.scss":
/*!*****************************************!*\
  !*** ./src/app/result/result.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/result/result.page.ts":
/*!***************************************!*\
  !*** ./src/app/result/result.page.ts ***!
  \***************************************/
/*! exports provided: ResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPage", function() { return ResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultPage = /** @class */ (function () {
    function ResultPage() {
    }
    ResultPage.prototype.ngOnInit = function () {
    };
    ResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.page.html */ "./src/app/result/result.page.html"),
            styles: [__webpack_require__(/*! ./result.page.scss */ "./src/app/result/result.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultPage);
    return ResultPage;
}());



/***/ })

}]);
//# sourceMappingURL=result-result-module.js.map