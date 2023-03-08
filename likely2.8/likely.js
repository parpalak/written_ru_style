/*!
 * Likely 2.8.0 by Nikolay Rys (linkedin.com/in/nikolay-rys), Ilya Birman (ilyabirman.net), and contributors.
 * Special thanks to Viktor Karpov (twitter.com/vitkarpov), Ivan Akulov (iamakulov.com), Evgeny Steblinsky (volter9.github.io), and Artem Sapegin (sapegin.me).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["likely"] = factory();
	else
		root["likely"] = factory();
})(typeof self !== 'undefined' ? self : this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/button.js":
/*!**************************!*\
  !*** ./source/button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./source/dom.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./source/utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./source/config.js");
/* harmony import */ var _connectButtonToService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connectButtonToService */ "./source/connectButtonToService.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./source/services/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var htmlSpan = '<span class="{className}">{content}</span>';

/**
 * Separate social link widget
 * @param {Node} widget
 * @param {Likely} likely
 * @param {Object} options
 */
var LikelyButton = /*#__PURE__*/function () {
  function LikelyButton(widget, likely, options) {
    _classCallCheck(this, LikelyButton);
    this.widget = widget;
    this.likely = likely;
    this.options = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.mergeToNew)(options);
    this.detectService();
    if (this.isConnected()) {
      this.detectParams();
    }
  }

  /**
   * Whether the button was successfully connected to a service
   * @returns {Boolean}
   */
  _createClass(LikelyButton, [{
    key: "isConnected",
    value: function isConnected() {
      return this.options.service !== undefined;
    }

    /**
     * If purpose of the buttond
     * @returns {Boolean}
     */
  }, {
    key: "isUnrecognized",
    value: function isUnrecognized() {
      return !this.isConnected() && !this.options.foreign;
    }

    /**
     * Make button ready for usage
     */
  }, {
    key: "prepare",
    value: function prepare() {
      if (this.isConnected()) {
        this.initHtml();
        this.registerAsCounted();
      }
    }

    /**
     * Update the counter
     * @param {Object} options
     */
  }, {
    key: "update",
    value: function update(options) {
      var className = ".".concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix, "counter");
      var counters = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.findAll)(className, this.widget);
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.extendWith)(this.options, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.mergeToNew)({
        forceUpdate: false
      }, options));
      counters.forEach(function (node) {
        node.parentNode.removeChild(node);
      });
      this.registerAsCounted();
    }

    /**
     * Attach a service based on given button classes
     */
  }, {
    key: "detectService",
    value: function detectService() {
      var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toArray)(this.widget.classList);
      // Array.prototype.filter()[0] instead of Array.prototype.find() for IE support
      var serviceName = classes.filter(function (className) {
        return Object.prototype.hasOwnProperty.call(_services__WEBPACK_IMPORTED_MODULE_4__["default"], className);
      })[0];
      if (serviceName) {
        this.options.service = _services__WEBPACK_IMPORTED_MODULE_4__["default"][serviceName];
      } else if (classes.includes('likely__widget')) {
        this.options.foreign = true;
      }
    }

    /**
     * Merge params from data-* attributes into options hash map
     */
  }, {
    key: "detectParams",
    value: function detectParams() {
      var options = this.options;
      this.data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDataset)(this.widget);
      if (this.data.counter) {
        options.staticCounter = this.data.counter;
      }
      options.url = this.data.url === undefined ? options.url : this.data.url;
      options.title = this.data.title === undefined ? options.title : this.data.title;
    }

    /**
     * Initiate button's HTML
     */
  }, {
    key: "initHtml",
    value: function initHtml() {
      var options = this.options;
      var widget = this.widget;
      var text = widget.innerHTML;
      widget.addEventListener('click', this.click.bind(this));
      widget.classList.remove(this.options.service.name);
      widget.className += "".concat(this.className('widget'));
      var button = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateStr)(htmlSpan, {
        className: this.className('button'),
        content: text
      });
      var icon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateStr)(htmlSpan, {
        className: this.className('icon'),
        content: (0,_dom__WEBPACK_IMPORTED_MODULE_0__.wrapSVG)(options.service.svgIconPath)
      });
      widget.innerHTML = icon + button;
    }

    /**
     * Perform fetching and displaying counter
     */
  }, {
    key: "registerAsCounted",
    value: function registerAsCounted() {
      var options = this.options;
      if (options.counters && options.service.counterUrl) {
        if (options.staticCounter) {
          this.setDisplayedCounter(options.staticCounter);
        } else {
          (0,_connectButtonToService__WEBPACK_IMPORTED_MODULE_3__["default"])(this.setDisplayedCounter.bind(this), options);
        }
      }
    }

    /**
     * Combine a BEM-compliant classname
     * @param {String} className
     * @returns {String}
     */
  }, {
    key: "className",
    value: function className(_className) {
      var fullClass = _config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix + _className;
      return "".concat(fullClass, " ").concat(fullClass, "_").concat(this.options.service.name);
    }

    /**
     * Set visible button counter to a value
     * @param {String} counterString
     */
  }, {
    key: "setDisplayedCounter",
    value: function setDisplayedCounter(counterString) {
      var counterInt = parseInt(counterString, 10) || 0;
      var counterElement = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.find)(".".concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].name, "__counter"), this.widget);
      if (counterElement) {
        counterElement.parentNode.removeChild(counterElement);
      }
      var options = {
        className: this.className('counter'),
        content: counterInt
      };
      if (!counterInt && !this.options.zeroes) {
        options.className += " ".concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix, "counter_empty");
        options.content = '';
      }
      this.widget.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createNode)((0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateStr)(htmlSpan, options)));
      this.likely.finalize();
    }

    /**
     * Click event listener
     * @returns {Boolean}
     */
  }, {
    key: "click",
    value: function click() {
      var options = this.options;
      if (options.service.clickCallback.call(this)) {
        var urlWithBaseParams = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.interpolateUrl)(options.service.popupUrl, {
          url: options.url,
          title: options.title,
          content: options.content
        });
        var completeUrl = this.addAdditionalParamsToUrl(urlWithBaseParams);
        if (options.service.openPopup === false) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createTempLink)(completeUrl);
          return false;
        }
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.openPopup)(completeUrl, _config__WEBPACK_IMPORTED_MODULE_2__["default"].prefix + this.options.service.name, options.service.popupWidth, options.service.popupHeight);
      }
      return false;
    }

    /**
     * Append service data to URL
     * @param {String} url
     * @returns {String}
     */
  }, {
    key: "addAdditionalParamsToUrl",
    value: function addAdditionalParamsToUrl(url) {
      var _this = this;
      var paramsArray = [];
      this.options.service.knownParams.forEach(function (item) {
        if (item in _this.data) {
          paramsArray.push("".concat(encodeURIComponent(item), "=").concat(encodeURIComponent(_this.data[item])));
        }
      });
      var parameters = paramsArray.join('&');
      var delimiter = url.indexOf('?') === -1 ? '?' : '&';
      return parameters === '' ? url : url + delimiter + parameters;
    }
  }]);
  return LikelyButton;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikelyButton);

