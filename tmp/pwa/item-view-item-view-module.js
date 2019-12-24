(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-view-item-view-module"],{

/***/ "./src/app/item-view/item-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/item-view/item-view.module.ts ***!
  \***********************************************/
/*! exports provided: ItemViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewPageModule", function() { return ItemViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-view.page */ "./src/app/item-view/item-view.page.ts");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared-module */ "./src/app/components/shared-module.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");









var routes = [
    {
        path: '',
        component: _item_view_page__WEBPACK_IMPORTED_MODULE_6__["ItemViewPage"]
    }
];
var ItemViewPageModule = /** @class */ (function () {
    function ItemViewPageModule() {
    }
    ItemViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_item_view_page__WEBPACK_IMPORTED_MODULE_6__["ItemViewPage"]],
            providers: [_ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"]]
        })
    ], ItemViewPageModule);
    return ItemViewPageModule;
}());



/***/ }),

/***/ "./src/app/item-view/item-view.page.html":
/*!***********************************************!*\
  !*** ./src/app/item-view/item-view.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\" color=\"fifty-percent-transparent-white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" [text]=\"backButtonText\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <app-logo></app-logo>\n      &nbsp;\n      {{ loadedItem.title }}\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDelete()\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let image of images\">\n      <img [src]=\"image\" />\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides [options]=\"slideCubeOpts\">\n    <ion-slide class=\"slide-flip\">\n      <ion-card>\n        <ion-card-subtitle>Details\n          <aside class=\"hint\">\n            Swipe → for a story\n          </aside>\n        </ion-card-subtitle>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              Title\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.title }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Cost basis\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.paid }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Type\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.type }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Quantity\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.quantity }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Weight\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.weight }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Purity\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.purity }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Form\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.form }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Origin country\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ countryFullName }} {{ countryFlag }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Notes\n            </ion-col>\n            <ion-col size=\"8\">\n              {{ loadedItem.notes }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Label\n            </ion-col>\n            <ion-col size=\"8\">\n              <ng-container *ngIf=\"loadedItem.label\">\n                <ion-badge color=\"{{ loadedItem.labelColor }}\">\n                  {{ loadedItem.label }}\n                </ion-badge>\n              </ng-container>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Grading\n            </ion-col>\n            <ion-col size=\"8\">\n                <ion-badge class=\"certificate\"\n                  color=\"primary\"\n                  (click)=\"openCertificate(loadedItem.certVendor, loadedItem.cert)\n                \">{{ loadedItem.certVendor }} {{ loadedItem.cert }}</ion-badge>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide class=\"slide-flip\">\n      <ion-card>\n        <ion-card-subtitle>Story</ion-card-subtitle>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\" class=\"story-text\">\n              This <mark>{{ loadedItem.weight}}oz {{ loadedItem.type}} {{ loadedItem.form }}</mark>\n              <mark *ngIf=\"loadedItem.quantity\">(x{{ loadedItem.quantity }})</mark>\n              was purchased about\n              a year ago at <mark>${{ loadedItem.paid}}</mark>.\n\n              So far this <mark>{{ loadedItem.form }}</mark> has appreciated by about <mark>11%</mark>.\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-card-subtitle>Analysis</ion-card-subtitle>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              Price change\n            </ion-col>\n            <ion-col size=\"8\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Day's value change\n            </ion-col>\n            <ion-col size=\"8\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">\n              Unrealized gain/loss\n            </ion-col>\n            <ion-col size=\"8\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/item-view/item-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/item-view/item-view.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col.photographs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-col.photographs ion-img {\n    width: 75%;\n    margin-top: -3rem;\n    margin-bottom: -3rem; }\n  ion-card,\nion-col,\nion-item {\n  background: white !important; }\n  ion-card {\n  margin: 0;\n  box-shadow: none;\n  border-radius: 0 !important;\n  z-index: 1;\n  width: 100%;\n  height: 100%; }\n  ion-card-subtitle {\n  margin-top: 20px;\n  margin-left: 10px; }\n  ion-slides {\n  margin-top: -2rem;\n  margin-bottom: -2rem; }\n  ion-slide img {\n  width: 70%; }\n  .slide-flip {\n  height: 430px;\n  text-align: left;\n  opacity: .75; }\n  .slide-flip ion-grid,\n  .slide-flip ion-card-subtitle {\n    color: #000; }\n  mark {\n  background: rgba(255, 255, 51, 0.15);\n  padding: .25rem;\n  border-radius: 3px; }\n  .story-text {\n  line-height: 1.6rem;\n  font-size: 1rem; }\n  aside.hint {\n  position: absolute;\n  right: 1rem;\n  top: 0;\n  font-weight: 100; }\n  ion-badge.certificate {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL3ByaXZhdGUvZ2l0L21ldGFscy9zcmMvYXBwL2l0ZW0tdmlldy9pdGVtLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBRjNCO0lBS1EsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQUk1Qjs7O0VBR0ksNEJBQXlDLEVBQUE7RUFHN0M7RUFDSSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtFQUd4QjtFQUVRLFVBQVUsRUFBQTtFQUlsQjtFQUdJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBTGhCOztJQVNRLFdBQVcsRUFBQTtFQUluQjtFQUNJLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tdmlldy9pdGVtLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbC5waG90b2dyYXBocyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1pbWcge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgfVxufVxuXG5pb24tY2FyZCxcbmlvbi1jb2wsXG5pb24taXRlbSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnRcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC0ycmVtO1xufVxuXG5pb24tc2xpZGUge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG4uc2xpZGUtZmxpcCB7XG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3BhY2l0eTogLjc1O1xuXG4gICAgaW9uLWdyaWQsXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbm1hcmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDUxLCAwLjE1KTtcbiAgICBwYWRkaW5nOiAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RvcnktdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmFzaWRlLmhpbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXJlbTtcbiAgICB0b3A6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuaW9uLWJhZGdlLmNlcnRpZmljYXRlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/item-view/item-view.page.ts":
/*!*********************************************!*\
  !*** ./src/app/item-view/item-view.page.ts ***!
  \*********************************************/
