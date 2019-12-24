(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trace-coin-eth-eth-module"],{

/***/ "./src/app/trace/coin/eth/eth.module.ts":
/*!**********************************************!*\
  !*** ./src/app/trace/coin/eth/eth.module.ts ***!
  \**********************************************/
/*! exports provided: EthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthPageModule", function() { return EthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eth.page */ "./src/app/trace/coin/eth/eth.page.ts");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/shared-module */ "./src/app/components/shared-module.ts");








var routes = [
    {
        path: '',
        component: _eth_page__WEBPACK_IMPORTED_MODULE_6__["EthPage"]
    }
];
var EthPageModule = /** @class */ (function () {
    function EthPageModule() {
    }
    EthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_eth_page__WEBPACK_IMPORTED_MODULE_6__["EthPage"]]
        })
    ], EthPageModule);
    return EthPageModule;
}());



/***/ }),

/***/ "./src/app/trace/coin/eth/eth.page.html":
/*!**********************************************!*\
  !*** ./src/app/trace/coin/eth/eth.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" [text]=\"backButtonText\"></ion-back-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" color=\"transparent\">\n      <ion-label *ngIf=\"transactions\">\n        {{ hash }}\n      </ion-label>\n      <ion-label *ngIf=\"!transactions\">\n        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n    <ion-buttons *ngIf=\"transactions\" slot=\"primary\">\n      <ion-button (click)=\"presentAddPopover()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <app-coin-view\n    [hash]=\"hash\"\n    [coinScore]=\"coinScore\"\n    [transactions]=\"transactions\"\n    [owner]=\"owner\"\n    [walletId]=\"\"\n    coinType=\"eth\"\n    [writableCases]=\"writableCases\"\n    [availableCases]=\"availableCases\"\n    [countryFlag]=\"countryFlag\"\n    [countryFullName]=\"countryFullName\"\n  ></app-coin-view>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/trace/coin/eth/eth.page.scss":
/*!**********************************************!*\
  !*** ./src/app/trace/coin/eth/eth.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNlL2NvaW4vZXRoL2V0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/trace/coin/eth/eth.page.ts":
/*!********************************************!*\
  !*** ./src/app/trace/coin/eth/eth.page.ts ***!
  \********************************************/
/*! exports provided: EthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthPage", function() { return EthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/trace.service */ "./src/app/services/trace.service.ts");
/* harmony import */ var src_app_services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case.service */ "./src/app/services/case.service.ts");
/* harmony import */ var _components_address_add_address_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/address-add/address-add.component */ "./src/app/components/address-add/address-add.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! country-code-emoji */ "./node_modules/country-code-emoji/lib/index.umd.js");
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(country_code_emoji__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(country_code_lookup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);












var EthPage = /** @class */ (function () {
    function EthPage(activatedRoute, traceService, caseService, popoverController, toastController) {
        this.activatedRoute = activatedRoute;
        this.traceService = traceService;
        this.caseService = caseService;
        this.popoverController = popoverController;
        this.toastController = toastController;
        this.backButtonText = '';
    }
    EthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('hash')) {
                return;
            }
            _this.hash = paramMap.get('hash');
            _this.fetchData(_this.hash);
        });
    };
    EthPage.prototype.fetchData = function (hash) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.fetchScore(hash),
                            this.fetchTransactions(),
                            this.fetchCases()
                        ])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EthPage.prototype.fetchScore = function (hash) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.traceService.fetchCoinScore(hash, 'eth').toPromise().then(function (res) {
                            _this.coinScore = res;
                        })
                            .catch(function (err) {
                            console.error("Error: " + err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EthPage.prototype.fetchTransactions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.traceService.fetchCoinTransactions(this.hash, 'eth').toPromise().then(function (res) {
                            _this.transactions = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, 'summary', undefined);
                            _this.owner = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, "wallets[" + _this.hash + "].owner", undefined);
                            _this.countryFlag = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, "wallets[" + _this.hash + "].owner.country") && country_code_emoji__WEBPACK_IMPORTED_MODULE_7__(lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, "wallets[" + _this.hash + "].owner.country", undefined));
                            _this.countryFullName = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, "wallets[" + _this.hash + "].owner.country") && country_code_lookup__WEBPACK_IMPORTED_MODULE_8__["byInternet"](lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, "wallets[" + _this.hash + "].owner.country", undefined));
                            var seen = new Set();
                            var cases = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(res, 'cases', undefined);
                            _this.availableCases = cases[_this.hash].filter(function (item) {
                                var duplicate = seen.has(item.caseId);
                                seen.add(item.caseId);
                                var shouldShow = (item.isOwner === true || item.isShared === true) && !duplicate;
                                return shouldShow;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EthPage.prototype.fetchCases = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.caseService.fetchCases().toPromise().then(function (res) {
                            _this.writableCases = res.filter(function (item) {
                                return item.writeEnabled === true;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EthPage.prototype.presentAddPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_address_add_address_add_component__WEBPACK_IMPORTED_MODULE_5__["AddressAddComponent"],
                            componentProps: {
                                address: this.hash,
                                coinType: 'eth',
                                writableCases: this.writableCases
                            },
                            event: ev,
                            translucent: true,
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            if (lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(data, 'data') && data.data === true) {
                                _this.presentToast();
                                _this.fetchTransactions();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EthPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            // message: `You successfully added this address to case ${this.caseId.value}.`,
                            message: "You successfully added this address.",
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eth',
            template: __webpack_require__(/*! ./eth.page.html */ "./src/app/trace/coin/eth/eth.page.html"),
            styles: [__webpack_require__(/*! ./eth.page.scss */ "./src/app/trace/coin/eth/eth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_trace_service__WEBPACK_IMPORTED_MODULE_3__["TraceService"],
            src_app_services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], EthPage);
    return EthPage;
}());



/***/ })

}]);
//# sourceMappingURL=trace-coin-eth-eth-module.js.map