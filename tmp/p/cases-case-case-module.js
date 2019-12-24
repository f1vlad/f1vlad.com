(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-case-case-module"],{

/***/ "./src/app/cases/case/case.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cases/case/case.module.ts ***!
  \*******************************************/
/*! exports provided: CasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasePageModule", function() { return CasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _case_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./case.page */ "./src/app/cases/case/case.page.ts");







var routes = [
    {
        path: '',
        component: _case_page__WEBPACK_IMPORTED_MODULE_6__["CasePage"]
    }
];
var CasePageModule = /** @class */ (function () {
    function CasePageModule() {
    }
    CasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_case_page__WEBPACK_IMPORTED_MODULE_6__["CasePage"]]
        })
    ], CasePageModule);
    return CasePageModule;
}());



/***/ }),

/***/ "./src/app/cases/case/case.page.html":
/*!*******************************************!*\
  !*** ./src/app/cases/case/case.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" [text]=\"backButtonText\"></ion-back-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" color=\"transparent\">\n      <ion-label>\n        <ion-skeleton-text *ngIf=\"!data\" animated style=\"width: 60%\"></ion-skeleton-text>\n        <span *ngIf=\"data\">{{ data.name }}</span>\n      </ion-label>\n    </ion-item>\n    <ion-buttons *ngIf=\"data\" slot=\"primary\">\n      <ion-button [hidden]=\"data.isOwner===false\" (click)=\"presentPopover()\">\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <span *ngIf=\"data\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Case #{{ data.number }}</ion-card-subtitle>\n      </ion-card-header>\n      <!-- TODO \n        ion-row/col should be inside single ion-grid\n      -->\n      <ion-grid>\n        <ion-row *ngIf=\"data.isShared === true\">\n          <ion-col size=\"4\">\n            <div>Shared by</div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div>{{data.creatorEmail}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div>Created</div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div>{{ relativeTimeCreated }}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div>Updated</div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div>{{ relativeTimeUpdated }}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div>Notes</div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div>{{ data.notes }}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div [hidden]=\"data.isOwner===false\">Shared with</div>\n          </ion-col>\n          <ion-col size=\"8\" *ngIf=\"data?.shares\">\n            <span *ngFor=\"let share of data.shares\">\n              <ion-badge (click)=\"presentPopoverCaseSharedWith($event, share)\">\n                <ion-icon name=\"person\"></ion-icon>\n                {{ share.userInitials }}\n              </ion-badge>\n            </span>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"data?.saves.length > 0\" >\n          <ion-col>\n            <div>Addresses</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ng-container\n              *ngFor=\"let save of data.saves\"\n            >\n              <ion-badge\n                *ngIf=\"!save.saveType.includes('_tx')\"\n                [routerLink]=\"['/trace/'+configureEndpointRoute(save.saveType), save.address]\"\n                text-wrap\n              >\n                <span *ngIf=\"save.saveType !== 'transaction'\">\n                  <ion-icon name=\"wallet\"></ion-icon>\n                  {{ save.address }}\n                  <ng-container *ngIf=\"save.notes\">\n                    ({{ save.notes }})\n                  </ng-container>\n                </span>\n              </ion-badge>\n            </ng-container>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </span>\n\n  <span *ngIf=\"!data\">\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-skeleton-text animated style=\"width: 40px\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-skeleton-text animated style=\"width: 60px\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-skeleton-text animated style=\"width: 30px\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div>\n              <ion-skeleton-text animated style=\"width: 70px\"></ion-skeleton-text>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-skeleton-text animated style=\"width: 50px\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-skeleton-text animated style=\"width: 70px\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-skeleton-text animated style=\"width: 40px\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-skeleton-text animated style=\"width: 40px\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-skeleton-text animated style=\"width: 20px; display: inline-block;\"></ion-skeleton-text>&nbsp;&nbsp;\n            <ion-skeleton-text animated style=\"width: 20px; display: inline-block;\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-skeleton-text animated style=\"width: 46px\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 15%\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </span>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cases/case/case.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cases/case/case.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button[disabled] {\n  display: none; }\n\nion-badge {\n  background: var(--ion-color-primary-tint);\n  color: --ion-color-primary-contrast;\n  font-size: inherit;\n  word-break: break-all;\n  margin-bottom: .5rem;\n  margin-right: .25rem; }\n\nion-label {\n  color: var(--ion-color-step-600, #666) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL2dpdC9DaXBoZXJUcmFjZUZpZWxkQXBwL3NyYy9hcHAvY2FzZXMvY2FzZS9jYXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5Q0FBeUM7RUFDekMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGlEQUFnRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FzZXMvY2FzZS9jYXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tYmFkZ2Uge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgIGNvbG9yOiAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cases/case/case.page.ts":
/*!*****************************************!*\
  !*** ./src/app/cases/case/case.page.ts ***!
  \*****************************************/