/***/ }),

/***/ "./source/config.js":
/*!**************************!*\
  !*** ./source/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Configuration
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'likely',
  prefix: 'likely__'
});

/***/ }),

/***/ "./source/connectButtonToService.js":
/*!******************************************!*\
  !*** ./source/connectButtonToService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./source/utils.js");


/**
 * Class for preventing duplicated requests from the similar buttons, which encapsulates:
 *  1. Callbacks for all buttons that share the same value.
 *  2. Prepared service counter URL.
 *  3. Value, returned from this URL
 * @param {String} counterUrl
 * @param {String} pageUrl
 */
function UpdateBroadcaster(counterUrl, pageUrl) {
  this.url = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.interpolateUrl)(counterUrl, {
    url: pageUrl
  });
  this.setters = [];
  this.value = undefined;
}

/**
 * Connects new related button with its callback.
 * @param {Function} buttonSetter
 */
UpdateBroadcaster.prototype.register = function (buttonSetter) {
  this.setters.push(buttonSetter);
  if (this.value) {
    buttonSetter(this.value);
  }
};

/**
 * Distributes obtained value to all buttons that share it
 * @param {Integer} value
 */
UpdateBroadcaster.prototype.trigger = function (value) {
  this.value = value;
  this.setters.forEach(function (buttonSetter) {
    buttonSetter(value);
  });
};