/*! exports provided: ItemViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewPage", function() { return ItemViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_options_cube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-options-cube */ "./src/app/item-view/slider-options-cube.ts");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collection.service */ "./src/app/collection.service.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! country-code-emoji */ "./node_modules/country-code-emoji/lib/index.umd.js");
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(country_code_emoji__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(country_code_lookup__WEBPACK_IMPORTED_MODULE_8__);









var ItemViewPage = /** @class */ (function () {
    function ItemViewPage(activatedRoute, collectionService, router, alertCtrl, safariViewController) {
        this.activatedRoute = activatedRoute;
        this.collectionService = collectionService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.safariViewController = safariViewController;
        this.slideOpts = {
            speed: 400,
            pager: true
        };
        this.slideCubeOpts = _slider_options_cube__WEBPACK_IMPORTED_MODULE_4__["slideCubeConf"];
        this.images = new Array();
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has("itemId")) {
                // Illegal ID, redirect user
                return;
            }
            _this.backButtonText = "";
            var itemId = paramMap.get("itemId");
            _this.loadedItem = _this.collectionService.getItem(itemId);
            if (_this.loadedItem.country) {
                _this.countryFlag = country_code_emoji__WEBPACK_IMPORTED_MODULE_7__(_this.loadedItem.country);
                _this.countryFullName = country_code_lookup__WEBPACK_IMPORTED_MODULE_8__["byInternet"](_this.loadedItem.country).country;
            }
            if (_this.loadedItem.imageurl.indexOf("|") > 0) {
                _this.images = _this.loadedItem.imageurl.split("|");
            }
            else {
                _this.images.push(_this.loadedItem.imageurl);
            }
        });
    };
    ItemViewPage.prototype.onDelete = function () {
        var _this = this;
        this.alertCtrl
            .create({
            header: "Are you sure?",
            message: "Do you really want to delete <u>" + this.loadedItem.title + "</u> from your collection?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel"
                },
                {
                    text: "Delete",
                    handler: function () {
                        _this.collectionService.deleteItem(_this.loadedItem.id);
                        // emitter here doesn't work because this page isn't a child of list
                        // probably need to wrap all views in something generic where events
                        // can be caught and sent down
                        _this.updateList.emit(true);
                        // TODO: this should navigate back instead to the list
                        // in the cases when coin was navigated to and deleted from vault
                        _this.router.navigate(["/tabs/list"]);
                    }
                }
            ]
        })
            .then(function (alertEl) {
            alertEl.present();
        });
    };
    ItemViewPage.prototype.openCertificate = function (vendor, number) {
        var _this = this;
        var url;
        switch (vendor) {
            case "pcgs":
                url = "https://www.pcgs.com/cert/" + number;
                break;
            case "ngc":
                url = "https://www.ngccoin.com/certlookup/" + number + "/";
                break;
            case "icg":
                url = "https://www.icgcoin.com/load_SNSearch.php?ctn=" + number;
                break;
            case "anacs":
                url = "https://www.anacs.com/Verify/CertVerification.aspx";
                break;
        }
        this.safariViewController.isAvailable().then(function (available) {
            if (available) {
                _this.safariViewController
                    .show({
                    url: url,
                    hidden: false,
                    animated: true,
                    transition: "curl",
                    enterReaderModeIfAvailable: true
                    // tintColor: '#ff0000'
                })
                    .subscribe(function (result) {
                    if (result.event === "opened")
                        console.log("Opened");
                    else if (result.event === "loaded")
                        console.log("Loaded");
                    else if (result.event === "closed")
                        console.log("Closed");
                }, function (error) { return console.error(error); });
            }
            else {
                // use fallback browser, example InAppBrowser
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemViewPage.prototype, "updateList", void 0);
    ItemViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-item-view",
            template: __webpack_require__(/*! ./item-view.page.html */ "./src/app/item-view/item-view.page.html"),
            styles: [__webpack_require__(/*! ./item-view.page.scss */ "./src/app/item-view/item-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__["SafariViewController"]])
    ], ItemViewPage);
    return ItemViewPage;
}());



/***/ }),

