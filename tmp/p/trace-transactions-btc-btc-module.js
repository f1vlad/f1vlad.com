(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trace-transactions-btc-btc-module"],{

/***/ "./src/app/components/transactions-view/transactions-view.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transactions-view/transactions-view.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  transactions view\n\n  {{ hash }}\n\n  {{ data }}\n\n</p>\n"

/***/ }),

/***/ "./src/app/components/transactions-view/transactions-view.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transactions-view/transactions-view.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zLXZpZXcvdHJhbnNhY3Rpb25zLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/transactions-view/transactions-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/transactions-view/transactions-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TransactionsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsViewComponent", function() { return TransactionsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransactionsViewComponent = /** @class */ (function () {
    function TransactionsViewComponent() {
    }
    TransactionsViewComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransactionsViewComponent.prototype, "hash", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransactionsViewComponent.prototype, "data", void 0);
    TransactionsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions-view',
            template: __webpack_require__(/*! ./transactions-view.component.html */ "./src/app/components/transactions-view/transactions-view.component.html"),
            styles: [__webpack_require__(/*! ./transactions-view.component.scss */ "./src/app/components/transactions-view/transactions-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransactionsViewComponent);
    return TransactionsViewComponent;
}());



/***/ }),

/***/ "./src/app/trace/transactions/btc/btc-view/btc-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc-view/btc-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  transactions for {{ hash }}<br>\n  <!-- {{ BTCtransactions }}<br> -->\n  <br>\n  transaction hash \n  <!-- {{ BTCtransactions.transactions[0].hash }} -->\n</p>\n"

/***/ }),

/***/ "./src/app/trace/transactions/btc/btc-view/btc-view.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc-view/btc-view.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNlL3RyYW5zYWN0aW9ucy9idGMvYnRjLXZpZXcvYnRjLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/trace/transactions/btc/btc-view/btc-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc-view/btc-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: BtcViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcViewComponent", function() { return BtcViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BtcViewComponent = /** @class */ (function () {
    // @Input() BTCtransactions;
    function BtcViewComponent() {
    }
    BtcViewComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BtcViewComponent.prototype, "hash", void 0);
    BtcViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btc-view',
            template: __webpack_require__(/*! ./btc-view.component.html */ "./src/app/trace/transactions/btc/btc-view/btc-view.component.html"),
            styles: [__webpack_require__(/*! ./btc-view.component.scss */ "./src/app/trace/transactions/btc/btc-view/btc-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BtcViewComponent);
    return BtcViewComponent;
}());



/***/ }),

/***/ "./src/app/trace/transactions/btc/btc.module.ts":
/*!******************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc.module.ts ***!
  \******************************************************/
/*! exports provided: BtcPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcPageModule", function() { return BtcPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _btc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./btc.page */ "./src/app/trace/transactions/btc/btc.page.ts");
/* harmony import */ var _btc_view_btc_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./btc-view/btc-view.component */ "./src/app/trace/transactions/btc/btc-view/btc-view.component.ts");
/* harmony import */ var _components_transactions_view_transactions_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/transactions-view/transactions-view.component */ "./src/app/components/transactions-view/transactions-view.component.ts");









var routes = [
    {
        path: '',
        component: _btc_page__WEBPACK_IMPORTED_MODULE_6__["BtcPage"]
    }
];
var BtcPageModule = /** @class */ (function () {
    function BtcPageModule() {
    }
    BtcPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_btc_page__WEBPACK_IMPORTED_MODULE_6__["BtcPage"], _btc_view_btc_view_component__WEBPACK_IMPORTED_MODULE_7__["BtcViewComponent"], _components_transactions_view_transactions_view_component__WEBPACK_IMPORTED_MODULE_8__["TransactionsViewComponent"]]
        })
    ], BtcPageModule);
    return BtcPageModule;
}());



/***/ }),

/***/ "./src/app/trace/transactions/btc/btc.page.html":
/*!******************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/\" [text]=\"backButtonText\"></ion-back-button>\n      </ion-buttons>\n      <ion-item lines=\"none\">\n        <ion-label>\n          {{ hash }}\n        </ion-label>\n      </ion-item>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <app-transactions-view [hash]=\"hash\" [data]=\"data\"></app-transactions-view>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/trace/transactions/btc/btc.page.scss":
/*!******************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNlL3RyYW5zYWN0aW9ucy9idGMvYnRjLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/trace/transactions/btc/btc.page.ts":
/*!****************************************************!*\
  !*** ./src/app/trace/transactions/btc/btc.page.ts ***!
  \****************************************************/
/*! exports provided: BtcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcPage", function() { return BtcPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/trace.service */ "./src/app/services/trace.service.ts");




var BtcPage = /** @class */ (function () {
    function BtcPage(activatedRoute, traceService) {
        this.activatedRoute = activatedRoute;
        this.traceService = traceService;
        this.backButtonText = '';
    }
    BtcPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('hash')) {
                // TODO: route to homepage / display error?
                return;
            }
            _this.hash = paramMap.get('hash');
            _this.fetchData(_this.hash);
        });
    };
    BtcPage.prototype.fetchData = function (hash) {
        var _this = this;
        this.traceService.fetchTransaction(hash).toPromise().then(function (res) {
            console.log(res);
            _this.data = res;
        });
    };
    BtcPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btc',
            template: __webpack_require__(/*! ./btc.page.html */ "./src/app/trace/transactions/btc/btc.page.html"),
            styles: [__webpack_require__(/*! ./btc.page.scss */ "./src/app/trace/transactions/btc/btc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_trace_service__WEBPACK_IMPORTED_MODULE_3__["TraceService"]])
    ], BtcPage);
    return BtcPage;
}());



/***/ })

}]);
//# sourceMappingURL=trace-transactions-btc-btc-module.js.map