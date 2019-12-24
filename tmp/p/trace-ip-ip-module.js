(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trace-ip-ip-module"],{

/***/ "./src/app/trace/ip/ip.module.ts":
/*!***************************************!*\
  !*** ./src/app/trace/ip/ip.module.ts ***!
  \***************************************/
/*! exports provided: IpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpPageModule", function() { return IpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ip.page */ "./src/app/trace/ip/ip.page.ts");







var routes = [
    {
        path: '',
        component: _ip_page__WEBPACK_IMPORTED_MODULE_6__["IpPage"]
    }
];
var IpPageModule = /** @class */ (function () {
    function IpPageModule() {
    }
    IpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ip_page__WEBPACK_IMPORTED_MODULE_6__["IpPage"]]
        })
    ], IpPageModule);
    return IpPageModule;
}());



/***/ }),

/***/ "./src/app/trace/ip/ip.page.html":
/*!***************************************!*\
  !*** ./src/app/trace/ip/ip.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" [text]=\"backButtonText\"></ion-back-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" color=\"transparent\">\n      <ion-label *ngIf=\"ipRes\">\n        {{ ip }} {{getCountryFlag(ipRes.country) }} {{ ipRes.city }}, {{ getCountryFullName(ipRes.country) }}\n      </ion-label>\n      <ion-label *ngIf=\"!ipRes\">\n        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" class=\"map\"></div>\n\n  <ng-container *ngIf='ipRes'>\n    <ion-list color=\"transparent\" lines=\"none\">\n      <ion-list-header>\n        Addresses ({{ ipRes.count }})\n      </ion-list-header>\n      <ion-item *ngFor=\"let address of addresses\" detail=\"false\"\n        [routerLink]=\"['/trace/' + address.addressType | lowercase, address.address]\">\n        <span class=\"risk-score score-{{ address.risk }}\"><span>{{ address.risk }}</span></span>\n        <ion-label>\n          <h2>{{ address.address }}</h2>\n          <h3>{{ address.balance }} {{ address.addressType }}\n            <ng-container *ngIf=\"address.entity.name!=='unknown'\">\n              {{ address.entity.name }}\n            </ng-container>\n            <ng-container *ngIf=\"address.entity.type!=='unknown'\">\n              {{ address.entity.type }}\n            </ng-container>\n          </h3>\n          <p>\n            {{ formatTimestamp(address.firstSeen) }} → {{ formatTimestamp(address.lastSeen) }}\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll threshold=\"100rem\" (ionInfinite)=\"loadMore($event)\"\n      [disabled]=\"infiniteScrollEnabled === false\">\n      <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Loading more addresses...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ng-container>\n\n\n\n  <ng-container *ngIf=\"!ipRes\">\n    <section class=\"map\">\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n    </section>\n    <ion-list color=\"transparent\" lines=\"none\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item detail=\"false\">\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n          </h2>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 45%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 25%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n          </h2>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 25%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n          </h2>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 45%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 25%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/trace/ip/ip.page.scss":
/*!***************************************!*\
  !*** ./src/app/trace/ip/ip.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  width: 100%;\n  height: 45vh; }\n  .map:empty {\n    display: none; }\n  ion-label h2,\nion-label h3 {\n  overflow: inherit;\n  text-overflow: inherit; }\n  ion-label p {\n  white-space: normal; }\n  .risk-score {\n  margin: 0 1rem 0 0;\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  text-align: center;\n  border: 3px solid #ccc;\n  font-size: .9rem;\n  letter-spacing: -2px;\n  display: flex; }\n  .risk-score > span {\n    width: 90%; }\n  .risk-score.score-10, .risk-score.score-9, .risk-score.score-8 {\n    border-color: var(--ion-color-danger);\n    color: var(--ion-color-danger); }\n  .risk-score.score-5, .risk-score.score-4 {\n    border-color: var(--ion-color-warning);\n    color: var(--ion-color-warning); }\n  .risk-score.score-2, .risk-score.score-1 {\n    border-color: var(--ion-color-success);\n    color: var(--ion-color-success); }\n  .risk-score.score-0 {\n    border-color: var(--ion-color-medium);\n    color: var(--ion-color-medium); }\n  ion-button[disabled] {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvdHJhY2UvaXAvaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTtFQUZoQjtJQUtRLGFBQWEsRUFBQTtFQUlyQjs7RUFHUSxpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7RUFKOUI7RUFRUSxtQkFBbUIsRUFBQTtFQUkzQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYSxFQUFBO0VBVGpCO0lBWVEsVUFBVSxFQUFBO0VBWmxCO0lBb0JZLHFDQUFxQztJQUNyQyw4QkFBOEIsRUFBQTtFQXJCMUM7SUEwQlksc0NBQXNDO0lBQ3RDLCtCQUErQixFQUFBO0VBM0IzQztJQWdDWSxzQ0FBc0M7SUFDdEMsK0JBQStCLEVBQUE7RUFqQzNDO0lBcUNZLHFDQUFxQztJQUNyQyw4QkFBOEIsRUFBQTtFQUsxQztFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYWNlL2lwL2lwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDV2aDtcblxuICAgICY6ZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuaW9uLWxhYmVsIHtcbiAgICBoMixcbiAgICBoM3tcbiAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxufVxuXG4ucmlzay1zY29yZSB7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgPiBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAmLnNjb3JlIHtcblxuICAgICAgICAmLTEwLFxuICAgICAgICAmLTksXG4gICAgICAgICYtOCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi01LFxuICAgICAgICAmLTQge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0yLFxuICAgICAgICAmLTEgIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtMCAge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/trace/ip/ip.page.ts":
/*!*************************************!*\
  !*** ./src/app/trace/ip/ip.page.ts ***!
  \*************************************/
