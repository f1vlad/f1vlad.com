(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search-results/search-results.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-text\n  *ngIf=\"hash && BTCaddresses?.length === 0\n    && BCHaddresses?.length === 0\n    && ETHaddresses?.length === 0\n    && IPaddresses?.length === 0\n    && LTCaddresses?.length === 0\n  \"\n  style=\"display: inline-block; padding: 1rem; color: var(--ion-color-danger-tint)\"\n>\n  The value you entered is not a valid address<!-- or transaction ID-->.\n</ion-text>\n\n<ion-card *ngIf=\"BTCaddresses && BTCaddresses.length > 0 && hash\">\n  <ion-list color=\"transparent\" lines=\"none\">\n    <ion-list-header>Trace BTC Addresses</ion-list-header>\n    <ion-item *ngFor=\"let hash of BTCaddresses\" lines=\"none\">\n      <ion-label class=\"typeahead-item\" [routerLink]=\"['/trace/btc', hash]\" [innerHTML]=\"highlight(hash, this.searchTerm)\"></ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-card *ngIf=\"BCHaddresses && BCHaddresses.length > 0 && hash\">\n  <ion-list color=\"transparent\" lines=\"none\">\n    <ion-list-header>Trace BCH Addresses</ion-list-header>\n    <ion-item *ngFor=\"let hash of BCHaddresses\" lines=\"none\">\n      <ion-label class=\"typeahead-item\" [routerLink]=\"['/trace/bch', hash]\" [innerHTML]=\"highlight(hash, this.searchTerm)\"></ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<!-- <ion-card *ngIf=\"BTCtransactions && BTCtransactions.length > 0 && hash\" >\n<ion-list lines=\"full\">\n  <ion-list-header>Trace BTC Transactions</ion-list-header>\n  <ion-list-header><small style=\"color: var(--ion-color-danger)\">experimental, won't be in first version</small></ion-list-header>\n  <ion-item *ngFor=\"let hash of BTCtransactions\" color='transparent' lines='none'>\n    <ion-label [routerLink]=\"['/trace/transaction', hash]\" [innerHTML]=\"highlight(hash, this.searchTerm)\">{{ hash }}</ion-label>\n  </ion-item>\n</ion-list>\n</ion-card> -->\n\n<ion-card *ngIf=\"ETHaddresses && ETHaddresses.length > 0 && hash\">\n  <ion-list color=\"transparent\" lines=\"none\">\n    <ion-list-header>Trace ETH Addresses</ion-list-header>\n    <ion-item *ngFor=\"let hash of ETHaddresses\" color='transparent' lines='none'>\n      <ion-label class=\"typeahead-item\" [routerLink]=\"['/trace/eth', hash]\" [innerHTML]=\"highlight(hash, this.searchTerm)\">{{ hash }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-card *ngIf=\"IPaddresses && IPaddresses.length > 0 && hash\">\n  <ion-list color=\"transparent\" lines=\"none\">\n    <ion-list-header>IPv4 Addresses</ion-list-header>\n    <ion-item *ngFor=\"let hash of IPaddresses\" color='transparent' lines='none'>\n      <ion-label class=\"typeahead-item\" [routerLink]=\"['/trace/ip', hash]\" [innerHTML]=\"highlight(hash, this.searchTerm)\">{{ hash }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-card *ngIf=\"LTCaddresses && LTCaddresses.length > 0 && hash\">\n  <ion-list color=\"transparent\" lines=\"none\">\n    <ion-list-header>Trace LTC Addresses</ion-list-header>\n    <ion-item *ngFor=\"let hash of LTCaddresses\" color='transparent' lines='none'>\n      <ion-label [routerLink]=\"['/trace/ltc', hash]\" [innerHTML]=\"highlight(hash, this.searchTerm)\">{{ hash }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<span *ngIf=\"!hash\">\n  <ion-text\n    style=\"display: inline-block; padding: 10px 26px\"\n  >\n      Type or paste a BTC, BCH, ETH, LTC or IP address<!-- or transaction ID in a search box above-->.\n  </ion-text>\n  <ion-card *ngIf=\"traceHistory\">\n    <ion-list-header>\n      Trace history\n    </ion-list-header>\n    <ion-list color=\"transparent\" lines=\"none\">\n      <div *ngFor=\"let th of traceHistory\">\n        <ion-item color='transparent' lines='none'>\n          <ion-label [routerLink]=\"['/trace/' + th.coinType, th.hash]\">{{ th.hash }}</ion-label>\n          <span><small style=\"margin: 0 .5rem; text-transform: uppercase\">{{ th.coinType }}</small></span>\n          <span *ngIf=\"th.score\" class=\"risk-score score-{{ th.score }}\"\n            style=\"\n\n            \"\n          ><span>{{ th.score }}</span></span>\n        </ion-item>\n      </div>\n    </ion-list>\n  </ion-card>\n<span>\n"

/***/ }),

