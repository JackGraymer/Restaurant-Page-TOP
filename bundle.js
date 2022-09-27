/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/japanico.jpg */ "./src/img/japanico.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html{\n    margin: 0;\n    padding: 0;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\nbody{\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(57, 15, 97);\n    display: flex;\n    justify-content: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n#container{\n    background-color: rgba(82, 21, 21, 0.486);\n    height: 100%;\n    width: clamp(800px, 1080px, 1200px);\n    display: grid;\n    grid-template-rows: 5em minmax(800px, auto) 5em;\n}\n\n#header{\n    background-color: rgba(0, 100, 0, 0.521);\n    display: flex\n}\n\n.icon{\n    height: 5em;\n    width: 5em;\n    margin: 0 20px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    border-radius: 50%;\n    background-size:cover;\n}\n\n#buttons{\n    margin-right: 100px;\n    display: flex;\n    flex-grow: 1;\n    justify-content:center;\n    gap: 5%;\n}\n.button{\n    font-size: larger;\n    width: 20%;\n    border-radius: 1em;\n    border:solid rgba(128, 128, 128, 0.541);\n}\n.button:hover{\n    background-color: rgb(36, 36, 36);\n    border-color: rgb(255, 0, 115);\n    color: rgb(255, 0, 115);\n    transition: 200ms;\n    cursor: pointer;\n}\n\n#content{\n    padding: 3em 0;\n    color: rgba(20, 76, 230, 0.493);\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: large;\n    margin: 0 1em;\n    overflow: scroll;\n}\n\n.block{/*Replaceable for 'welcome' on home tab*/\n    display: grid;\n    ssgrid-auto-columns: auto;\n    color: black;\n    box-sizing: border-box;\n    padding: 1em;\n    width: 100%;\n    height: clamp(1em, auto, 100%);\n    border-radius: 2em;\n    background-color: rgb(156, 156, 44);\n    margin-bottom: 1em;\n}\n\n.welcome{/*Replaceable for 'welcome' on home tab*/\n    display: grid;\n    text-align:center;\n    box-sizing: border-box;\n    padding: 1em;\n    width: 100%;\n    height: clamp(1em, auto, 100%);\n    border-radius: 2em;\n    background-color: rgb(156, 156, 44);\n}\n.welcome>h2{\n    justify-self: center;\n}\n.block>img{\n    justify-self: center;\n    spadding: 1em 1em;\n    width: 80%;\n    border-radius: 2em;\n}\n\n.menu{\n    display: grid;\n    grid-template-areas: \n    'name price img'\n    'description description img';\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-rows: 1fr 4fr;\n}\n.menu>h2{\n    grid-area: name;\n    align-self: center;\n    margin: 0;\n}\n.menu>h3{\n    text-align: center;\n    grid-area: price;\n    align-self: center;\n    margin: 0;\n}\n.menu>p{\n    grid-area: description;\n    align-self: center;\n}\n.menu>img{\n    padding: 0;\n    grid-area: img;\n    align-self: center;\n}\n\n\n\n#footer{\n\n    background-color: rgba(47, 79, 79, 0.493);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.footer{\n    display: flex;\n    align-items: center;\n}\n\n.right{\n    display: grid;\n    justify-items: center;\n}\n\na{\n    text-decoration: none;\n}\n\n.git{\n    padding-left: 0.2em;\n    align-content: flex-end;\n    display: inline;\n    width: 2.5em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,yDAA2C;IAC3C,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,YAAY;IACZ,mCAAmC;IACnC,aAAa;IACb,+CAA+C;AACnD;;AAEA;IACI,wCAAwC;IACxC;AACJ;;AAEA;IACI,WAAW;IACX,UAAU;IACV,cAAc;IACd,yDAAyC;IACzC,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,OAAO;AACX;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,kBAAkB;IAClB,uCAAuC;AAC3C;AACA;IACI,iCAAiC;IACjC,8BAA8B;IAC9B,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,+BAA+B;IAC/B,oCAAoC;IACpC,gBAAgB;IAChB,aAAa;IACb,gBAAgB;AACpB;;AAEA,OAAO,wCAAwC;IAC3C,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;IAClB,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA,SAAS,wCAAwC;IAC7C,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;IAClB,mCAAmC;AACvC;AACA;IACI,oBAAoB;AACxB;AACA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb;;iCAE6B;IAC7B,kCAAkC;IAClC,2BAA2B;AAC/B;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,cAAc;IACd,kBAAkB;AACtB;;;;AAIA;;IAEI,yCAAyC;IACzC,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;AAChB","sourcesContent":["body, html{\n    margin: 0;\n    padding: 0;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\nbody{\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(57, 15, 97);\n    display: flex;\n    justify-content: center;\n    background-image: url(./img/background.jpg);\n    background-size: cover;\n}\n\n#container{\n    background-color: rgba(82, 21, 21, 0.486);\n    height: 100%;\n    width: clamp(800px, 1080px, 1200px);\n    display: grid;\n    grid-template-rows: 5em minmax(800px, auto) 5em;\n}\n\n#header{\n    background-color: rgba(0, 100, 0, 0.521);\n    display: flex\n}\n\n.icon{\n    height: 5em;\n    width: 5em;\n    margin: 0 20px;\n    background-image: url(./img/japanico.jpg);\n    border-radius: 50%;\n    background-size:cover;\n}\n\n#buttons{\n    margin-right: 100px;\n    display: flex;\n    flex-grow: 1;\n    justify-content:center;\n    gap: 5%;\n}\n.button{\n    font-size: larger;\n    width: 20%;\n    border-radius: 1em;\n    border:solid rgba(128, 128, 128, 0.541);\n}\n.button:hover{\n    background-color: rgb(36, 36, 36);\n    border-color: rgb(255, 0, 115);\n    color: rgb(255, 0, 115);\n    transition: 200ms;\n    cursor: pointer;\n}\n\n#content{\n    padding: 3em 0;\n    color: rgba(20, 76, 230, 0.493);\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: large;\n    margin: 0 1em;\n    overflow: scroll;\n}\n\n.block{/*Replaceable for 'welcome' on home tab*/\n    display: grid;\n    ssgrid-auto-columns: auto;\n    color: black;\n    box-sizing: border-box;\n    padding: 1em;\n    width: 100%;\n    height: clamp(1em, auto, 100%);\n    border-radius: 2em;\n    background-color: rgb(156, 156, 44);\n    margin-bottom: 1em;\n}\n\n.welcome{/*Replaceable for 'welcome' on home tab*/\n    display: grid;\n    text-align:center;\n    box-sizing: border-box;\n    padding: 1em;\n    width: 100%;\n    height: clamp(1em, auto, 100%);\n    border-radius: 2em;\n    background-color: rgb(156, 156, 44);\n}\n.welcome>h2{\n    justify-self: center;\n}\n.block>img{\n    justify-self: center;\n    spadding: 1em 1em;\n    width: 80%;\n    border-radius: 2em;\n}\n\n.menu{\n    display: grid;\n    grid-template-areas: \n    'name price img'\n    'description description img';\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-rows: 1fr 4fr;\n}\n.menu>h2{\n    grid-area: name;\n    align-self: center;\n    margin: 0;\n}\n.menu>h3{\n    text-align: center;\n    grid-area: price;\n    align-self: center;\n    margin: 0;\n}\n.menu>p{\n    grid-area: description;\n    align-self: center;\n}\n.menu>img{\n    padding: 0;\n    grid-area: img;\n    align-self: center;\n}\n\n\n\n#footer{\n\n    background-color: rgba(47, 79, 79, 0.493);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.footer{\n    display: flex;\n    align-items: center;\n}\n\n.right{\n    display: grid;\n    justify-items: center;\n}\n\na{\n    text-decoration: none;\n}\n\n.git{\n    padding-left: 0.2em;\n    align-content: flex-end;\n    display: inline;\n    width: 2.5em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function contact(){
    (0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const block = document.createElement('div')
    const title = document.createElement('h2')
    const text = document.createElement('p')
    const img = document.createElement('img')

    content.appendChild(block);
    block.appendChild(title)
    block.appendChild(text)
    block.appendChild(img)

    block.setAttribute('class', 'block contact')

    title.textContent = 'Contact us'
    text.innerHTML = `<address> 
    Written by <a href="mailto:Email@Example.com">JackGraymer</a><br> 
    E-mail us at: <a href="mailto:Email@Example.com">Email@Example.com</a><br> 
    Visit this project at: <a href="https://github.com/JackGraymer/Restaurant-Page-TOP">GitHub repo</a><br> 
    Location: In the heart of <a href="https://goo.gl/maps/w5XchyT6ZHLuW5dVA">Zurich, </a> Switzerland<br> 
    
    </address>`

}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "printMe": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var _img_restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant.png */ "./src/img/restaurant.png");
/* harmony import */ var _img_ramen_main_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ramen-main.png */ "./src/img/ramen-main.png");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");