/*! exports provided: CasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasePage", function() { return CasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/case.service */ "./src/app/services/case.service.ts");
/* harmony import */ var src_app_services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_share_via_email_share_via_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/share-via-email/share-via-email.component */ "./src/app/components/share-via-email/share-via-email.component.ts");
/* harmony import */ var _components_shared_with_info_shared_with_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared-with-info/shared-with-info.component */ "./src/app/components/shared-with-info/shared-with-info.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_10__);












var CasePage = /** @class */ (function () {
    function CasePage(activatedRoute, caseService, shareService, formBuilder, modalController, popoverController) {
        this.activatedRoute = activatedRoute;
        this.caseService = caseService;
        this.shareService = shareService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.backButtonText = '';
        // this.shareCaseFormGroup = formBuilder.group({
        //   email: ['', Validators.compose(
        //       [Validators.required, Validators.email]
        //     )
        //   ]
        // });
        // this.email = this.shareCaseFormGroup.controls['email'];
    }
    CasePage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('hash')) {
                return;
            }
            _this.hash = paramMap.get('hash');
            _this.fetchCase();
        });
    };
    CasePage.prototype.fetchCase = function () {
        var _this = this;
        this.caseService.fetchCase(this.hash).toPromise().then(function (res) {
            _this.data = res;
            _this.relativeTimeCreated = moment__WEBPACK_IMPORTED_MODULE_9__(res.createdDate * 1000).fromNow();
            _this.relativeTimeUpdated = moment__WEBPACK_IMPORTED_MODULE_9__(res.updatedDate * 1000).fromNow();
        });
    };
    CasePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_share_via_email_share_via_email_component__WEBPACK_IMPORTED_MODULE_6__["ShareViaEmailComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasePage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_share_via_email_share_via_email_component__WEBPACK_IMPORTED_MODULE_6__["ShareViaEmailComponent"],
                            componentProps: {
                                caseId: this.data.caseId
                            },
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            if (lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(data, 'data')) {
                                _this.fetchCase();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasePage.prototype.presentPopoverCaseSharedWith = function (ev, details) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_shared_with_info_shared_with_info_component__WEBPACK_IMPORTED_MODULE_7__["SharedWithInfoComponent"],
                            componentProps: {
                                // TODO render this as HTML
                                // info: `<span style="background: ${details.userColor}">${details.userInitials}</span> <a href="mailto:${details.userEmail}">${details.userEmail}</a>`
                                info: details.userInitials + " \u2014\u00A0" + details.userEmail
                            },
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasePage.prototype.configureEndpointRoute = function (saveType) {
        // ENG-507
        // This is a hack to support legacy cases which have imported addresses
        // with wrong saveType, for legacy cases we're assuming they're tracking
        // BTC and fixing endpoint request accordingly.
        if (saveType === 'address') {
            return 'btc';
        }
        return saveType.replace('_addr', '');
    };
    CasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-case',
            template: __webpack_require__(/*! ./case.page.html */ "./src/app/cases/case/case.page.html"),
            styles: [__webpack_require__(/*! ./case.page.scss */ "./src/app/cases/case/case.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"],
            src_app_services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]])
    ], CasePage);
    return CasePage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-case-case-module.js.map