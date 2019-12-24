(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/polyfills/string.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/polyfills/string.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
String.prototype.endsWith
*/
String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{writable:!0,configurable:!0,value:function(b,a){if(void 0===a||a>this.length)a=this.length;return this.substring(a-b.length,a)===b}});
/*!
String.prototype.includes
*/
String.prototype.includes||(String.prototype.includes=function(b,a){"number"!==typeof a&&(a=0);return a+b.length>this.length?!1:-1!==this.indexOf(b,a)});
/*!
String.prototype.startsWith
*/
String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{writable:!0,configurable:!0,value:function(b,a){return this.substr(!a||0>a?0:+a,b.length)===b}});

/***/ })

}]);
//# sourceMappingURL=185.js.map