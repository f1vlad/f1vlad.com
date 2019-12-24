(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/lodash/_baseHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(/*! ./_baseHas */ "./node_modules/lodash/_baseHas.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "./src/app/list/list-row-view/list-row-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/list/list-row-view/list-row-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [routerLink]=\"['/coin/', item.id]\" detail=\"false\">\n  <span class=\"items-wrapper\">\n    <ion-avatar *ngIf=\"item.quantity > 1\" slot=\"start\" class=\"lot-indicator item-avatar-fallback type-{{ item.type }} form-{{ item.form }}\">\n    </ion-avatar>\n    <ion-avatar slot=\"start\" class=\"item-avatar-fallback type-{{item.type}} form-{{item.form}}\">\n      <ion-img [src]=\"item.imageurl\"></ion-img>\n    </ion-avatar>\n  </span>\n\n  <ion-label>\n    <h2>{{ item.title }}</h2>\n    <h3>{{ item.purity }} {{ item.weight }}oz {{ item.type }} {{ item.form }}\n      <ion-icon *ngIf=\"item.cert\" name=\"ribbon\"></ion-icon></h3>\n    <p *ngIf=\"item.notes || item.label\">\n      <ion-badge *ngIf=\"item.label\" color=\"{{ item.labelColor }}\">\n        {{ item.label }}\n      </ion-badge>\n      <ng-container *ngIf=\"item.notes\">\n        {{ item.notes }}\n      </ng-container>\n    </p>\n  </ion-label>\n\n  <ion-avatar slot=\"end\" class=\"stat\" [ngClass]=\"roiIndicator(item.type, item.paid, item.quantity)\">\n    <ng-container *ngIf=\"goldSpot && silverSpot && platinumSpot && palladiumSpot\">\n      <ng-container *ngIf=\"item.type!=='other'\">\n        <ng-container *ngIf=\"calculatePercentage(item.type, item.paid, item.quantity) > 0\">+</ng-container>{{\n          calculatePercentage(item.type, item.paid, item.quantity) }}%\n      </ng-container>\n      <br>\n      <ng-container *ngIf=\"item.type!=='other'\">\n          <ng-container *ngIf=\"calculateDiff(item.type, item.paid, item.quantity) > 0\">+</ng-container>${{\n            calculateDiff(item.type, item.paid, item.quantity) }}\n      </ng-container>\n    </ng-container>\n  </ion-avatar>\n</ion-item>\n"

/***/ }),