/*! exports provided: IpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpPage", function() { return IpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trace.service */ "./src/app/services/trace.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! country-code-emoji */ "./node_modules/country-code-emoji/lib/index.umd.js");
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(country_code_emoji__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(country_code_lookup__WEBPACK_IMPORTED_MODULE_7__);








var IpPage = /** @class */ (function () {
    function IpPage(activatedRoute, traceService, storage) {
        this.activatedRoute = activatedRoute;
        this.traceService = traceService;
        this.storage = storage;
        this.backButtonText = '';
        this.infiniteScrollEnabled = false;
    }
    IpPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('ip')) {
                return;
            }
            _this.ip = paramMap.get('ip');
            _this.fetchData(_this.ip, undefined);
        });
        this.addTraceHistory(this.ip);
    };
    IpPage.prototype.fetchData = function (ip, offset) {
        var _this = this;
        this.traceService.fetchIp(ip, undefined).toPromise().then(function (res) {
            _this.ipRes = res;
            _this.buildMap(res.latitude, res.longitude);
            _this.addresses = res['records'];
            // Enable infinite scroll
            _this.infiniteScrollEnabled = (res['nextOffset'] !== -1);
            _this.addressesOffset = res.nextOffset;
        });
    };
    IpPage.prototype.loadMore = function (event) {
        var _this = this;
        this.traceService.fetchIp(this.ip, this.addressesOffset).toPromise().then(function (res) {
            res.records.forEach(function (record) { return _this.addresses.push(record); });
            // When no addresses left to load, disable infinite scroll
            if (res.nextOffset === -1) {
                _this.infiniteScrollEnabled = false;
            }
            _this.addressesOffset = res.nextOffset;
            event.target.complete();
        });
    };
    IpPage.prototype.formatTimestamp = function (timestamp) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(timestamp * 1000).format('ll LTS');
    };
    IpPage.prototype.getCountryFlag = function (country) {
        return country_code_emoji__WEBPACK_IMPORTED_MODULE_6__(country);
    };
    IpPage.prototype.getCountryFullName = function (country) {
        return country_code_lookup__WEBPACK_IMPORTED_MODULE_7__["byIso"](country).country;
    };
    IpPage.prototype.buildMap = function (lat, lon) {
        var latLon = new google.maps.LatLng(lat, lon);
        var mapOpts = {
            center: latLon,
            zoom: 15
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOpts);
    };
    IpPage.prototype.addTraceHistory = function (ip) {
        var _this = this;
        // Note: this method will be refactored in https://chopchop.atlassian.net/browse/ENG-815
        var newVal = [];
        this.storage.get('trace_history').then(function (val) {
            if (val) {
                newVal = val;
                newVal.push({ hash: ip, coinType: 'ip', score: undefined });
                // restrict trace history to 100
                while (newVal.length > 100) {
                    newVal.shift();
                }
                _this.storage.set('trace_history', newVal);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IpPage.prototype, "mapElement", void 0);
    IpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ip',
            template: __webpack_require__(/*! ./ip.page.html */ "./src/app/trace/ip/ip.page.html"),
            styles: [__webpack_require__(/*! ./ip.page.scss */ "./src/app/trace/ip/ip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_trace_service__WEBPACK_IMPORTED_MODULE_3__["TraceService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], IpPage);
    return IpPage;
}());



/***/ })

}]);
//# sourceMappingURL=trace-ip-ip-module.js.map