function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = _img_restaurant_png__WEBPACK_IMPORTED_MODULE_0__
}


function printMe() {
  console.log(`I get called from home.js`)
}

let content = document.querySelector('#content')


function home(){
  ;(0,_index__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const block = document.createElement('div')
  const title = document.createElement('h2')
  const text = document.createElement('p')
  const img = document.createElement('img')

  content.appendChild(block);
  block.appendChild(title)
  block.appendChild(text)
  block.appendChild(img)

  block.setAttribute('class', 'block welcome')
  img.src=_img_ramen_main_png__WEBPACK_IMPORTED_MODULE_1__
  img.alt='Ramen picture'

  title.textContent = 'Welcome!'
  text.innerHTML = 'Come to the Ramen Dining and you will experience Asian and Japanese food on a whole new level. Treat yourself with this delicious food and savour a piece of Asia in the middle of your city. <br> Our meals are prepared by traditional chefs with more than 10 years of experience, that after mastering their skills decided to venture on the world to show their culture and flavours. <br> Home made, daily.'

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _img_japanico_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/japanico.jpg */ "./src/img/japanico.jpg");
/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/github.png */ "./src/img/github.png");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = _img_japanico_jpg__WEBPACK_IMPORTED_MODULE_2__
}
iconChange()

function footerLink(){
    document.querySelector('.git').src = _img_github_png__WEBPACK_IMPORTED_MODULE_3__;
}