/**
 * Find or create an appropriate instance of UpdateBroadcaster
 * @param {Function} buttonSetter
 * @param {Object} options
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (buttonSetter, options) {
  var broadcaster = options.service.broadcastersByUrl[options.url];
  if (!broadcaster) {
    broadcaster = new UpdateBroadcaster(options.service.counterUrl, options.url);
    options.service.broadcastersByUrl[options.url] = broadcaster;
    options.service.fetch(broadcaster);
  }
  broadcaster.register(buttonSetter);
});

/***/ }),

/***/ "./source/dom.js":
/*!***********************!*\
  !*** ./source/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "createTempLink": () => (/* binding */ createTempLink),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findAll": () => (/* binding */ findAll),
/* harmony export */   "global": () => (/* binding */ global),
/* harmony export */   "loadJSONP": () => (/* binding */ loadJSONP),
/* harmony export */   "openPopup": () => (/* binding */ openPopup),
/* harmony export */   "wrapSVG": () => (/* binding */ wrapSVG)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./source/utils.js");

var fakeWindow = {};
var global = _utils__WEBPACK_IMPORTED_MODULE_0__.isBrowserEnv ? window : fakeWindow;
var div = _utils__WEBPACK_IMPORTED_MODULE_0__.isBrowserEnv ? document.createElement('div') : {};

/**
 * Wrap SVG coords from data object into SVG tag
 * @param {String} coords
 * @returns {String}
 */
var wrapSVG = function wrapSVG(coords) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' + 'viewBox="0 0 16 16"><path d="M' + coords + 'z"/></svg>';
};

/**
 * Create node from HTML
 * @param {String} html
 * @returns {Node}
 */
var createNode = function createNode(html) {
  div.innerHTML = html;
  return div.children[0];
};

/**
 * Load JSONP script. It gets executed after the main one is finished.
 * @param {String} url
 */
var loadJSONP = function loadJSONP(url) {
  var script = document.createElement('script');
  var head = document.head;
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
  head.removeChild(script);
};

/**
 * Find first node by selector
 * @param {String} selector
 * @param {Node} [node]
 * @returns {Node}
 */
var find = function find(selector, node) {
  return (node || document).querySelector(selector);
};

/**
 * Find all nodes by selector
 * @param {String} selector
 * @param {Node} [node]
 * @returns {Node[]}
 */
var findAll = function findAll(selector, node) {
  return Array.prototype.slice.call((node || document).querySelectorAll(selector));
};
/**
 * Open the popup
 * @param {String} url
 * @param {String} winId
 * @param {Number} width,
 * @param {Number} height
 * @returns {Object|null}
 */
var openPopup = function openPopup(url, winId, width, height) {
  var left = Math.round(screen.width / 2 - width / 2);
  var top = 0;
  if (screen.height > height) {
    top = Math.round(screen.height / 3 - height / 2);
  }
  var options = 'left=' + left + ',top=' + top + ',width=' + width + ',height=' + height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';
  var win = window.open(url, winId, options);
  if (!win) {
    location.href = url;
    return null;
  }
  win.focus();
  return win;
};
/**
 * Creates a temporary anchor element, click on it and destroys it.
 * Used for buttons that do not have sharing popups
 * @param {String} url
 */
var createTempLink = function createTempLink(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  anchor.style = 'display: none';
  document.body.appendChild(anchor);
  setTimeout(function () {
    anchor.click();
    document.body.removeChild(anchor);
  });
};

/***/ }),

/***/ "./source/history.js":
/*!***************************!*\
  !*** ./source/history.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var callbacks = [];
var handleUrlChange = function handleUrlChange() {
  callbacks.forEach(function (callback) {
    callback();
  });
};
var setupHistoryWatcher = function setupHistoryWatcher() {
  var pushState = window.history.pushState;
  window.history.pushState = function () {
    // browser should change the url first
    setTimeout(handleUrlChange, 0);
    return pushState.apply(window.history, arguments);
  };
  var replaceState = window.history.replaceState;
  window.history.replaceState = function () {
    // browser should change the url first
    setTimeout(handleUrlChange, 0);
    return replaceState.apply(window.history, arguments);
  };
  window.addEventListener('popstate', handleUrlChange);
};
var isWatchingHistory = false;

/**
 * Monitoring tool for catching url changes for re-initiating widged with a new url
 * @param {Function} callback
 */
