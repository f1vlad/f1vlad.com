(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-add-item-add-module"],{

/***/ "./src/app/item-add/item-add.module.ts":
/*!*********************************************!*\
  !*** ./src/app/item-add/item-add.module.ts ***!
  \*********************************************/
/*! exports provided: ItemAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAddPageModule", function() { return ItemAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared-module */ "./src/app/components/shared-module.ts");
/* harmony import */ var _item_add_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-add.page */ "./src/app/item-add/item-add.page.ts");








var routes = [
    {
        path: '',
        component: _item_add_page__WEBPACK_IMPORTED_MODULE_7__["ItemAddPage"]
    }
];
var ItemAddPageModule = /** @class */ (function () {
    function ItemAddPageModule() {
    }
    ItemAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_item_add_page__WEBPACK_IMPORTED_MODULE_7__["ItemAddPage"]]
        })
    ], ItemAddPageModule);
    return ItemAddPageModule;
}());



/***/ }),

/***/ "./src/app/item-add/item-add.page.html":
/*!*********************************************!*\
  !*** ./src/app/item-add/item-add.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\" color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" [icon]=\"buttonIcon\" [text]=\"buttonText\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <app-logo></app-logo>\n      &nbsp;\n      New precious metal\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <form [formGroup]=\"newItemFormGroup\">\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position=\"floating\">Title <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"title\" autocapitalize></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"title.hasError('required') && title.touched\">\n        <span>* This field is required</span>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Type</ion-label>\n        <ion-input type=\"text\" formControlName=\"type\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Form</ion-label>\n        <ion-textarea formControlName=\"form\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Weight</ion-label>\n        <ion-textarea formControlName=\"weight\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Purity</ion-label>\n        <ion-textarea formControlName=\"purity\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Notes</ion-label>\n        <ion-textarea formControlName=\"notes\" auto-grow=\"true\" autocapitalize></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Photo</ion-label>\n        <img [src]=\"currentImage\" *ngIf=\"currentImage\">\n        <ion-fab>\n          <ion-fab-button (click)=\"takePicture()\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon name=\"camera\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>        \n      </ion-item>\n    </ion-list>\n\n    <div class=\"ion-padding\">\n      <ion-button\n        expand=\"block\"\n        type=\"submit\"\n        class=\"ion-no-margin\"\n        [disabled]=\"!newItemFormGroup.valid\"\n        (click)=\"onSubmit()\"\n      >\n        <ion-ripple-effect></ion-ripple-effect>\n        Add\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/item-add/item-add.page.scss":
/*!*********************************************!*\
  !*** ./src/app/item-add/item-add.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tYWRkL2l0ZW0tYWRkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/item-add/item-add.page.ts":
/*!*******************************************!*\
  !*** ./src/app/item-add/item-add.page.ts ***!
  \*******************************************/
/*! exports provided: ItemAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAddPage", function() { return ItemAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ItemAddPage = /** @class */ (function () {
    function ItemAddPage(camera, formBuilder, router) {
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.router = router;
        this.newItemFormGroup = formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: [],
            form: [],
            weight: [],
            purity: [],
            notes: [],
        });
        this.title = this.newItemFormGroup.controls['title'];
        this.type = this.newItemFormGroup.controls['type'];
        this.form = this.newItemFormGroup.controls['form'];
        this.weight = this.newItemFormGroup.controls['weight'];
        this.purity = this.newItemFormGroup.controls['purity'];
        this.notes = this.newItemFormGroup.controls['notes'];
    }
    ItemAddPage.prototype.ngOnInit = function () {
        this.buttonIcon = 'close';
        this.buttonText = '';
    };
    ItemAddPage.prototype.onSave = function () {
        this.onSubmit();
    };
    ItemAddPage.prototype.onSubmit = function () {
        var data = {
            title: this.title.value,
            type: this.type.value,
            form: this.form.value,
            weight: this.weight.value,
            purity: this.purity.value,
            notes: this.notes.value
        };
        // console.log(`submitting`, data);
        // after successful submit we route user back to list view:
        this.router.navigate(['/']);
    };
    ItemAddPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.currentImage = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            // console.log(`Camera issue: ${err}`);
        });
    };
    ItemAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-add',
            template: __webpack_require__(/*! ./item-add.page.html */ "./src/app/item-add/item-add.page.html"),
            styles: [__webpack_require__(/*! ./item-add.page.scss */ "./src/app/item-add/item-add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ItemAddPage);
    return ItemAddPage;
}());



/***/ })

}]);
//# sourceMappingURL=item-add-item-add-module.js.map