function clearContent(){
    content.textContent = ''
}

footerLink()

;(0,_home__WEBPACK_IMPORTED_MODULE_1__.printMe)();

(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
let menu = document.querySelectorAll('.button')

//Tab functionality ** each tab clears the content and creates its own
menu.forEach(element => {
    element.addEventListener('click', () => {
        menu.forEach(element => {
            element.style.backgroundColor= 'red';
        });    
        element.style.backgroundColor= 'blue';
        //write tab function
        if(element.textContent === "Home"){
            (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()
            console.log(element.textContent)
        } else if(element.textContent === "Menu"){
            (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])()
            console.log(element.textContent)
        }else{
            (0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])()
            console.log(element.textContent)
        }
    })
});


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _img_ramen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ramen.png */ "./src/img/ramen.png");
/* harmony import */ var _img_gyoza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/gyoza.jpg */ "./src/img/gyoza.jpg");
/* harmony import */ var _img_sushi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/sushi.jpg */ "./src/img/sushi.jpg");
/* harmony import */ var _img_wakame_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/wakame.jpg */ "./src/img/wakame.jpg");
/* harmony import */ var _img_okonomiyaki_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/okonomiyaki.jpg */ "./src/img/okonomiyaki.jpg");

//Images import






let items = []



function menu(){
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])()

    let content = document.querySelector('#content')

    //Create Menu items
    meals().forEach(element => {
        
        const block = document.createElement('div')
        const title = document.createElement('h2')
        const price = document.createElement('h3')
        const text = document.createElement('p')
        const img = document.createElement('img')
        
        content.appendChild(block);
        block.appendChild(title)
        block.appendChild(price)
        block.appendChild(img)
        block.appendChild(text)

        block.setAttribute('class', 'block menu')
        text.setAttribute('class', 'description')

        text.textContent = element.description
        title.textContent = element.name
        price.textContent = element.price
        img.src = element.img
    })

    

}



function meals(){

    let foods = [];
    function plate(name, price){
        this.name = name
        this.price = price 
        let description = ''
        let img = ''
        foods.push(this)
    }
    
    let ramen = new plate('Tonkotsu Ramen', '16,90')
    ramen.description = 'Tonkotsu is a unique style of ramen consisting of an extremely rich, fatty pork broth, fresh noodles, soft-yolk eggs, and tender pork belly that melts in the mouth. It is so popular and special that it could be a dish of its own, not just a ramen style. The rich broth is developed by cooking the pork bones for a very long time, until the collagen and fat dissolve, resulting in a unique, creamy texture of the dish.';
    ramen.img = _img_ramen_png__WEBPACK_IMPORTED_MODULE_1__
    console.log(ramen)

    let gyoza = new plate('Gyoza (4pcs)', '6,90')
    gyoza.description = 'Gyoza are small Japanese dumplings which have been filled with ingredients like minced pork and vegetables, boyled in rich vegetable broth.'
    gyoza.img = _img_gyoza_jpg__WEBPACK_IMPORTED_MODULE_2__

    let sushi = new plate('Sushi sort (24pcs)','19,90')
    sushi.description = '24 pieces of sushi of 6 different types, combining tuna, salmon, avocado, cream chease, cucumber. Includes soysauce, wasabi and ginger'
    sushi.img = _img_sushi_jpg__WEBPACK_IMPORTED_MODULE_3__

    let wakame = new plate('Wakame salad', '5,90')
    wakame.description = 'Seaweed salad with sesame seeds, perfect for starters and to combine with sushi';
    wakame.img = _img_wakame_jpg__WEBPACK_IMPORTED_MODULE_4__

    let okonomiyaki = new plate('Okonomiyaki with bacon', '8,50')
    okonomiyaki.description = 'Okonomiyaki is a popular pan-fried dish that consists of batter and cabbage. Topped with special Okonomiyaki sauce, Japanese mayonaise, sesame seeds, bacon, spring onions and Katsuobushi (bonito flakes)';
    okonomiyaki.img = _img_okonomiyaki_jpg__WEBPACK_IMPORTED_MODULE_5__

    return foods
}





/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/background.jpg";

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/github.png";

/***/ }),

/***/ "./src/img/gyoza.jpg":
/*!***************************!*\
  !*** ./src/img/gyoza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/gyoza.jpg";

/***/ }),