var history = {
  onUrlChange: function onUrlChange(callback) {
    if (!isWatchingHistory) {
      setupHistoryWatcher();
      isWatchingHistory = true;
    }
    callbacks.push(callback);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./source/likely-commonjs.js":
/*!***********************************!*\
  !*** ./source/likely-commonjs.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// This module is an entry point for CommonJS modules.
// It’s written with CommonJS imports and exports to make possible doing `module.exports = likely`.
// This is required so that users work with `require('likely')`, not `require('likely').default`
var _require = __webpack_require__(/*! ./utils */ "./source/utils.js"),
  getBools = _require.getBools,
  getDefaultUrl = _require.getDefaultUrl,
  mergeToNew = _require.mergeToNew;
var Likely = (__webpack_require__(/*! ./widget */ "./source/widget.js")["default"]);
var config = (__webpack_require__(/*! ./config */ "./source/config.js")["default"]);
var _require2 = __webpack_require__(/*! ./dom */ "./source/dom.js"),
  findAll = _require2.findAll;
var history = (__webpack_require__(/*! ./history */ "./source/history.js")["default"]);
var services = (__webpack_require__(/*! ./services */ "./source/services/index.js")["default"]);

/**
 * @param {Node} node
 * @param {Object} options
 * @private
 * @returns {Likely}
 */
var initWidget = function initWidget(node, options) {
  var fullOptions = options || {};
  var defaults = {
    counters: true,
    timeout: 1e3,
    zeroes: false,
    title: document.title,
    url: getDefaultUrl()
  };
  var realOptions = mergeToNew(defaults, fullOptions, getBools(node));
  var widget = node[config.name];
  if (widget) {
    widget.update(realOptions);
  } else {
    // Attaching widget to the node object for future re-initializations
    node[config.name] = new Likely(node, realOptions);
  }
  return widget;
};
var likely = {
  /**
   * Initiate Likely buttons on load
   * @param {Node|Array<Node>|Object} [nodes] a particular node or an array of widgets,
   *                                     if not specified,
   *                                     tries to init all the widgets
   * @param {Object} [options] additional options for each widget
   */
  initiate: function initiate(nodes, options) {
    var realNodes;
    var realOptions;
    if (Array.isArray(nodes)) {
      // An array of nodes was passed
      realNodes = nodes;
      realOptions = options;
    } else if (nodes instanceof Node) {
      // A single node was passed
      realNodes = [nodes];
      realOptions = options;
    } else {
      // Options were passed, or the function was called without arguments
      realNodes = findAll(".".concat(config.name));
      realOptions = nodes;
    }
    this.maintainStoredData(realOptions);
    initWidgets();
    history.onUrlChange(initWidgets);
    function initWidgets() {
      realNodes.forEach(function (node) {
        initWidget(node, realOptions);
      });
    }
  },
  /**
   * Reset stored broadcasters if forceUpdate is requested
   * @param {Object} realOptions
   */
  maintainStoredData: function maintainStoredData(realOptions) {
    if (realOptions && realOptions.forceUpdate) {
      // Object.values() is not supported by IE
      Object.keys(services).forEach(function (serviceName) {
        services[serviceName].resetBroadcasters();
      });
    }
  }
};
module.exports = likely;

/***/ }),

/***/ "./source/likely.js":
/*!**************************!*\
  !*** ./source/likely.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// This module is an entry point when `likely.js` is just dropped into the browser.
// It’s written with CommonJS imports and exports to make possible doing `module.exports = likely`.
// This is required so that users work with `window.likely`, not `window.likely.default`

__webpack_require__(/*! ./index.styl */ "./source/index.styl");
var likely = __webpack_require__(/*! ./likely-commonjs.js */ "./source/likely-commonjs.js");
window.addEventListener('load', function () {
  likely.initiate();
});
module.exports = likely;

/***/ }),

/***/ "./source/service.js":
/*!***************************!*\
  !*** ./source/service.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./source/dom.js");

function fetchXHR(updateBroadcaster) {
  var _this = this;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var convertedNumber = typeof _this.convertNumber === 'function' ? _this.convertNumber(xhr.responseText) : xhr.responseText;
      updateBroadcaster.trigger(convertedNumber);
    }
  };
  xhr.open('GET', updateBroadcaster.url, true);
  xhr.send();
}
function resetBroadcasters() {
  this.broadcastersByUrl = {};
}

/**
 * Set default values on service option object
 * @param {Object} options
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {
  // __likelyFetchMock is used for UI testing and is set on window
  // because this function is executed right when Likely is loaded.
  // There’s currently no way to do `likely.__likelyFetchMock = ...`
  // before running this method.
  options.fetch = _dom__WEBPACK_IMPORTED_MODULE_0__.global.__likelyFetchMock || options.fetch || fetchXHR;
  options.clickCallback = options.clickCallback || function () {
    return true;
  };
  options.knownParams = options.knownParams || [];
  options.resetBroadcasters = resetBroadcasters;
  options.resetBroadcasters();
});

/***/ }),