/***/ "./src/app/item-view/slider-options-cube.ts":
/*!**************************************************!*\
  !*** ./src/app/item-view/slider-options-cube.ts ***!
  \**************************************************/
/*! exports provided: slideCubeConf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideCubeConf", function() { return slideCubeConf; });
var slideCubeConf = {
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    on: {
        beforeInit: function () {
            var swiper = this;
            swiper.classNames.push(swiper.params.containerModifierClass + "cube");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true,
            };
            this.params = Object.assign(this.params, overwriteParams);
            this.originalParams = Object.assign(this.originalParams, overwriteParams);
        },
        setTranslate: function () {
            var swiper = this;
            var $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides, swiperWidth = swiper.width, swiperHeight = swiper.height, rtl = swiper.rtlTranslate, swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({ height: swiperWidth + "px" });
                }
                else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                }
                else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                }
                else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + (round * 4 * swiperSize);
                    tz = swiperSize;
                }
                else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = (3 * swiperSize) + (swiperSize * 4 * round);
                }
                if (rtl) {
                    tx = -tx;
                }
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                var transform$$1 = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = (slideIndex * 90) + (progress * 90);
                    if (rtl)
                        wrapperRotate = (-slideIndex * 90) - (progress * 90);
                }
                $slideEl.transform(transform$$1);
                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length)
                        shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length)
                        shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
            }
            $wrapperEl.css({
                '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                'transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            });
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
                }
                else {
                    var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                    var multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                        + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset$$1 = params.shadowOffset;
                    $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset$$1) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
                }
            }
            var zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
            $wrapperEl
                .transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
        },
        setTransition: function (duration) {
            var swiper = this;
            var $el = swiper.$el, slides = swiper.slides;
            slides
                .transition(duration)
                .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        },
    }
};


/***/ })

}]);
//# sourceMappingURL=item-view-item-view-module.js.map