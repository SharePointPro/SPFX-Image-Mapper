define("c895c94f-ba8c-42aa-b0fa-90c0d8224369_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "Kd4u");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "3MwK":
/*!**********************************************************************************!*\
  !*** ./lib/webparts/imageMapperLandingPage/components/ImageMapperLandingPage.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageMapperLandingPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageMapperLandingPage.module.scss */ "sTnK");
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


var ImageMapperLandingPage = /** @class */ (function (_super) {
    __extends(ImageMapperLandingPage, _super);
    function ImageMapperLandingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageMapperLandingPage.prototype.onClick = function (link, openInNewWindow) {
        if (openInNewWindow) {
            window.open(link, '_blank');
        }
        else {
            window.location.href = link;
        }
    };
    ImageMapperLandingPage.prototype.render = function () {
        var _this = this;
        console.log("this.props", this.props);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ImageMapperLandingPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageMapperLandingPage },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 1600 902" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", { width: this.props.imageWidth, height: this.props.imageHeight, xlinkHref: this.props.imageUrl }),
                this.props.items.map(function (imageMapping, index) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: _ImageMapperLandingPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pointer, onClick: function () { return _this.onClick(imageMapping.url, imageMapping.openInNewWindow); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { x: imageMapping.x, y: imageMapping.y, fill: "#fff", opacity: "0", width: imageMapping.width, height: imageMapping.height })));
                }))));
    };
    return ImageMapperLandingPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageMapperLandingPage);


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "Kd4u":
/*!******************************************************************************!*\
  !*** ./lib/webparts/imageMapperLandingPage/ImageMapperLandingPageWebPart.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ImageMapperLandingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ImageMapperLandingPage */ "3MwK");
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