/***/ "./source/services/facebook.js":
/*!*************************************!*\
  !*** ./source/services/facebook.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Facebook service provider
 * Share doc: https://developers.facebook.com/docs/workplace/sharing/share-dialog/
 * Counter doc: https://developers.facebook.com/docs/graph-api/reference/v8.0/engagement
 *
 * For hackers: the access token below is public, heavily restricted and doesn't allow to access anything of value
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  counterUrl: 'https://graph.facebook.com/?id={url}&access_token=1729830587180291|102e6d79cda2fa63b65c99c039eed12a&fields=og_object%7Bengagement%7Bcount%7D%7D',
  convertNumber: function convertNumber(data) {
    var graphQlData = JSON.parse(data).og_object;
    return graphQlData ? graphQlData.engagement.count : 0;
  },
  popupWidth: 555,
  popupHeight: 555,
  popupUrl: 'https://www.facebook.com/sharer.php?u={url}',
  knownParams: ['url', 'quote', 'hashtag', 'counter'],
  svgIconPath: '16.000,8.049 C16.000,3.629 12.418,0.047 8.000,0.047 C3.582,0.047 -0.000,3.629 -0.000,8.049 C-0.000,12.043 2.925,15.353 6.750,15.953 L6.750,10.362 L4.719,10.362 L4.719,8.049 L6.750,8.049 L6.750,6.286 C6.750,4.280 7.944,3.173 9.772,3.173 C10.647,3.173 11.563,3.329 11.563,3.329 L11.563,5.298 L10.554,5.298 C9.560,5.298 9.250,5.915 9.250,6.548 L9.250,8.049 L11.469,8.049 L11.114,10.362 L9.250,10.362 L9.250,15.953 C13.075,15.353 16.000,12.043 16.000,8.049'
});

/***/ }),

/***/ "./source/services/index.js":
/*!**********************************!*\
  !*** ./source/services/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./source/service.js");
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facebook */ "./source/services/facebook.js");
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./twitter */ "./source/services/twitter.js");
/* harmony import */ var _vkontakte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vkontakte */ "./source/services/vkontakte.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Social network services aggregated together
 */











var services = {
  facebook: _facebook__WEBPACK_IMPORTED_MODULE_1__["default"],
  twitter: _twitter__WEBPACK_IMPORTED_MODULE_7__["default"],
  vkontakte: _vkontakte__WEBPACK_IMPORTED_MODULE_9__["default"],
};
Object.entries(services).forEach(function (entry) {
  var _entry = _slicedToArray(entry, 2),
    serviceName = _entry[0],
    serviceObj = _entry[1];
  (0,_service__WEBPACK_IMPORTED_MODULE_0__["default"])(serviceObj);
  serviceObj.name = serviceName;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services);

/***/ }),

/***/ "./source/services/twitter.js":
/*!************************************!*\
  !*** ./source/services/twitter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Twitter service provider
 * Doc: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1
 * Also mentions "related" param, but it doesn't seem to do any anything in 2020.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
  popupWidth: 600,
  popupHeight: 450,
  clickCallback: function clickCallback() {
    if (!/[.?:\-–—]\s*$/.test(this.options.title)) {
      this.options.title += ':';
    }
    return true;
  },
  knownParams: ['url', 'title', 'via', 'hashtags'],
  svgIconPath: '15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058'
});

/***/ }),

/***/ "./source/services/vkontakte.js":
/*!**************************************!*\
  !*** ./source/services/vkontakte.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./source/utils.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./source/dom.js");
/**
 * VK service provider
 * Doc: https://vk.com/dev/widget_share
 * (Switch to Russian language, the English docs are incomplete)
 * VK own implementation: https://vk.com/js/api/share.js
 */



