(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-cases-module"],{

/***/ "./src/app/cases/cases-list/cases-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/cases/cases-list/cases-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngIf=\"myCases && caseType==='my'\">\n  <ion-list lines=\"none\">\n    <!-- <ion-list-header>\n      My cases\n    </ion-list-header> -->\n    <ion-item *ngFor=\"let case of this.myCases\" detail='false' lines='none' no-lines>\n      <ion-label [routerLink]=\"['/cases', case.caseId]\">\n        <h2>\n          {{ case.name }}\n        </h2>\n        <p>\n          {{ case.notes }}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-card *ngIf=\"sharedCases && caseType==='shared'\">\n  <ion-list lines=\"none\">\n    <!-- <ion-list-header>\n      Shared cases\n    </ion-list-header> -->\n    <ion-item *ngFor=\"let case of this.sharedCases\" color=\"transparent\" lines='none'>\n      <ion-label [routerLink]=\"['/cases', case.caseId]\">\n        <h2>\n          {{ case.name }}\n        </h2>\n        <p>\n          {{ case.notes }}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-card *ngIf=\"archivedCases && caseType==='archived'\">\n  <ion-list *ngIf=\"archivedCases\" lines=\"none\">\n    <!-- <ion-list-header>\n      Archived cases\n    </ion-list-header> -->\n    <ion-item *ngFor=\"let case of this.archivedCases\" color=\"transparent\" lines='none'>\n      <ion-label [routerLink]=\"['/cases', case.caseId]\">\n        <h2>\n          {{ case.name }}\n        </h2>\n        <p>\n          {{ case.notes }}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<!-- TODO: move this skeleton to its own component? -->\n<ion-card *ngIf=\"!myCases\">\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 80px\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"transparent\" lines='none'>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-card>\n"

/***/ }),

/***/ "./src/app/cases/cases-list/cases-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/cases/cases-list/cases-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  --background: var(--ion-color-medium-tint); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvY2FzZXMvY2FzZXMtbGlzdC9jYXNlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2Nhc2VzLWxpc3QvY2FzZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cases/cases-list/cases-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cases/cases-list/cases-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CasesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesListComponent", function() { return CasesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CasesListComponent = /** @class */ (function () {
    function CasesListComponent() {
    }
    CasesListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CasesListComponent.prototype, "myCases", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CasesListComponent.prototype, "sharedCases", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CasesListComponent.prototype, "archivedCases", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CasesListComponent.prototype, "caseType", void 0);
    CasesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cases-list',
            template: __webpack_require__(/*! ./cases-list.component.html */ "./src/app/cases/cases-list/cases-list.component.html"),
            styles: [__webpack_require__(/*! ./cases-list.component.scss */ "./src/app/cases/cases-list/cases-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CasesListComponent);
    return CasesListComponent;
}());



/***/ }),

/***/ "./src/app/cases/cases.module.ts":
/*!***************************************!*\
  !*** ./src/app/cases/cases.module.ts ***!
  \***************************************/
/*! exports provided: CasesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesPageModule", function() { return CasesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cases.page */ "./src/app/cases/cases.page.ts");
/* harmony import */ var _cases_list_cases_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cases-list/cases-list.component */ "./src/app/cases/cases-list/cases-list.component.ts");








var routes = [
    {
        path: '',
        component: _cases_page__WEBPACK_IMPORTED_MODULE_6__["CasesPage"]
    }
];
var CasesPageModule = /** @class */ (function () {
    function CasesPageModule() {
    }
    CasesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cases_page__WEBPACK_IMPORTED_MODULE_6__["CasesPage"], _cases_list_cases_list_component__WEBPACK_IMPORTED_MODULE_7__["CasesListComponent"]]
        })
    ], CasesPageModule);
    return CasesPageModule;
}());



/***/ }),

/***/ "./src/app/cases/cases.page.html":
/*!***************************************!*\
  !*** ./src/app/cases/cases.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"halo-burger\">\n        <img src='assets/halo-burger.svg'>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-label>\n      Case Manager\n    </ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n\n  <ion-fab (click)=\"presentModal()\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-ripple-effect></ion-ripple-effect>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- <ion-searchbar\n    animated\n    type=\"text\"\n    placeholder=\"Search cases\"\n    showCancelButton=\"focus\"\n    (keyup)=\"searchCases($event)\"\n  >\n  </ion-searchbar> -->\n\n  <ion-card *ngIf=\"myCases && sharedCases && archivedCases\">\n    <ion-segment (ionChange)=\"caseTypeChanged($event)\">\n      <ion-segment-button checked value=\"my\">\n        <ion-label>My cases ({{myCases?.length}})</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"shared\">\n        <ion-label>Shared ({{sharedCases?.length}})</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"archived\">\n        <ion-label>Archived ({{archivedCases?.length}})</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-card>\n\n  <app-cases-list [caseType]=\"caseType\" [myCases]=\"myCases\" [sharedCases]=\"sharedCases\" [archivedCases]=\"archivedCases\">\n  </app-cases-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cases/cases.page.scss":
/*!***************************************!*\
  !*** ./src/app/cases/cases.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2Nhc2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cases/cases.page.ts":
/*!*************************************!*\
  !*** ./src/app/cases/cases.page.ts ***!
  \*************************************/
/*! exports provided: CasesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesPage", function() { return CasesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/case.service */ "./src/app/services/case.service.ts");
/* harmony import */ var _components_new_case_new_case_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/new-case/new-case.component */ "./src/app/components/new-case/new-case.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);







var CasesPage = /** @class */ (function () {
    function CasesPage(caseService, modalController, toastController) {
        this.caseService = caseService;
        this.modalController = modalController;
        this.toastController = toastController;
    }
    CasesPage.prototype.ngOnInit = function () {
        this.fetchCases();
    };
    CasesPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_new_case_new_case_component__WEBPACK_IMPORTED_MODULE_3__["NewCaseComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'data.returnedData', undefined)) {
                                _this.myCases.unshift({
                                    name: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'data.name.value', undefined),
                                    notes: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'data.caseNote.value', undefined),
                                    number: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'data.number.value', undefined),
                                    caseId: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'data.returnedData.caseId', undefined)
                                });
                                _this.presentToast();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasesPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "New case successfully created.",
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
    CasesPage.prototype.fetchCases = function () {
        var _this = this;
        this.caseService.fetchCases().toPromise().then(function (res) {
            _this.myCases = res
                .filter(function (item) { return item.writeEnabled === true && item.status === 'OPEN'; })
                .sort(function (a, b) { return (a.updatedDate < b.updatedDate) ? 1 : -1; }).slice();
            _this.sharedCases = res
                .filter(function (item) { return item.writeEnabled === false; })
                .sort(function (a, b) { return (a.updatedDate < b.updatedDate) ? 1 : -1; }).slice();
            _this.archivedCases = res
                .filter(function (item) { return item.status === '' || item.status === 'CLOSE'; })
                .sort(function (a, b) { return (a.updatedDate < b.updatedDate) ? 1 : -1; }).slice();
        });
    };
    CasesPage.prototype.caseTypeChanged = function (e) {
        this.caseType = e.detail.value;
    };
    CasesPage.prototype.searchCases = function (e) {
        // console.log(`searching for ${e.target.value}`);
    };
    CasesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cases',
            template: __webpack_require__(/*! ./cases.page.html */ "./src/app/cases/cases.page.html"),
            styles: [__webpack_require__(/*! ./cases.page.scss */ "./src/app/cases/cases.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_case_service__WEBPACK_IMPORTED_MODULE_2__["CaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], CasesPage);
    return CasesPage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-cases-module.js.map