/***/ "./src/app/list/list-row-view/list-row-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/list/list-row-view/list-row-view.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items-wrapper {\n  display: inline-block;\n  height: 100%;\n  margin-right: .75rem;\n  position: relative;\n  top: 20%; }\n  .items-wrapper ion-avatar {\n    position: relative;\n    z-index: 3; }\n  .items-wrapper ion-avatar.form-coin {\n      border-radius: 50%;\n      height: 2rem;\n      width: 2rem; }\n  .items-wrapper ion-avatar.form-coin:not(:nth-child(1)) {\n        position: absolute; }\n  .items-wrapper ion-avatar.form-coin:nth-child(1) {\n        top: 0px;\n        z-index: 3; }\n  .items-wrapper ion-avatar.form-coin:nth-child(2) {\n        top: 4px;\n        z-index: 2; }\n  .items-wrapper ion-avatar.form-bar {\n      border-radius: 0;\n      height: 1.2rem;\n      width: 2rem;\n      border-radius: 2.5px; }\n  .items-wrapper ion-avatar.form-bar:not(:nth-child(1)) {\n        position: absolute; }\n  .items-wrapper ion-avatar.form-bar:nth-child(1) {\n        top: 6px;\n        z-index: 3; }\n  .items-wrapper ion-avatar.form-bar:nth-child(2) {\n        top: 10px;\n        z-index: 2; }\n  .items-wrapper ion-avatar.form-other {\n      border-radius: 0;\n      height: 1.2rem;\n      width: 2rem;\n      border-radius: 2.5px; }\n  .items-wrapper ion-avatar.form-other:not(:nth-child(1)) {\n        position: absolute; }\n  .items-wrapper ion-avatar.form-other:nth-child(1) {\n        top: 6px;\n        z-index: 3; }\n  .items-wrapper ion-avatar.form-other:nth-child(2) {\n        top: 10px;\n        z-index: 2; }\n  .items-wrapper .item-avatar-fallback {\n    border-width: 1px;\n    border-style: solid; }\n  .items-wrapper .item-avatar-fallback.type-gold {\n      background-color: gold;\n      border-color: #b39700;\n      box-shadow: 0px 2px 0 #665600;\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #ffdf33), to(#ccac00));\n      background: linear-gradient(180deg, #ffdf33 50%, #ccac00); }\n  .items-wrapper .item-avatar-fallback.type-silver {\n      background-color: silver;\n      border-color: #b3b3b3;\n      box-shadow: 0px 2px 0 #747373;\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #f3f3f3), to(#a7a6a6));\n      background: linear-gradient(180deg, #f3f3f3 50%, #a7a6a6); }\n  .items-wrapper .item-avatar-fallback.type-palladium, .items-wrapper .item-avatar-fallback.type-platinum {\n      background-color: #dad9d9;\n      border-color: #b3b3b3;\n      box-shadow: 0px 2px 0 #747373;\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #f3f3f3), to(#a7a6a6));\n      background: linear-gradient(180deg, #f3f3f3 50%, #a7a6a6); }\n  .items-wrapper .item-avatar-fallback.type-other {\n      background-color: #d7995b;\n      border-color: #b9722d;\n      box-shadow: 0px 2px 0 #523314;\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #d7995b), to(#a06327));\n      background: linear-gradient(180deg, #d7995b 50%, #a06327); }\n  .items-wrapper .item-avatar-fallback ion-img {\n      opacity: .75;\n      -webkit-filter: contrast(140%) brightness(1.15);\n              filter: contrast(140%) brightness(1.15); }\n  ion-item h2,\nion-item h3,\nion-item p {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n  ion-item ion-avatar.stat {\n  font-size: .8rem;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center; }\n  ion-item ion-avatar.red {\n  color: var(--ion-color-danger); }\n  ion-item ion-avatar.green {\n  color: var(--ion-color-success); }\n  ion-item.markets-closed ion-avatar.red, ion-item.markets-closed ion-avatar.green {\n  color: var(--ion-color-medium-shade); }\n  ion-avatar.stat {\n  -webkit-animation: stat 1s 1;\n          animation: stat 1s 1; }\n  @-webkit-keyframes stat {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes stat {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL3ByaXZhdGUvZ2l0L21ldGFscy9zcmMvYXBwL2xpc3QvbGlzdC1yb3ctdmlldy9saXN0LXJvdy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTtFQUxaO0lBUVEsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQVRsQjtNQVlZLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVyxFQUFBO0VBZHZCO1FBa0JvQixrQkFBa0IsRUFBQTtFQWxCdEM7UUFzQm9CLFFBQVE7UUFDUixVQUFVLEVBQUE7RUF2QjlCO1FBMkJvQixRQUFRO1FBQ1IsVUFBVSxFQUFBO0VBNUI5QjtNQWtDWSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFdBQVc7TUFDWCxvQkFBb0IsRUFBQTtFQXJDaEM7UUF5Q29CLGtCQUFrQixFQUFBO0VBekN0QztRQTZDb0IsUUFBUTtRQUNSLFVBQVUsRUFBQTtFQTlDOUI7UUFrRG9CLFNBQVM7UUFDVCxVQUFVLEVBQUE7RUFuRDlCO01BeURZLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsV0FBVztNQUNYLG9CQUFvQixFQUFBO0VBNURoQztRQWdFb0Isa0JBQWtCLEVBQUE7RUFoRXRDO1FBb0VvQixRQUFRO1FBQ1IsVUFBVSxFQUFBO0VBckU5QjtRQXlFb0IsU0FBUztRQUNULFVBQVUsRUFBQTtFQTFFOUI7SUFpRlEsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0VBbEYzQjtNQXFGWSxzQkEzRkQ7TUE2RkMscUJBQWdDO01BR2hDLDZCQUF3QztNQUN4QyxrR0FBZ0Y7TUFBaEYseURBQWdGLEVBQUE7RUEzRjVGO01BK0ZZLHdCQXBHRztNQXFHSCxxQkFBaUM7TUFHakMsNkJBQTBDO01BQzFDLGtHQUFvRjtNQUFwRix5REFBb0YsRUFBQTtFQXBHaEc7TUF5R1kseUJBQTBDO01BQzFDLHFCQUFvQztNQUdwQyw2QkFBNkM7TUFDN0Msa0dBQTBGO01BQTFGLHlEQUEwRixFQUFBO0VBOUd0RztNQWtIWSx5QkFBdUM7TUFDdkMscUJBQWlDO01BR2pDLDZCQUEwQztNQUMxQyxrR0FBb0Y7TUFBcEYseURBQW9GLEVBQUE7RUF2SGhHO01BMkhZLFlBQVk7TUFDWiwrQ0FBdUM7Y0FBdkMsdUNBQXVDLEVBQUE7RUFLbkQ7OztFQUlRLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtFQUwvQjtFQVVZLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBO0VBZjlCO0VBbUJZLDhCQUE4QixFQUFBO0VBbkIxQztFQXVCWSwrQkFBK0IsRUFBQTtFQXZCM0M7RUErQmdCLG9DQUFvQyxFQUFBO0VBTXBEO0VBQ0ksNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBR3hCO0VBQ0k7SUFBTSxVQUFVLEVBQUE7RUFDaEI7SUFBSSxVQUFVLEVBQUEsRUFBQTtFQUZsQjtFQUNJO0lBQU0sVUFBVSxFQUFBO0VBQ2hCO0lBQUksVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3Qtcm93LXZpZXcvbGlzdC1yb3ctdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnb2xkOiBnb2xkO1xuJHNpbHZlcjogc2lsdmVyO1xuJHBhbGxhZGl1bTogJHNpbHZlcjtcbiRwbGF0aW51bTogJHNpbHZlcjtcbiRicm9uemU6ICNjZDdmMzI7XG5cbi5pdGVtcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwJTtcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDM7XG5cbiAgICAgICAgJi5mb3JtLWNvaW4ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDJyZW07XG5cbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAgICY6bm90KDpudGgtY2hpbGQoMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvcm0tYmFyIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG5cbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAgICY6bm90KDpudGgtY2hpbGQoMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5mb3JtLW90aGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG5cbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAgICY6bm90KDpudGgtY2hpbGQoMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tYXZhdGFyLWZhbGxiYWNrIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG5cbiAgICAgICAgJi50eXBlLWdvbGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGQ7XG5cbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRnb2xkLCAxNSUpO1xuXG4gICAgICAgICAgICAvLyB0b2RvIG1vdmUgdG8gbWl4aW5cbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMCBkYXJrZW4oJGdvbGQsIDMwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBsaWdodGVuKCRnb2xkLCAxMCUpIDUwJSwgZGFya2VuKCRnb2xkLCAxMCUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYudHlwZS1zaWx2ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNpbHZlcjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRzaWx2ZXIsIDUlKTtcblxuICAgICAgICAgICAgLy8gdG9kbyBtb3ZlIHRvIG1peGluXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDAgZGFya2VuKCRzaWx2ZXIsIDMwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBsaWdodGVuKCRzaWx2ZXIsIDIwJSkgNTAlLCBkYXJrZW4oJHNpbHZlciwgMTAlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnR5cGUtcGFsbGFkaXVtLFxuICAgICAgICAmLnR5cGUtcGxhdGludW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcGFsbGFkaXVtLCAxMCUpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHBhbGxhZGl1bSwgNSUpO1xuXG4gICAgICAgICAgICAvLyB0b2RvIG1vdmUgdG8gbWl4aW5cbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMCBkYXJrZW4oJHBhbGxhZGl1bSwgMzAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGxpZ2h0ZW4oJHBhbGxhZGl1bSwgMjAlKSA1MCUsIGRhcmtlbigkcGFsbGFkaXVtLCAxMCUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYudHlwZS1vdGhlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRicm9uemUsIDEwJSk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYnJvbnplLCA1JSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG8gbW92ZSB0byBtaXhpblxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAwIGRhcmtlbigkYnJvbnplLCAzMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgbGlnaHRlbigkYnJvbnplLCAxMCUpIDUwJSwgZGFya2VuKCRicm9uemUsIDExJSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDE0MCUpIGJyaWdodG5lc3MoMS4xNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgICBoMixcbiAgICBoMyxcbiAgICBwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAgICYuc3RhdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJlZCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmdyZWVuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hcmtldHMtY2xvc2VkIHtcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAmLnJlZCxcbiAgICAgICAgICAgICYuZ3JlZW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWF2YXRhci5zdGF0IHtcbiAgICBhbmltYXRpb246IHN0YXQgMXMgMTtcbn1cblxuQGtleWZyYW1lcyBzdGF0IHtcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cbiAgICB0byB7b3BhY2l0eTogMTt9XG59Il19 */"