var vkontakte = {
  popupWidth: 650,
  popupHeight: 570,
  counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
  fetch: function fetch(broadcaster) {
    var index = Object.keys(this.broadcastersByUrl).length - 1;
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadJSONP)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.interpolateUrl)(broadcaster.url, {
      index: index
    }));
  },
  popupUrl: 'https://vk.com/share.php?url={url}&title={title}',
  knownParams: ['url', 'title', 'image', 'comment', 'counter'],
  svgIconPath: '8.71453 12.9837C3.24794 12.9837 0.129919 9.23611 0 3H2.73828C2.82823 7.57714 4.84693 9.51592 6.44591 9.91565V3H9.02439V6.94751C10.6034 6.77762 12.2622 4.97876 12.8218 3H15.4003C14.9705 5.43847 13.1717 7.23734 11.8925 7.97687C13.1717 8.5765 15.2205 10.1455 16 12.9837H13.1617C12.5521 11.0849 11.0331 9.61584 9.02439 9.41597V12.9837H8.71453'
};

// Script, returned by VK, calls this method with two arguments
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobalCallback)('VK.Share.count', function (index, count) {
  var broadcasters = vkontakte.broadcastersByUrl;
  broadcasters[Object.keys(broadcasters)[index]].trigger(count);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vkontakte);

/***/ }),

/***/ "./source/utils.js":
/*!*************************!*\
  !*** ./source/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extendWith": () => (/* binding */ extendWith),
/* harmony export */   "getBools": () => (/* binding */ getBools),
/* harmony export */   "getDataset": () => (/* binding */ getDataset),
/* harmony export */   "getDefaultUrl": () => (/* binding */ getDefaultUrl),
/* harmony export */   "interpolateStr": () => (/* binding */ interpolateStr),
/* harmony export */   "interpolateUrl": () => (/* binding */ interpolateUrl),
/* harmony export */   "isBrowserEnv": () => (/* binding */ isBrowserEnv),
/* harmony export */   "mergeToNew": () => (/* binding */ mergeToNew),
/* harmony export */   "registerGlobalCallback": () => (/* binding */ registerGlobalCallback),
/* harmony export */   "renameKey": () => (/* binding */ renameKey),
/* harmony export */   "toArray": () => (/* binding */ toArray)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var bool = {
  yes: true,
  no: false
};

/**
 * Polyfill Object.entries() for IE support
 * @param {Object} obj
 * @returns {Array} Keys and values presented as array
 */
if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i);
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }
    return resArray;
  };
}

/**
 * Convert array-like object to array (for example DOMTokenList)
 * @param {Object} arrayLike
 * @returns {Array}
 */
var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

/**
 * Merge given dictionaries (objects) into one object.
 * Iterates across the arguments, the last one gets priority.
 * @returns {Object}
 */
var mergeToNew = function mergeToNew() {
  var newObject = {};
  var args = Array.prototype.slice.call(arguments); // eslint-disable-line no-undef

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg) {
      for (var key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key)) {
          newObject[key] = arg[key];
        }
      }
    }
  }
  return newObject;
};

/**
 * Extend one (target) object by other (subject)
 * @param {Object} target
 * @param {Object} subject
 * @returns {Object} Extended target
 */
var extendWith = function extendWith(target, subject) {
  for (var key in subject) {
    if (Object.prototype.hasOwnProperty.call(subject, key)) {
      target[key] = subject[key];
    }
  }
  return target;
};

/**
 * Return node.dataset or plain object for IE10 without setters
 * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
 *
 * @param {Node} node
 * @returns {Object}
 */
var getDataset = function getDataset(node) {
  if (_typeof(node.dataset) === 'object') {
    return node.dataset;
  }
  var i;
  var dataset = {};
  var attributes = node.attributes;
  var attribute;
  var attributeName;
  var toUpperCase = function toUpperCase(n0) {
    return n0.charAt(1).toUpperCase();
  };
  for (i = attributes.length - 1; i >= 0; i--) {
    attribute = attributes[i];
    if (attribute && attribute.name && /^data-\w[\w-]*$/.test(attribute.name)) {
      attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
      dataset[attributeName] = attribute.value;
    }
  }
  return dataset;
};

/**
 * Convert "yes" and "no" to true and false.
 * @param {Node} node
 * @returns {Object}
 */
var getBools = function getBools(node) {
  var result = {};
  var data = getDataset(node);
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      var value = data[key];
      result[key] = value in bool ? bool[value] : value;
    }
  }
  return result;
};

/**
 * Map object keys in string to its values
 * @param {String} text
 * @param {Object} data
 * @returns {String}
 */
var interpolateStr = function interpolateStr(text, data) {
  return text ? text.replace(/\{([^}]+)}/g, function (value, key) {
    return key in data ? data[key] : value;
  }) : '';
};