/***/ "./src/img/japanico.jpg":
/*!******************************!*\
  !*** ./src/img/japanico.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/japanico.jpg";

/***/ }),

/***/ "./src/img/okonomiyaki.jpg":
/*!*********************************!*\
  !*** ./src/img/okonomiyaki.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/okonomiyaki.jpg";

/***/ }),

/***/ "./src/img/ramen-main.png":
/*!********************************!*\
  !*** ./src/img/ramen-main.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/ramen-main.png";

/***/ }),

/***/ "./src/img/ramen.png":
/*!***************************!*\
  !*** ./src/img/ramen.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/ramen.png";

/***/ }),

/***/ "./src/img/restaurant.png":
/*!********************************!*\
  !*** ./src/img/restaurant.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/restaurant.png";

/***/ }),

/***/ "./src/img/sushi.jpg":
/*!***************************!*\
  !*** ./src/img/sushi.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/sushi.jpg";

/***/ }),

/***/ "./src/img/wakame.jpg":
/*!****************************!*\
  !*** ./src/img/wakame.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/wakame.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxxREFBcUQsZ0JBQWdCLGlCQUFpQiw4SEFBOEgsU0FBUyxtQkFBbUIsb0JBQW9CLHdDQUF3QyxvQkFBb0IsOEJBQThCLHdFQUF3RSw2QkFBNkIsR0FBRyxlQUFlLGdEQUFnRCxtQkFBbUIsMENBQTBDLG9CQUFvQixzREFBc0QsR0FBRyxZQUFZLCtDQUErQyxzQkFBc0IsVUFBVSxrQkFBa0IsaUJBQWlCLHFCQUFxQix3RUFBd0UseUJBQXlCLDRCQUE0QixHQUFHLGFBQWEsMEJBQTBCLG9CQUFvQixtQkFBbUIsNkJBQTZCLGNBQWMsR0FBRyxVQUFVLHdCQUF3QixpQkFBaUIseUJBQXlCLDhDQUE4QyxHQUFHLGdCQUFnQix3Q0FBd0MscUNBQXFDLDhCQUE4Qix3QkFBd0Isc0JBQXNCLEdBQUcsYUFBYSxxQkFBcUIsc0NBQXNDLDJDQUEyQyx1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLFdBQVcsNkRBQTZELGdDQUFnQyxtQkFBbUIsNkJBQTZCLG1CQUFtQixrQkFBa0IscUNBQXFDLHlCQUF5QiwwQ0FBMEMseUJBQXlCLEdBQUcsYUFBYSw2REFBNkQsd0JBQXdCLDZCQUE2QixtQkFBbUIsa0JBQWtCLHFDQUFxQyx5QkFBeUIsMENBQTBDLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxhQUFhLDJCQUEyQix3QkFBd0IsaUJBQWlCLHlCQUF5QixHQUFHLFVBQVUsb0JBQW9CLHFGQUFxRix5Q0FBeUMsa0NBQWtDLEdBQUcsV0FBVyxzQkFBc0IseUJBQXlCLGdCQUFnQixHQUFHLFdBQVcseUJBQXlCLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLEdBQUcsVUFBVSw2QkFBNkIseUJBQXlCLEdBQUcsWUFBWSxpQkFBaUIscUJBQXFCLHlCQUF5QixHQUFHLGdCQUFnQixrREFBa0Qsb0JBQW9CLG9DQUFvQywwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQiw0QkFBNEIsR0FBRyxNQUFNLDRCQUE0QixHQUFHLFNBQVMsMEJBQTBCLDhCQUE4QixzQkFBc0IsbUJBQW1CLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8saUJBQWlCLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxpQkFBaUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxxQ0FBcUMsZ0JBQWdCLGlCQUFpQiw4SEFBOEgsU0FBUyxtQkFBbUIsb0JBQW9CLHdDQUF3QyxvQkFBb0IsOEJBQThCLGtEQUFrRCw2QkFBNkIsR0FBRyxlQUFlLGdEQUFnRCxtQkFBbUIsMENBQTBDLG9CQUFvQixzREFBc0QsR0FBRyxZQUFZLCtDQUErQyxzQkFBc0IsVUFBVSxrQkFBa0IsaUJBQWlCLHFCQUFxQixnREFBZ0QseUJBQXlCLDRCQUE0QixHQUFHLGFBQWEsMEJBQTBCLG9CQUFvQixtQkFBbUIsNkJBQTZCLGNBQWMsR0FBRyxVQUFVLHdCQUF3QixpQkFBaUIseUJBQXlCLDhDQUE4QyxHQUFHLGdCQUFnQix3Q0FBd0MscUNBQXFDLDhCQUE4Qix3QkFBd0Isc0JBQXNCLEdBQUcsYUFBYSxxQkFBcUIsc0NBQXNDLDJDQUEyQyx1QkFBdUIsb0JBQW9CLHVCQUF1QixHQUFHLFdBQVcsNkRBQTZELGdDQUFnQyxtQkFBbUIsNkJBQTZCLG1CQUFtQixrQkFBa0IscUNBQXFDLHlCQUF5QiwwQ0FBMEMseUJBQXlCLEdBQUcsYUFBYSw2REFBNkQsd0JBQXdCLDZCQUE2QixtQkFBbUIsa0JBQWtCLHFDQUFxQyx5QkFBeUIsMENBQTBDLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxhQUFhLDJCQUEyQix3QkFBd0IsaUJBQWlCLHlCQUF5QixHQUFHLFVBQVUsb0JBQW9CLHFGQUFxRix5Q0FBeUMsa0NBQWtDLEdBQUcsV0FBVyxzQkFBc0IseUJBQXlCLGdCQUFnQixHQUFHLFdBQVcseUJBQXlCLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLEdBQUcsVUFBVSw2QkFBNkIseUJBQXlCLEdBQUcsWUFBWSxpQkFBaUIscUJBQXFCLHlCQUF5QixHQUFHLGdCQUFnQixrREFBa0Qsb0JBQW9CLG9DQUFvQywwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQiw0QkFBNEIsR0FBRyxNQUFNLDRCQUE0QixHQUFHLFNBQVMsMEJBQTBCLDhCQUE4QixzQkFBc0IsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ2hyUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZjJCOztBQUVaO0FBQ2YsSUFBSSxrREFBSzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnVDO0FBQ0M7QUFDYjs7QUFFM0I7QUFDQTs7QUFFQSxjQUFjLGdEQUFJO0FBQ2xCOzs7QUFHTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ1AsRUFBRSxtREFBSzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsZ0RBQUs7QUFDZjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDb0I7QUFDaUI7QUFDQTtBQUNIO0FBQ0Y7QUFDRDs7QUFFL0I7QUFDQTs7QUFFQSxjQUFjLDhDQUFJO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsNENBQUc7QUFDNUM7O0FBRWU7QUFDZjtBQUNBOztBQUVBOztBQUVBLCtDQUFPOztBQUVQLDJDQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJDQUFJO0FBQ2hCO0FBQ0EsVUFBVTtBQUNWLFlBQVksaURBQVc7QUFDdkI7QUFDQSxTQUFTO0FBQ1QsWUFBWSxvREFBTztBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEaUM7QUFDbEM7QUFDc0M7QUFDQTtBQUNBO0FBQ0U7QUFDVTs7QUFFbEQ7Ozs7QUFJZTtBQUNmLElBQUksbURBQVk7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJDQUFRO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7O0FBRXhCO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7O0FBRXhCO0FBQ0E7QUFDQSxpQkFBaUIsNENBQVM7O0FBRTFCO0FBQ0E7QUFDQSxzQkFBc0IsaURBQWM7O0FBRXBDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9qYXBhbmljby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcXG59XFxuXFxuYm9keXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE1LCA5Nyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCAyMSwgMjEsIDAuNDg2KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogY2xhbXAoODAwcHgsIDEwODBweCwgMTIwMHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZW0gbWlubWF4KDgwMHB4LCBhdXRvKSA1ZW07XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAwLjUyMSk7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuLmljb257XFxuICAgIGhlaWdodDogNWVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxufVxcblxcbiNidXR0b25ze1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcbi5idXR0b257XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlcjpzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTQxKTtcXG59XFxuLmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDAsIDExNSk7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAxMTUpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgcGFkZGluZzogM2VtIDA7XFxuICAgIGNvbG9yOiByZ2JhKDIwLCA3NiwgMjMwLCAwLjQ5Myk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luOiAwIDFlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmJsb2Nrey8qUmVwbGFjZWFibGUgZm9yICd3ZWxjb21lJyBvbiBob21lIHRhYiovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHNzZ3JpZC1hdXRvLWNvbHVtbnM6IGF1dG87XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxZW0sIGF1dG8sIDEwMCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE1NiwgNDQpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi53ZWxjb21ley8qUmVwbGFjZWFibGUgZm9yICd3ZWxjb21lJyBvbiBob21lIHRhYiovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDFlbSwgYXV0bywgMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTU2LCA0NCk7XFxufVxcbi53ZWxjb21lPmgye1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmJsb2NrPmltZ3tcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHNwYWRkaW5nOiAxZW0gMWVtO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxufVxcblxcbi5tZW51e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ25hbWUgcHJpY2UgaW1nJ1xcbiAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gaW1nJztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbn1cXG4ubWVudT5oMntcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1lbnU+aDN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5tZW51PnB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLm1lbnU+aW1ne1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBncmlkLWFyZWE6IGltZztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jZm9vdGVye1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuNDkzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5he1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5naXR7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHdpZHRoOiAyLjVlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseURBQTJDO0lBQzNDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEM7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLHlEQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLE9BQU87QUFDWDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBLE9BQU8sd0NBQXdDO0lBQzNDLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0Qjs7QUFFQSxTQUFTLHdDQUF3QztJQUM3QyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7aUNBRTZCO0lBQzdCLGtDQUFrQztJQUNsQywyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOzs7O0FBSUE7O0lBRUkseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGh0bWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXFxufVxcblxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNSwgOTcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2JhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgMjEsIDIxLCAwLjQ4Nik7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGNsYW1wKDgwMHB4LCAxMDgwcHgsIDEyMDBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNWVtIG1pbm1heCg4MDBweCwgYXV0bykgNWVtO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMC41MjEpO1xcbiAgICBkaXNwbGF5OiBmbGV4XFxufVxcblxcbi5pY29ue1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9qYXBhbmljby5qcGcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG59XFxuXFxuI2J1dHRvbnN7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuLmJ1dHRvbntcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgYm9yZGVyOnNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41NDEpO1xcbn1cXG4uYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMCwgMTE1KTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDExNSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBwYWRkaW5nOiAzZW0gMDtcXG4gICAgY29sb3I6IHJnYmEoMjAsIDc2LCAyMzAsIDAuNDkzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW46IDAgMWVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uYmxvY2t7LypSZXBsYWNlYWJsZSBmb3IgJ3dlbGNvbWUnIG9uIGhvbWUgdGFiKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgc3NncmlkLWF1dG8tY29sdW1uczogYXV0bztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDFlbSwgYXV0bywgMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTU2LCA0NCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLndlbGNvbWV7LypSZXBsYWNlYWJsZSBmb3IgJ3dlbGNvbWUnIG9uIGhvbWUgdGFiKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2xhbXAoMWVtLCBhdXRvLCAxMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU2LCAxNTYsIDQ0KTtcXG59XFxuLndlbGNvbWU+aDJ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYmxvY2s+aW1ne1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgc3BhZGRpbmc6IDFlbSAxZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG59XFxuXFxuLm1lbnV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnbmFtZSBwcmljZSBpbWcnXFxuICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBpbWcnO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxufVxcbi5tZW51Pmgye1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWVudT5oM3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1lbnU+cHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ubWVudT5pbWd7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdyaWQtYXJlYTogaW1nO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiNmb290ZXJ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC40OTMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmdpdHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgd2lkdGg6IDIuNWVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNsZWFyIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKXtcbiAgICBjbGVhcigpXG5cbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGltZylcblxuICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmxvY2sgY29udGFjdCcpXG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJ1xuICAgIHRleHQuaW5uZXJIVE1MID0gYDxhZGRyZXNzPiBcbiAgICBXcml0dGVuIGJ5IDxhIGhyZWY9XCJtYWlsdG86RW1haWxARXhhbXBsZS5jb21cIj5KYWNrR3JheW1lcjwvYT48YnI+IFxuICAgIEUtbWFpbCB1cyBhdDogPGEgaHJlZj1cIm1haWx0bzpFbWFpbEBFeGFtcGxlLmNvbVwiPkVtYWlsQEV4YW1wbGUuY29tPC9hPjxicj4gXG4gICAgVmlzaXQgdGhpcyBwcm9qZWN0IGF0OiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0phY2tHcmF5bWVyL1Jlc3RhdXJhbnQtUGFnZS1UT1BcIj5HaXRIdWIgcmVwbzwvYT48YnI+IFxuICAgIExvY2F0aW9uOiBJbiB0aGUgaGVhcnQgb2YgPGEgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvdzVYY2h5VDZaSEx1VzVkVkFcIj5adXJpY2gsIDwvYT4gU3dpdHplcmxhbmQ8YnI+IFxuICAgIFxuICAgIDwvYWRkcmVzcz5gXG5cbn0iLCJpbXBvcnQgaWNvbiBmcm9tICcuL2ltZy9yZXN0YXVyYW50LnBuZydcbmltcG9ydCByYW1lbiBmcm9tICcuL2ltZy9yYW1lbi1tYWluLnBuZydcbmltcG9ydCBjbGVhciBmcm9tICcuL2luZGV4J1xuXG5mdW5jdGlvbiBpY29uQ2hhbmdlKCkge1xuICBsZXQgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbH49J2ljb24nXVwiKVxuXG4gIGxpbmsuaHJlZiA9IGljb25cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc29sZS5sb2coYEkgZ2V0IGNhbGxlZCBmcm9tIGhvbWUuanNgKVxufVxuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZSgpe1xuICBjbGVhcigpO1xuXG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgYmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpXG4gIGJsb2NrLmFwcGVuZENoaWxkKHRleHQpXG4gIGJsb2NrLmFwcGVuZENoaWxkKGltZylcblxuICBibG9jay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Jsb2NrIHdlbGNvbWUnKVxuICBpbWcuc3JjPXJhbWVuXG4gIGltZy5hbHQ9J1JhbWVuIHBpY3R1cmUnXG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSEnXG4gIHRleHQuaW5uZXJIVE1MID0gJ0NvbWUgdG8gdGhlIFJhbWVuIERpbmluZyBhbmQgeW91IHdpbGwgZXhwZXJpZW5jZSBBc2lhbiBhbmQgSmFwYW5lc2UgZm9vZCBvbiBhIHdob2xlIG5ldyBsZXZlbC4gVHJlYXQgeW91cnNlbGYgd2l0aCB0aGlzIGRlbGljaW91cyBmb29kIGFuZCBzYXZvdXIgYSBwaWVjZSBvZiBBc2lhIGluIHRoZSBtaWRkbGUgb2YgeW91ciBjaXR5LiA8YnI+IE91ciBtZWFscyBhcmUgcHJlcGFyZWQgYnkgdHJhZGl0aW9uYWwgY2hlZnMgd2l0aCBtb3JlIHRoYW4gMTAgeWVhcnMgb2YgZXhwZXJpZW5jZSwgdGhhdCBhZnRlciBtYXN0ZXJpbmcgdGhlaXIgc2tpbGxzIGRlY2lkZWQgdG8gdmVudHVyZSBvbiB0aGUgd29ybGQgdG8gc2hvdyB0aGVpciBjdWx0dXJlIGFuZCBmbGF2b3Vycy4gPGJyPiBIb21lIG1hZGUsIGRhaWx5LidcblxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge3ByaW50TWUsIGhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ltZy9qYXBhbmljby5qcGcnXG5pbXBvcnQgZ2l0IGZyb20gJy4vaW1nL2dpdGh1Yi5wbmcnXG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSAnLi9tZW51J1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0J1xuXG5mdW5jdGlvbiBpY29uQ2hhbmdlKCkge1xuICBsZXQgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbH49J2ljb24nXVwiKVxuXG4gIGxpbmsuaHJlZiA9IGljb25cbn1cbmljb25DaGFuZ2UoKVxuXG5mdW5jdGlvbiBmb290ZXJMaW5rKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpdCcpLnNyYyA9IGdpdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG59XG5cbmZvb3RlckxpbmsoKVxuXG5wcmludE1lKCk7XG5cbmhvbWUoKVxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJylcblxuLy9UYWIgZnVuY3Rpb25hbGl0eSAqKiBlYWNoIHRhYiBjbGVhcnMgdGhlIGNvbnRlbnQgYW5kIGNyZWF0ZXMgaXRzIG93blxubWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPSAncmVkJztcbiAgICAgICAgfSk7ICAgIFxuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj0gJ2JsdWUnO1xuICAgICAgICAvL3dyaXRlIHRhYiBmdW5jdGlvblxuICAgICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBcIkhvbWVcIil7XG4gICAgICAgICAgICBob21lKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQudGV4dENvbnRlbnQpXG4gICAgICAgIH0gZWxzZSBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBcIk1lbnVcIil7XG4gICAgICAgICAgICBtZW51Q29udGVudCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LnRleHRDb250ZW50KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnRhY3QoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC50ZXh0Q29udGVudClcbiAgICAgICAgfVxuICAgIH0pXG59KTtcbiIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSBcIi4vaW5kZXhcIlxuLy9JbWFnZXMgaW1wb3J0XG5pbXBvcnQgcmFtZW5pbWcgZnJvbSBcIi4vaW1nL3JhbWVuLnBuZ1wiXG5pbXBvcnQgZ3lvemFpbWcgZnJvbSAnLi9pbWcvZ3lvemEuanBnJ1xuaW1wb3J0IHN1c2hpaW1nIGZyb20gJy4vaW1nL3N1c2hpLmpwZydcbmltcG9ydCB3YWthbWVpbWcgZnJvbSAnLi9pbWcvd2FrYW1lLmpwZydcbmltcG9ydCBva29ub21peWFraWltZyBmcm9tICcuL2ltZy9va29ub21peWFraS5qcGcnXG5cbmxldCBpdGVtcyA9IFtdXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XG4gICAgY2xlYXJDb250ZW50KClcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgLy9DcmVhdGUgTWVudSBpdGVtc1xuICAgIG1lYWxzKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHByaWNlKVxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQpXG5cbiAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdibG9jayBtZW51JylcbiAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJylcblxuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZVxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpY2VcbiAgICAgICAgaW1nLnNyYyA9IGVsZW1lbnQuaW1nXG4gICAgfSlcblxuICAgIFxuXG59XG5cblxuXG5mdW5jdGlvbiBtZWFscygpe1xuXG4gICAgbGV0IGZvb2RzID0gW107XG4gICAgZnVuY3Rpb24gcGxhdGUobmFtZSwgcHJpY2Upe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZSBcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJydcbiAgICAgICAgbGV0IGltZyA9ICcnXG4gICAgICAgIGZvb2RzLnB1c2godGhpcylcbiAgICB9XG4gICAgXG4gICAgbGV0IHJhbWVuID0gbmV3IHBsYXRlKCdUb25rb3RzdSBSYW1lbicsICcxNiw5MCcpXG4gICAgcmFtZW4uZGVzY3JpcHRpb24gPSAnVG9ua290c3UgaXMgYSB1bmlxdWUgc3R5bGUgb2YgcmFtZW4gY29uc2lzdGluZyBvZiBhbiBleHRyZW1lbHkgcmljaCwgZmF0dHkgcG9yayBicm90aCwgZnJlc2ggbm9vZGxlcywgc29mdC15b2xrIGVnZ3MsIGFuZCB0ZW5kZXIgcG9yayBiZWxseSB0aGF0IG1lbHRzIGluIHRoZSBtb3V0aC4gSXQgaXMgc28gcG9wdWxhciBhbmQgc3BlY2lhbCB0aGF0IGl0IGNvdWxkIGJlIGEgZGlzaCBvZiBpdHMgb3duLCBub3QganVzdCBhIHJhbWVuIHN0eWxlLiBUaGUgcmljaCBicm90aCBpcyBkZXZlbG9wZWQgYnkgY29va2luZyB0aGUgcG9yayBib25lcyBmb3IgYSB2ZXJ5IGxvbmcgdGltZSwgdW50aWwgdGhlIGNvbGxhZ2VuIGFuZCBmYXQgZGlzc29sdmUsIHJlc3VsdGluZyBpbiBhIHVuaXF1ZSwgY3JlYW15IHRleHR1cmUgb2YgdGhlIGRpc2guJztcbiAgICByYW1lbi5pbWcgPSByYW1lbmltZ1xuICAgIGNvbnNvbGUubG9nKHJhbWVuKVxuXG4gICAgbGV0IGd5b3phID0gbmV3IHBsYXRlKCdHeW96YSAoNHBjcyknLCAnNiw5MCcpXG4gICAgZ3lvemEuZGVzY3JpcHRpb24gPSAnR3lvemEgYXJlIHNtYWxsIEphcGFuZXNlIGR1bXBsaW5ncyB3aGljaCBoYXZlIGJlZW4gZmlsbGVkIHdpdGggaW5ncmVkaWVudHMgbGlrZSBtaW5jZWQgcG9yayBhbmQgdmVnZXRhYmxlcywgYm95bGVkIGluIHJpY2ggdmVnZXRhYmxlIGJyb3RoLidcbiAgICBneW96YS5pbWcgPSBneW96YWltZ1xuXG4gICAgbGV0IHN1c2hpID0gbmV3IHBsYXRlKCdTdXNoaSBzb3J0ICgyNHBjcyknLCcxOSw5MCcpXG4gICAgc3VzaGkuZGVzY3JpcHRpb24gPSAnMjQgcGllY2VzIG9mIHN1c2hpIG9mIDYgZGlmZmVyZW50IHR5cGVzLCBjb21iaW5pbmcgdHVuYSwgc2FsbW9uLCBhdm9jYWRvLCBjcmVhbSBjaGVhc2UsIGN1Y3VtYmVyLiBJbmNsdWRlcyBzb3lzYXVjZSwgd2FzYWJpIGFuZCBnaW5nZXInXG4gICAgc3VzaGkuaW1nID0gc3VzaGlpbWdcblxuICAgIGxldCB3YWthbWUgPSBuZXcgcGxhdGUoJ1dha2FtZSBzYWxhZCcsICc1LDkwJylcbiAgICB3YWthbWUuZGVzY3JpcHRpb24gPSAnU2Vhd2VlZCBzYWxhZCB3aXRoIHNlc2FtZSBzZWVkcywgcGVyZmVjdCBmb3Igc3RhcnRlcnMgYW5kIHRvIGNvbWJpbmUgd2l0aCBzdXNoaSc7XG4gICAgd2FrYW1lLmltZyA9IHdha2FtZWltZ1xuXG4gICAgbGV0IG9rb25vbWl5YWtpID0gbmV3IHBsYXRlKCdPa29ub21peWFraSB3aXRoIGJhY29uJywgJzgsNTAnKVxuICAgIG9rb25vbWl5YWtpLmRlc2NyaXB0aW9uID0gJ09rb25vbWl5YWtpIGlzIGEgcG9wdWxhciBwYW4tZnJpZWQgZGlzaCB0aGF0IGNvbnNpc3RzIG9mIGJhdHRlciBhbmQgY2FiYmFnZS4gVG9wcGVkIHdpdGggc3BlY2lhbCBPa29ub21peWFraSBzYXVjZSwgSmFwYW5lc2UgbWF5b25haXNlLCBzZXNhbWUgc2VlZHMsIGJhY29uLCBzcHJpbmcgb25pb25zIGFuZCBLYXRzdW9idXNoaSAoYm9uaXRvIGZsYWtlcyknO1xuICAgIG9rb25vbWl5YWtpLmltZyA9IG9rb25vbWl5YWtpaW1nXG5cbiAgICByZXR1cm4gZm9vZHNcbn1cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==