/***/ }),

/***/ "./src/app/list/list-row-view/list-row-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/list/list-row-view/list-row-view.component.ts ***!
  \***************************************************************/
/*! exports provided: ListRowViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRowViewComponent", function() { return ListRowViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/math */ "./src/app/util/math.ts");




var ListRowViewComponent = /** @class */ (function () {
    function ListRowViewComponent(storage) {
        this.storage = storage;
    }
    ListRowViewComponent.prototype.ngOnInit = function () {
        // console.log(calculatePercentage(12, 13));
    };
    ListRowViewComponent.prototype.calculatePercentage = function (itemType, b, itemQuantity) {
        if (itemQuantity === void 0) { itemQuantity = undefined; }
        var a = 0;
        // a: current worth; b: paid
        a = this.getRelevantSpot(itemType);
        // Calculate percentage:
        // ((WORTH - PAID) / PAID) * 100 = %
        a = a++;
        b = b++;
        // if this is a lot, we want to divide total price by lot amount
        if (itemQuantity) {
            b = b / itemQuantity;
        }
        if (typeof a === 'number') {
            return Object(_util_math__WEBPACK_IMPORTED_MODULE_3__["calculatePercentage"])(a, b);
            // return (((a - b) / b) * 100 * 2).toFixed(2);
        }
    };
    ListRowViewComponent.prototype.calculateDiff = function (itemType, b, itemQuantity) {
        if (itemQuantity === void 0) { itemQuantity = undefined; }
        var a = 0;
        // a: current worth; b: paid
        a = this.getRelevantSpot(itemType);
        a = a++;
        b = b++;
        // if this is a lot, we want to divide total price by lot amount
        if (itemQuantity) {
            b = b / itemQuantity;
        }
        if (typeof a === 'number') {
            return ((a - b) * itemQuantity).toFixed(2);
        }
    };
    ListRowViewComponent.prototype.roiIndicator = function (itemType, paid, itemQuantity) {
        if (itemQuantity === void 0) { itemQuantity = undefined; }
        var ret;
        // if this is a lot, to diminish manipulations,
        // we're just looking at how much per item we paid
        paid = paid++ / itemQuantity++;
        switch (itemType) {
            case 'gold':
                ret = this.goldSpot > paid;
                break;
            case 'silver':
                ret = this.silverSpot > paid;
                break;
            case 'palladium':
                ret = this.palladiumSpot > paid;
                break;
            case 'platinum':
                ret = this.platinumSpot > paid;
                break;
        }
        return ret === true ? 'green' : 'red';
    };
    ListRowViewComponent.prototype.getRelevantSpot = function (itemType) {
        var a;
        switch (itemType) {
            case 'gold':
                a = this.goldSpot;
                break;
            case 'silver':
                a = this.silverSpot;
                break;
            case 'palladium':
                a = this.palladiumSpot;
                break;
            case 'platinum':
                a = this.platinumSpot;
                break;
        }
        return a;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListRowViewComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListRowViewComponent.prototype, "goldSpot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListRowViewComponent.prototype, "silverSpot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListRowViewComponent.prototype, "palladiumSpot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListRowViewComponent.prototype, "platinumSpot", void 0);
    ListRowViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-row-view',
            template: __webpack_require__(/*! ./list-row-view.component.html */ "./src/app/list/list-row-view/list-row-view.component.html"),
            styles: [__webpack_require__(/*! ./list-row-view.component.scss */ "./src/app/list/list-row-view/list-row-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], ListRowViewComponent);
    return ListRowViewComponent;
}());



/***/ }),

/***/ "./src/app/list/list-view/list-view.component.html":
/*!*********************************************************!*\
  !*** ./src/app/list/list-view/list-view.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-searchbar\n  animated\n  type=\"text\"\n  placeholder=\"Search\"\n  showCancelButton=\"focus\"\n  (keyup)=\"searchListView($event)\"\n>\n</ion-searchbar>\n\n<ion-list color=\"transparent\" lines=\"none\">\n  <app-list-row-view\n    *ngFor=\"let item of collection\"\n    debounce=\"500\"\n    [item]=\"item\"\n    [goldSpot]=\"goldSpot\"\n    [silverSpot]=\"silverSpot\"\n    [palladiumSpot]=\"palladiumSpot\"\n    [platinumSpot]=\"platinumSpot\"\n  ></app-list-row-view>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/list/list-view/list-view.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/list/list-view/list-view.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/list/list-view/list-view.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/list/list-view/list-view.component.ts ***!
  \*******************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../collection.service */ "./src/app/collection.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _markets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../markets.service */ "./src/app/markets.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var ListViewComponent = /** @class */ (function () {
    // oneMinute: number;
    function ListViewComponent(collectionService, storage, marketsService) {
        this.collectionService = collectionService;
        this.storage = storage;
        this.marketsService = marketsService;
        this.filterList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.SPOT_REFRESH_STORAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].intervals.SPOT_REFRESH_STORAGE;
    }
    ListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpot();
        var int = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(this.SPOT_REFRESH_STORAGE);
        int.subscribe(function () {
            _this.getSpot();
        });
    };
    ListViewComponent.prototype.getSpot = function () {
        var _this = this;
        this.storage.get('spot_xau')
            .then(function (val) { return _this.goldSpot = JSON.parse(val)[0].price; })
            .catch(function (err) { return console.error(err); });
        this.storage.get('spot_xag')
            .then(function (val) { return _this.silverSpot = JSON.parse(val)[0].price; })
            .catch(function (err) { return console.error(err); });
        this.storage.get('spot_xpt')
            .then(function (val) { return _this.palladiumSpot = JSON.parse(val)[0].price; })
            .catch(function (err) { return console.error(err); });
        this.storage.get('spot_xpd')
            .then(function (val) { return _this.platinumSpot = JSON.parse(val)[0].price; })
            .catch(function (err) { return console.error(err); });
    };
    ListViewComponent.prototype.searchListView = function (e) {
        var searchString = e.target.value.toLowerCase();
        console.log('TODO: search other fields, not just title');
        this.filterList.emit(searchString);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListViewComponent.prototype, "collection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListViewComponent.prototype, "filterList", void 0);
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__(/*! ./list-view.component.html */ "./src/app/list/list-view/list-view.component.html"),
            styles: [__webpack_require__(/*! ./list-view.component.scss */ "./src/app/list/list-view/list-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _markets_service__WEBPACK_IMPORTED_MODULE_4__["MarketsService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list/list-view/list-view.component.ts");
/* harmony import */ var _list_row_view_list_row_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-row-view/list-row-view.component */ "./src/app/list/list-row-view/list-row-view.component.ts");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shared-module */ "./src/app/components/shared-module.ts");










var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"] }]),
                _components_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"], _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_7__["ListViewComponent"], _list_row_view_list_row_view_component__WEBPACK_IMPORTED_MODULE_8__["ListRowViewComponent"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar translucent=\"true\" color=\"transparent\">\n    <ion-title>\n      <app-spot-prices></app-spot-prices>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" [class.consoleVisible]=\"logEnabled\">\n  <app-list-view\n    (filterList)=\"filterListUpdate($event)\"\n    (updateList)=\"handleListUpdate($event)\"\n    [collection]=\"collection\"\n  ></app-list-view>\n\n  <ion-fab\n    horizontal=\"end\"\n    vertical=\"bottom\"\n    slot=\"fixed\"\n    [class.consoleVisible]=\"logEnabled\"\n  >\n    <ion-fab-button (click)=\"presentModal()\">\n      <ion-ripple-effect></ion-ripple-effect>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-bottom: 20px; }\n  ion-content.consoleVisible {\n    --padding-bottom: 100px; }\n  ion-grid {\n  --ion-grid-padding: 0; }\n  ion-col {\n  --ion-grid-column-padding: 0; }\n  ion-fab {\n  bottom: 60px; }\n  ion-fab.consoleVisible {\n    bottom: 140px; }\n  ion-fab-button {\n  --box-shadow: none;\n  --background: none;\n  -webkit-backdrop-filter: saturate(500%) blur(20px) contrast(110%) brightness(100%);\n          backdrop-filter: saturate(500%) blur(20px) contrast(110%) brightness(100%);\n  --border-color:\tvar(--ion-color-primary);\n  border-radius: 50%;\n  --border-radius: 50%;\n  --border-style: solid;\n  --border-width: 1px;\n  --color: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mMXZsYWRjdG1iL3ByaXZhdGUvZ2l0L21ldGFscy9zcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBaUIsRUFBQTtFQURyQjtJQUtRLHVCQUFpQixFQUFBO0VBSXpCO0VBQ0kscUJBQW1CLEVBQUE7RUFHdkI7RUFDSSw0QkFBMEIsRUFBQTtFQUc5QjtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUlRLGFBQWEsRUFBQTtFQUlyQjtFQUNJLGtCQUFhO0VBQ2Isa0JBQWE7RUFDYixrRkFBMEU7VUFBMUUsMEVBQTBFO0VBQzFFLHdDQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFnQjtFQUNoQixxQkFBZTtFQUNmLG1CQUFlO0VBQ2YsaUNBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBcbiAgICAvLyBmb3IgY29uc29sZSBtb2RlIG9ubHlcbiAgICAmLmNvbnNvbGVWaXNpYmxlIHtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgfVxufVxuXG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xufVxuXG5pb24tY29sIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xufVxuXG5pb24tZmFiIHtcbiAgICBib3R0b206IDYwcHg7XG5cbiAgICAmLmNvbnNvbGVWaXNpYmxlIHtcbiAgICAgICAgYm90dG9tOiAxNDBweDtcbiAgICB9XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoNTAwJSkgYmx1cigyMHB4KSBjb250cmFzdCgxMTAlKSBicmlnaHRuZXNzKDEwMCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOlx0dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collection.service */ "./src/app/collection.service.ts");
/* harmony import */ var _components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/new-item/new-item.component */ "./src/app/components/new-item/new-item.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _markets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../markets.service */ "./src/app/markets.service.ts");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);










var ListPage = /** @class */ (function () {
    function ListPage(collectionService, modalController, toastController, marketsService) {
        this.collectionService = collectionService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.marketsService = marketsService;
        this.logEnabled = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].logEnabled;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.updateInterval = 60000; // one minute
        this.currentTime = Date.now();
        this.updateCurrentTime(this.updateInterval);
        this.collection = this.collectionService.getAllItems();
        this.subscriptionMarkets = this.marketsService.marketsOpen().subscribe(function (res) {
            res ? _this.marketStatus = true : _this.marketStatus = false;
        });
    };
    ListPage.prototype.updateCurrentTime = function (interval) {
        var _this = this;
        setInterval(function () {
            _this.currentTime = Date.now();
        }, interval);
    };
    ListPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_4__["NewItemComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (lodash_has__WEBPACK_IMPORTED_MODULE_7___default()(data, 'data.returnedData')) {
                                // this.collection.unshift({
                                //   title: data.data.title.value,
                                // })
                                _this.collection.unshift({
                                    id: '1154',
                                    title: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.title', ''),
                                    type: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.type', 'other'),
                                    form: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.form', 'other'),
                                    weight: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.weight', ''),
                                    purity: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.purity', ''),
                                    country: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.country', ''),
                                    quantity: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.quantity', '1'),
                                    paid: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.paid', ''),
                                    cert: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.cert', ''),
                                    certVendor: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.certVendor', ''),
                                    imageurl: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.imageurl', ''),
                                    notes: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.notes', ''),
                                    label: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.label', ''),
                                    labelColor: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, 'data.returnedData.labelColor', ''),
                                    created: Date.now().toString(),
                                    updated: "",
                                });
                                _this.presentToast(data.data.title.value);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.presentToast = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Successfully added \"" + name + "\".",
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
    ListPage.prototype.handleListUpdate = function (e) {
    };
    ListPage.prototype.filterListUpdate = function (e) {
        this.collection = this.collectionService.filterItems(e.toLowerCase());
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_collection_service__WEBPACK_IMPORTED_MODULE_3__["CollectionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _markets_service__WEBPACK_IMPORTED_MODULE_6__["MarketsService"]])
    ], ListPage);
    return ListPage;
}());



/***/ }),

/***/ "./src/app/util/math.ts":
/*!******************************!*\
  !*** ./src/app/util/math.ts ***!
  \******************************/
/*! exports provided: calculatePercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePercentage", function() { return calculatePercentage; });
var calculatePercentage = function (a, b) {
    return (((a - b) / b) * 100 * 2).toFixed(2);
};


/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map