/**
 * Map object keys in URL to its values
 * @param {String} text
 * @param {Object} data
 * @returns {String}
 */
var interpolateUrl = function interpolateUrl(text, data) {
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      data[key] = encodeURIComponent(data[key]);
    }
  }
  return interpolateStr(text, data);
};
/**
 * Set value in object using dot-notation
 * @param {String} key
 * @param {Object} value
 */
var registerGlobalCallback = function registerGlobalCallback(key, value) {
  var frags = key.split('.');
  var last = null;
  var object = __webpack_require__.g;
  frags.forEach(function (key, index) {
    if (typeof object[key] === 'undefined') {
      object[key] = {};
    }
    if (index !== frags.length - 1) {
      object = object[key]; // eslint-disable-line no-param-reassign
    }

    last = key;
  });
  object[last] = value;
};

/**
 * Returns default url for likely.
 * It could be href from <link rel='canonical'>
 * if presents in the document, or the current url of the page otherwise
 * @returns {String}
 */
var getDefaultUrl = function getDefaultUrl() {
  var link = document.querySelector('link[rel="canonical"]');
  if (link) {
    return link.href;
  }
  return window.location.href.replace(window.location.hash, '');
};

/**
 * Is code run in browser or on server.
 */
var isBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined' && document.createElement;

/**
 * Renames a key in an object, using ES6 syntax
 * @param {Object} obj
 * @param {String} oldKey
 * @param {String} newKey
 */
var renameKey = function renameKey(obj, oldKey, newKey) {
  if (Object.prototype.hasOwnProperty.call(obj, oldKey)) {
    delete Object.assign(obj, _defineProperty({}, newKey, obj[oldKey]))[oldKey];
  }
};

/***/ }),

/***/ "./source/widget.js":
/*!**************************!*\
  !*** ./source/widget.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./source/button.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./source/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./source/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * Main widget view
 * @param {Node} container
 * @param {Object} options
 */
var Likely = /*#__PURE__*/function () {
  function Likely(container, options) {
    _classCallCheck(this, Likely);
    this.container = container;
    this.options = options;
    this.countersLeft = 0;
    this.buttons = [];
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toArray)(this.container.children).forEach(this.addButton.bind(this));
    this.appear();
    if (this.options.counters) {
      this.readyDelay = setTimeout(this.ready.bind(this), this.options.timeout);
    } else {
      this.ready();
    }
    this.materializeButtons();
  }

  /**
   * Add a button
   * @param {Node} node
   */
  _createClass(Likely, [{
    key: "addButton",
    value: function addButton(node) {
      var button = new _button__WEBPACK_IMPORTED_MODULE_0__["default"](node, this, this.options);
      if (button.isConnected()) {
        this.buttons.push(button);
        if (button.options.service.counterUrl) {
          this.countersLeft++;
        }
      } else if (button.isUnrecognized()) {
        console.warn('A button without a valid service detected, please check button classes.');
      }
    }

    /**
     * Show all the buttons
     */
  }, {
    key: "materializeButtons",
    value: function materializeButtons() {
      this.buttons.forEach(function (button) {
        return button.prepare();
      });
    }

    /**
     * Refresh all the buttons
     * @param {Object} options
     */
  }, {
    key: "update",
    value: function update(options) {
      if (options.forceUpdate || options.url && options.url !== this.options.url) {
        this.countersLeft = this.buttons.length;
        this.buttons.forEach(function (button) {
          button.update(options);
        });
      }
    }

    /**
     * Register the button as ready
     */
  }, {
    key: "finalize",
    value: function finalize() {
      this.countersLeft--;
      if (this.countersLeft === 0) {
        clearTimeout(this.readyDelay);
        this.ready();
      }
    }

    /**
     * @deprecated Will be deleted in version 3.0, and joined with likely_ready
     * Show the buttons with smooth animation
     */
  }, {
    key: "appear",
    value: function appear() {
      this.container.classList.add("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].name, "_visible"));
    }

    /**
     * Display ready status
     */
  }, {
    key: "ready",
    value: function ready() {
      this.container.classList.add("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].name, "_ready"));
    }
  }]);
  return Likely;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Likely);

/***/ }),

/***/ "./source/index.styl":
/*!***************************!*\
  !*** ./source/index.styl ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./source/likely.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=likely.js.map