var ImageMapperLandingPageWebPart = /** @class */ (function (_super) {
    __extends(ImageMapperLandingPageWebPart, _super);
    function ImageMapperLandingPageWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageMapperLandingPageWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ImageMapperLandingPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            description: this.properties.description,
            imageUrl: this.properties.imageUrl,
            imageHeight: this.properties.imageHeight,
            imageWidth: this.properties.imageWidth,
            items: this.properties.items,
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    ImageMapperLandingPageWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(ImageMapperLandingPageWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    ImageMapperLandingPageWebPart.prototype.onAddButtonClick = function (value) {
        this.properties.items.push({});
    };
    ImageMapperLandingPageWebPart.prototype.onDeleteButtonClick = function (value) {
        this.properties.items.splice(value, 1);
    };
    ImageMapperLandingPageWebPart.prototype.createNewGroup = function (iMapArea, index) {
        return {
            groupName: "Mapped Area " + (index + 1),
            groupFields: [
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("items[" + index + "].x", {
                    label: "X",
                    value: iMapArea.x,
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("items[" + index + "].y", {
                    label: "Y",
                    value: iMapArea.y,
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("items[" + index + "].width", {
                    label: "Width",
                    value: iMapArea.width,
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("items[" + index + "].height", {
                    label: "Height",
                    value: iMapArea.height,
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("items[" + index + "].url", {
                    label: "Url",
                    value: iMapArea.url,
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneCheckbox"])("items[" + index + "].openInNewWindow", {
                    checked: iMapArea.openInNewWindow,
                    text: "Open in new window",
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneButton"])("deleteButton", {
                    text: "Delete",
                    buttonType: _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneButtonType"].Command,
                    icon: "RecycleBin",
                    onClick: this.onDeleteButtonClick.bind(this, index),
                }),
                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneButton"])("addButton", {
                    text: "Add",
                    buttonType: _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneButtonType"].Command,
                    icon: "CirclePlus",
                    onClick: this.onAddButtonClick.bind(this),
                }),
            ],
        };
    };
    ImageMapperLandingPageWebPart.prototype.getPropertyPaneConfiguration = function () {
        var _this = this;
        var pages = [];
        pages.push({
            header: {
                description: "Image Area Settings",
            },
            groups: [
                {
                    groupName: "Image",
                    groupFields: [
                        Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("imageUrl", {
                            label: "Image Url",
                        }),
                        Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("imageHeight", {
                            label: "Image Height",
                        }),
                        Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("imageWidth", {
                            label: "Image Width",
                        }),
                    ],
                },
                {
                    groupName: "",
                    groupFields: [
                        Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneButton"])("addButton", {
                            text: "Add",
                            buttonType: _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneButtonType"].Command,
                            icon: "CirclePlus",
                            onClick: this.onAddButtonClick.bind(this),
                        }),
                    ],
                }
            ],
        });
        console.log(this.properties);
        this.properties.items.forEach(function (item, index) {
            pages.push({
                header: {
                    description: "Map Area " + (index + 1),
                },
                groups: [
                    _this.createNewGroup(item, index)
                ]
            });
        });
        return {
            pages: pages,
        };
    };
    return ImageMapperLandingPageWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageMapperLandingPageWebPart);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "XNXU":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/imageMapperLandingPage/components/ImageMapperLandingPage.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".imageMapperLandingPage_32923665 .image_32923665{width:100%}.imageMapperLandingPage_32923665 .pointer_32923665{cursor:pointer}.imageMapperLandingPage_32923665 .container_32923665{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.imageMapperLandingPage_32923665 .row_32923665{margin:0 -8px;box-sizing:border-box;zoom:1;color:#fff;background-color:#005a9e;padding:20px}.imageMapperLandingPage_32923665 .row_32923665:after,.imageMapperLandingPage_32923665 .row_32923665:before{display:table;content:\"\";line-height:0}.imageMapperLandingPage_32923665 .row_32923665:after{clear:both}.imageMapperLandingPage_32923665 .column_32923665{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .imageMapperLandingPage_32923665 .column_32923665{float:left}[dir=rtl] .imageMapperLandingPage_32923665 .column_32923665{float:right}.imageMapperLandingPage_32923665 .column_32923665 .ms-Grid_32923665{padding:0}@media (min-width:640px){.imageMapperLandingPage_32923665 .column_32923665{width:83.3333333333%}}@media (min-width:1024px){.imageMapperLandingPage_32923665 .column_32923665{width:66.6666666667%}}@media (min-width:1024px){[dir=ltr] .imageMapperLandingPage_32923665 .column_32923665{left:16.6666666667%}[dir=rtl] .imageMapperLandingPage_32923665 .column_32923665{right:16.6666666667%}}@media (min-width:640px){[dir=ltr] .imageMapperLandingPage_32923665 .column_32923665{left:8.3333333333%}[dir=rtl] .imageMapperLandingPage_32923665 .column_32923665{right:8.3333333333%}}.imageMapperLandingPage_32923665 .title_32923665{font-size:21px;font-weight:100;color:#fff}.imageMapperLandingPage_32923665 .description_32923665,.imageMapperLandingPage_32923665 .subTitle_32923665{font-size:17px;font-weight:300;color:#fff}.imageMapperLandingPage_32923665 .button_32923665{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.imageMapperLandingPage_32923665 .button_32923665 .label_32923665{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "pSp2":
/*!******************************************************************************************!*\
  !*** ./lib/webparts/imageMapperLandingPage/components/ImageMapperLandingPage.module.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./ImageMapperLandingPage.module.css */ "XNXU");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "sTnK":
/*!**********************************************************************************************!*\
  !*** ./lib/webparts/imageMapperLandingPage/components/ImageMapperLandingPage.module.scss.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ImageMapperLandingPage.module.css */ "pSp2");
var styles = {
    imageMapperLandingPage: 'imageMapperLandingPage_32923665',
    image: 'image_32923665',
    pointer: 'pointer_32923665',
    container: 'container_32923665',
    row: 'row_32923665',
    column: 'column_32923665',
    'ms-Grid': 'ms-Grid_32923665',
    title: 'title_32923665',
    subTitle: 'subTitle_32923665',
    description: 'description_32923665',
    button: 'button_32923665',
    label: 'label_32923665'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=image-mapper-landing-page-web-part.js.map