/***/ "./src/app/search/search-results/search-results.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".risk-score {\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  text-align: center;\n  border: 3px solid #ccc;\n  font-size: .9rem;\n  letter-spacing: -2px;\n  display: flex; }\n  .risk-score > span {\n    width: 90%; }\n  .risk-score.score-10, .risk-score.score-9, .risk-score.score-8 {\n    border-color: var(--ion-color-danger);\n    color: var(--ion-color-danger); }\n  .risk-score.score-5, .risk-score.score-4 {\n    border-color: var(--ion-color-warning);\n    color: var(--ion-color-warning); }\n  .risk-score.score-2, .risk-score.score-1 {\n    border-color: var(--ion-color-success);\n    color: var(--ion-color-success); }\n  .risk-score.score-0 {\n    border-color: var(--ion-color-medium);\n    color: var(--ion-color-medium); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWEsRUFBQTtFQVRqQjtJQVlRLFVBQVUsRUFBQTtFQVpsQjtJQW9CWSxxQ0FBcUM7SUFDckMsOEJBQThCLEVBQUE7RUFyQjFDO0lBMEJZLHNDQUFzQztJQUN0QywrQkFBK0IsRUFBQTtFQTNCM0M7SUFnQ1ksc0NBQXNDO0lBQ3RDLCtCQUErQixFQUFBO0VBakMzQztJQXFDWSxxQ0FBcUM7SUFDckMsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlzay1zY29yZSB7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgPiBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAmLnNjb3JlIHtcblxuICAgICAgICAmLTEwLFxuICAgICAgICAmLTksXG4gICAgICAgICYtOCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi01LFxuICAgICAgICAmLTQge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0yLFxuICAgICAgICAmLTEgIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtMCAge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search-results/search-results.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent() {
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.searchTerm = this.hash;
    };
    SearchResultsComponent.prototype.highlight = function (hash, searchTerm) {
        // match first occurance, case incensitive
        return hash.replace(new RegExp(searchTerm, "i"), function (match) {
            return '<span class="highlight">' + match + '</span>';
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", void 0)
    ], SearchResultsComponent.prototype, "hash", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchResultsComponent.prototype, "searchTerm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "BTCaddresses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "BCHaddresses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "BTCtransactions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "ETHaddresses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "IPaddresses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchResultsComponent.prototype, "LTCaddresses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchResultsComponent.prototype, "traceHistory", void 0);
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.scss */ "./src/app/search/search-results/search-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared-module */ "./src/app/components/shared-module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search/search-results/search-results.component.ts");









var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"], _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"halo-burger\">\n        <img src='assets/halo-burger.svg'>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-searchbar animated debounce=\"500\" (keyup)=\"hashTypeahead(search.value)\" #search></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <app-search-results\n    [searchTerm]=\"this.searchTerm\"\n    [hash]=\"this.hash\"\n    [BTCaddresses]=\"this.BTCaddresses\"\n    [ETHaddresses]=\"this.ETHaddresses\"\n    [BTCtransactions]=\"this.BTCtransactions\"\n    [BCHaddresses]=\"this.BCHaddresses\"\n    [LTCaddresses]=\"this.LTCaddresses\"\n    [IPaddresses]=\"this.IPaddresses\"\n    [traceHistory]=\"this.traceHistory\"\n  ></app-search-results>\n\n  <app-search-results-skeleton *ngIf=\"hash && (!BTCaddresses || !BTCtransactions || !ETHaddresses)\"></app-search-results-skeleton>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-menu-button.halo-burger {\n  --padding-end: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24uaGFsby1idXJnZXIge1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trace_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/trace.service */ "./src/app/services/trace.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");






var SearchPage = /** @class */ (function () {
    function SearchPage(traceService, authenticationService, router, storage) {
        this.traceService = traceService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.storage = storage;
        this.hash = undefined;
        this.searchTerm = undefined;
        this.BTCaddresses = undefined;
        this.BTCtransactions = undefined;
        this.ETHaddresses = undefined;
        this.LTCaddresses = undefined;
        this.BCHaddresses = undefined;
        this.IPaddresses = undefined;
        this.traceHistory = undefined;
    }
    SearchPage.prototype.ngOnInit = function () {
        this.getTraceHistory();
    };
    SearchPage.prototype.traceHash = function (hash) {
        var _this = this;
        this.traceService.searchHash(hash).toPromise().then(function (res) {
            _this.BTCaddresses = res['results']['btc_addr'];
            _this.BTCtransactions = res['results']['btc_tx'];
            _this.ETHaddresses = res['results']['eth_addr'];
            _this.BCHaddresses = res['results']['bch_addr'];
            _this.LTCaddresses = res['results']['ltc_addr'];
            _this.IPaddresses = res['results']['ip'];
        }).catch(function (err) {
            switch (err.split(':')[0]) {
                // ❗❗❗below switching stuff needs to reside on ctbase service level not here.
                // Bad request response, e.g. ../api/v1/search?q=1[[$&types=all
                case '400':
                case '500':
                    // imitate no results to show that address entered is invalid
                    _this.BTCaddresses = _this.BTCtransactions = _this.BCHaddresses = _this.ETHaddresses = [];
                    break;
                // Unauthorized response, happens when app has been open a while
                // and session with API has expired
                case '401':
                    _this.authenticationService.logout();
                    _this.router.navigateByUrl('/login');
                    break;
            }
        });
    };
    SearchPage.prototype.getTraceHistory = function () {
        var _this = this;
        this.storage.get('trace_history').then(function (val) {
            // console.log(val)
            // debugger
            // this.traceHistory = JSON.stringify(val);
            _this.traceHistory = val.reverse();
        });
    };
    SearchPage.prototype.hashTypeahead = function (hash) {
        !!hash && this.traceHash(hash); // TODO: probably want to debounce this event
        this.hash = hash;
        this.searchTerm = hash;
        this.BTCaddresses = this.BCHaddresses = this.BTCtransactions = this.ETHaddresses = this.IPaddresses = undefined;
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trace_service__WEBPACK_IMPORTED_MODULE_2__["TraceService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map