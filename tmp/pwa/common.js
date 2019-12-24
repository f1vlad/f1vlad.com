(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/safari-view-controller/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: SafariViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafariViewController", function() { return SafariViewController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SafariViewController = /** @class */ (function (_super) {
    __extends(SafariViewController, _super);
    function SafariViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewController.prototype.isAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isAvailable", {}, arguments); };
    SafariViewController.prototype.show = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewController.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hide", {}, arguments); };
    SafariViewController.prototype.connectToService = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "connectToService", {}, arguments); };
    SafariViewController.prototype.warmUp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "warmUp", {}, arguments); };
    SafariViewController.prototype.mayLaunchUrl = function (url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "mayLaunchUrl", {}, arguments); };
    SafariViewController.pluginName = "SafariViewController";
    SafariViewController.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewController.pluginRef = "SafariViewController";
    SafariViewController.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewController.platforms = ["Android", "iOS"];
    SafariViewController = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SafariViewController);
    return SafariViewController;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NhZmFyaS12aWV3LWNvbnRyb2xsZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtRVEsd0NBQWlCOzs7O0lBTXpELDBDQUFXO0lBY1gsbUNBQUksYUFBQyxPQUFxQztJQVExQyxtQ0FBSTtJQVNKLCtDQUFnQjtJQVNoQixxQ0FBTTtJQVVOLDJDQUFZLGFBQUMsR0FBVzs7Ozs7O0lBeERiLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7T0FDQSxvQkFBb0I7K0JBckVqQztFQXFFMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9ucyB7XG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgYmFyQ29sb3I/OiBzdHJpbmc7XG4gIGNvbnRyb2xUaW50Q29sb3I/OiBzdHJpbmc7XG4gIGVudGVyUmVhZGVyTW9kZUlmQXZhaWxhYmxlPzogYm9vbGVhbjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgc2hvd0RlZmF1bHRTaGFyZU1lbnVJdGVtPzogYm9vbGVhbjtcbiAgdGludENvbG9yPzogc3RyaW5nO1xuICB0b29sYmFyQ29sb3I/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZvciBkaXNwbGF5aW5nIHJlYWQtb25seSB3ZWIgY29udGVudC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NhZmFyaSBWaWV3IENvbnRyb2xsZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTYWZhcmlWaWV3Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2FmYXJpLXZpZXctY29udHJvbGxlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FmYXJpVmlld0NvbnRyb2xsZXI6IFNhZmFyaVZpZXdDb250cm9sbGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNhZmFyaVZpZXdDb250cm9sbGVyLmlzQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICogICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICpcbiAqICAgICAgICAgdGhpcy5zYWZhcmlWaWV3Q29udHJvbGxlci5zaG93KHtcbiAqICAgICAgICAgICB1cmw6ICdodHRwOi8vaW9uaWMuaW8nLFxuICogICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gKiAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICogICAgICAgICAgIHRyYW5zaXRpb246ICdjdXJsJyxcbiAqICAgICAgICAgICBlbnRlclJlYWRlck1vZGVJZkF2YWlsYWJsZTogdHJ1ZSxcbiAqICAgICAgICAgICB0aW50Q29sb3I6ICcjZmYwMDAwJ1xuICogICAgICAgICB9KVxuICogICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xuICogICAgICAgICAgICAgaWYocmVzdWx0LmV2ZW50ID09PSAnb3BlbmVkJykgY29uc29sZS5sb2coJ09wZW5lZCcpO1xuICogICAgICAgICAgICAgZWxzZSBpZihyZXN1bHQuZXZlbnQgPT09ICdsb2FkZWQnKSBjb25zb2xlLmxvZygnTG9hZGVkJyk7XG4gKiAgICAgICAgICAgICBlbHNlIGlmKHJlc3VsdC5ldmVudCA9PT0gJ2Nsb3NlZCcpIGNvbnNvbGUubG9nKCdDbG9zZWQnKTtcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICAgICAgICApO1xuICpcbiAqICAgICAgIH0gZWxzZSB7XG4gKiAgICAgICAgIC8vIHVzZSBmYWxsYmFjayBicm93c2VyLCBleGFtcGxlIEluQXBwQnJvd3NlclxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NhZmFyaVZpZXdDb250cm9sbGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxuICBwbHVnaW5SZWY6ICdTYWZhcmlWaWV3Q29udHJvbGxlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYWZhcmlWaWV3Q29udHJvbGxlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBTYWZhcmlWaWV3Q29udHJvbGxlciBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnN9IG9wdGlvbmFsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICBzaG93KG9wdGlvbnM/OiBTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBTYWZhcmkgVmlldyBDb250cm9sbGVyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gY29ubmVjdCB0byB0aGUgIENocm9tZSdzIGN1c3RvbSB0YWJzIHNlcnZpY2UuIHlvdSBtdXN0IGNhbGwgdGhpcyBtZXRob2QgYmVmb3JlIGNhbGxpbmcgYW55IG9mIHRoZSBvdGhlciBtZXRob2RzIGxpc3RlZCBiZWxvdy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdFRvU2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW5ldmVyIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHVzZXIgd2lsbCBvcGVuIGFuIGV4dGVybmFsIHVybC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd2FybVVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBldmVuIGJldHRlciBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIGNhbGwgdGhpcyBtZXRob2RzIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIGEgNTAlIGNoYW5jZSB0aGUgdXNlciB3aWxsIG9wZW4gYSBjZXJ0YWluIFVSTC5cbiAgICogQHBhcmFtIHVybHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1heUxhdW5jaFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-6c3d2f60.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-6c3d2f60.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
function hapticSelection() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
function hapticSelectionStart() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
}
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
function hapticSelectionChanged() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
}
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
function hapticSelectionEnd() {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-9d21e8e5.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-9d21e8e5.js ***!
  \********************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createColorClasses(color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
}
function getClassList(classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
}
function getClassMap(classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
}
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
function openURL(url, ev, direction) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var router;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) return [3 /*break*/, 2];
                    router = document.querySelector('ion-router');
                    if (!router) return [3 /*break*/, 2];
                    if (ev != null) {
                        ev.preventDefault();
                    }
                    return [4 /*yield*/, router.componentOnReady()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, router.push(url, direction)];
                case 2: return [2 /*return*/, false];
            }
        });
    });
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-cae2ca23.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-cae2ca23.js ***!
  \********************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-d102c9d1.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-d102c9d1.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
function rIC(callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
}
function hasShadowDom(el) {
    return !!el.shadowRoot && !!el.attachShadow;
}
function findItemLabel(componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
}
function renderHiddenInput(always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
}
function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
function assert(actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
function pointerCoord(ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
function isEndSide(side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
}
function debounceEvent(event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
}
function debounce(func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
}



/***/ }),

/***/ "./node_modules/country-code-emoji/lib/index.umd.js":
/*!**********************************************************!*\
  !*** ./node_modules/country-code-emoji/lib/index.umd.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?module.exports=r():undefined}(this,function(){"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var r=0,o=new Array(t.length);r<t.length;r++)o[r]=t[r];return o}}(t)||function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=/^[a-z]{2}$/i,r=127397;return function countryCodeEmoji(o){if(!t.test(o)){var e=_typeof(o);throw new TypeError("cc argument must be an ISO 3166-1 alpha-2 string, but got '".concat("string"===e?o:e,"' instead."))}var n=_toConsumableArray(o.toUpperCase()).map(function(t){return t.charCodeAt()+r});return String.fromCodePoint.apply(String,_toConsumableArray(n))}});
//# sourceMappingURL=index.umd.js.map


/***/ })

}]);
//# sourceMappingURL=common.js.map