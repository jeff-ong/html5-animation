/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/global.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/styles/global.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*{cursor:none}html{overflow:hidden}body{margin:0;background:#1e2859}#root{position:fixed;top:0;left:0;width:100%;height:100%}#stars{position:fixed;top:0;z-index:-1;width:100%;height:100%;left:0;pointer-events:none}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var R = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) {
      ReflectApply(listeners[i], this, args);
    }
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)));
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)));
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)));
  }
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)));
  }

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) {
    list[index] = list[index + 1];
  }list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/SpaceGame.js":
/*!**************************!*\
  !*** ./src/SpaceGame.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Setting = __webpack_require__(/*! ./components/Setting */ "./src/components/Setting.js");

var _Setting2 = _interopRequireDefault(_Setting);

var _Player = __webpack_require__(/*! ./components/Player */ "./src/components/Player.js");

var _Player2 = _interopRequireDefault(_Player);

var _Enemy = __webpack_require__(/*! ./components/Enemy */ "./src/components/Enemy.js");

var _Enemy2 = _interopRequireDefault(_Enemy);

var _Bullet = __webpack_require__(/*! ./components/Bullet */ "./src/components/Bullet.js");

var _StarsBackground = __webpack_require__(/*! ./components/StarsBackground */ "./src/components/StarsBackground.js");

var _StarsBackground2 = _interopRequireDefault(_StarsBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpaceGame = function SpaceGame() {
  var sg = (0, _Setting2.default)();
  (0, _Bullet.Bullet)(sg);
  var StarsBackgroundObj = (0, _StarsBackground2.default)(sg);
  sg.Frame = function () {
    sg.ctx.clearRect(0, 0, sg.canvas.width, sg.canvas.height);
    (0, _Player2.default)(sg);
    (0, _Enemy2.default)(sg);
    if (sg.spacePressed) {
      (0, _Bullet.FireBulletAtEnemy)(sg);
    }
    if (sg.downPressed && sg.player.y < sg.canvas.height - sg.planeHeight) {
      sg.player.y += sg.player.speed;
      (0, _StarsBackground.setDirections)('downPressed', true);
    }
    if (sg.upPressed && sg.player.y > 0) {
      sg.player.y -= sg.player.speed;
      (0, _StarsBackground.setDirections)('upPressed', true);
    }
    if (sg.rightPressed && sg.player.x < sg.canvas.width - sg.planeWidth) {
      sg.player.x += sg.player.speed;
      (0, _StarsBackground.setDirections)('leftPressed', true);
    }
    if (sg.leftPressed && sg.player.x > 0) {
      sg.player.x -= sg.player.speed;
      (0, _StarsBackground.setDirections)('rightPressed', true);
    }
  };

  sg.startTheGame = function () {
    var updatePerFrame = function updatePerFrame() {
      sg.Frame();
      StarsBackgroundObj.animate();
      window.requestAnimationFrame(updatePerFrame);
    };
    updatePerFrame();
  };

  return sg;
};

exports.default = SpaceGame;

/***/ }),

/***/ "./src/components/Bullet.js":
/*!**********************************!*\
  !*** ./src/components/Bullet.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Bullet = exports.Bullet = function Bullet(sg) {
  var bullet = {};
  bullet.x = sg.player.x;
  bullet.y = sg.player.y;
  bullet.initialY = sg.player.y;
  bullet.speed = 5;
  bullet.spacePressed = true;
  bullet.shoot = function () {
    sg.spacePressed = true;
    sg.bulletObjArr.push(bullet);
  };
  sg.shootBullet = function () {
    Bullet(sg).shoot();
  };
  return bullet;
};

var FireBulletAtEnemy = exports.FireBulletAtEnemy = function FireBulletAtEnemy(sg) {
  if (sg.bulletObjArr.length <= 0) {
    sg.spacePressed = false;
    return;
  }
  sg.bulletObjArr.map(function (bullet) {
    sg.ctx.beginPath();
    sg.ctx.arc(bullet.x + sg.planeWidth / 2, bullet.y, 5, 0, 2 * Math.PI);
    sg.ctx.fillStyle = "#fff";
    sg.ctx.fill();
    sg.ctx.closePath();
    if (bullet.y > -1) {
      bullet.y -= bullet.speed;
    } else {
      sg.bulletObjArr = sg.bulletObjArr.filter(function (item) {
        return item !== bullet;
      });
    }

    var _loop = function _loop(i) {
      if (sg.enemyObjArr[i] && sg.enemyObjArr[i].y + 15 >= bullet.y && Math.abs(sg.enemyObjArr[i].x - bullet.x && Math.abs(sg.enemyObjArr[i].x - bullet.x) <= 25)) {
        if (bullet.initialY <= sg.enemyObjArr[i].y) {
          return "continue";
        }
        sg.bulletObjArr = sg.bulletObjArr.filter(function (item) {
          return item !== bullet;
        });
        sg.enemyObjArr = sg.enemyObjArr.filter(function (enemy) {
          return enemy !== sg.enemyObjArr[i];
        });
      }
    };

    for (var i = 0; i <= sg.enemyObjArr.length; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }
  });
};

/***/ }),

/***/ "./src/components/Controls.js":
/*!************************************!*\
  !*** ./src/components/Controls.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StarsBackground = __webpack_require__(/*! ./StarsBackground */ "./src/components/StarsBackground.js");

var Controls = function Controls(sg) {
  var controls = {};
  var Directions = {
    Up: ["Up", "ArrowUp"],
    Down: ["Down", "ArrowDown"],
    Left: ["Left", "ArrowLeft"],
    Right: ["Right", "ArrowRight"]
  };
  controls.keyDownHandler = function (e) {
    if (e.keyCode == 32) {
      sg.shootBullet();
    }
    if (Directions.Up.includes(e.key)) {
      sg.upPressed = true;
    }
    if (Directions.Down.includes(e.key)) {
      sg.downPressed = true;
    }
    if (Directions.Right.includes(e.key)) {
      sg.rightPressed = true;
    }
    if (Directions.Left.includes(e.key)) {
      sg.leftPressed = true;
    }
  };

  controls.keyUpHandler = function (e) {
    (0, _StarsBackground.setDirections)('upPressed', false);
    (0, _StarsBackground.setDirections)('downPressed', false);
    (0, _StarsBackground.setDirections)('leftPressed', false);
    (0, _StarsBackground.setDirections)('rightPressed', false);
    if (Directions.Up.includes(e.key)) {
      sg.upPressed = false;
    }
    if (Directions.Down.includes(e.key)) {
      sg.downPressed = false;
    }
    if (Directions.Right.includes(e.key)) {
      sg.rightPressed = false;
    }
    if (Directions.Left.includes(e.key)) {
      sg.leftPressed = false;
    }
  };

  sg.player.x = (window.innerWidth - sg.planeWidth) / 2;
  sg.player.y = (window.innerHeight - sg.planeHeight) / 2;
  sg.windowProperties.width = window.innerWidth;
  sg.windowProperties.height = window.innerHeight;
  document.getElementById("root").height = sg.windowProperties.height;
  document.getElementById("root").width = sg.windowProperties.width;
  document.addEventListener("keydown", controls.keyDownHandler);
  document.addEventListener("keyup", controls.keyUpHandler);

  if (window.innerWidth >= 480) {
    document.addEventListener("mousemove", function (e) {
      sg.directions.x = sg.player.x = e.clientX;
      sg.directions.y = sg.player.y = e.clientY;
    }, false);
  } else {
    document.addEventListener("touchmove", function (e) {
      sg.directions.x = sg.player.x = e.touches[0].pageX;
      sg.directions.y = sg.player.y = e.touches[0].pageY;
      sg.shootBullet();
    }, false);
  }

  document.addEventListener("click", function () {
    sg.shootBullet();
  }, false);

  document.addEventListener("touchstart", function () {
    sg.shootBullet();
  }, false);

  return controls;
};

exports.default = Controls;

/***/ }),

/***/ "./src/components/Enemy.js":
/*!*********************************!*\
  !*** ./src/components/Enemy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Enemy = function Enemy(sg) {
  var enemy = {};
  enemy.x = _helper2.default.getRandomNumberWithMinAddMax(20, sg.windowProperties.width);
  enemy.y = _helper2.default.getRandomNumberWithMinAddMax(-300, -200);
  enemy.randomize = _helper2.default.getRandomNumberWithMinAddMax(1000, 10000);
  enemy.delay = 10;
  enemy.speed = 20;
  if (sg.intervalToDeployEnemy > 0) {
    sg.intervalToDeployEnemy--;
  } else {
    sg.enemyObjArr.push(enemy);
    sg.intervalToDeployEnemy = _helper2.default.getRandomNumberWithMinAddMax(100, 300);
  }
  sg.enemyObjArr.map(function (item) {
    sg.ctx.beginPath();
    sg.ctx.rect(item.x, item.y, 40, 20);
    sg.ctx.fillStyle = "red";
    sg.ctx.fill();
    sg.ctx.closePath();
    if (item.speed > 0) {
      item.y += item.speed;
      item.speed -= 0.5;
    }
  });
  return enemy;
};

exports.default = Enemy;

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Player = function Player(sg) {
  sg.ctx.beginPath();
  sg.ctx.rect(sg.player.x, sg.player.y, sg.planeWidth, sg.planeHeight);
  sg.ctx.fillStyle = "#fff";
  sg.ctx.fill();
  sg.ctx.closePath();
};

exports.default = Player;

/***/ }),

/***/ "./src/components/Setting.js":
/*!***********************************!*\
  !*** ./src/components/Setting.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Controls = __webpack_require__(/*! ./Controls */ "./src/components/Controls.js");

var _Controls2 = _interopRequireDefault(_Controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Setting = function Setting() {
  var setting = {};
  setting.intervalToDeployEnemy = 100;
  setting.bulletObjArr = [];
  setting.enemyObjArr = [];
  setting.canvas = document.getElementById("root");
  setting.ctx = setting.canvas.getContext("2d");
  setting.x = setting.canvas.width / 2;
  setting.y = setting.canvas.height - 30;
  setting.planeHeight = 30;
  setting.planeWidth = 30;
  setting.rightPressed = false;
  setting.leftPressed = false;
  setting.upPressed = false;
  setting.downPressed = false;
  setting.spacePressed = false;
  setting.shootBullet = null;
  setting.directions = {
    x: 0,
    y: 0,
    oldx: 0,
    oldy: 0
  };
  setting.player = {
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    speed: 5
  };
  setting.windowProperties = {
    width: 0,
    height: 0
  };

  (0, _Controls2.default)(setting);

  return setting;
};

exports.default = Setting;

/***/ }),

/***/ "./src/components/StarsBackground.js":
/*!*******************************************!*\
  !*** ./src/components/StarsBackground.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var directions = {
    leftPressed: false,
    rightPressed: false,
    upPressed: false,
    downPressed: false
};

var setDirections = exports.setDirections = function setDirections(direction, boolean) {
    directions[direction] = boolean;
};

var Universe = function Universe(sg) {
    var universe = {};
    universe.background = document.getElementById("stars");
    if (!universe.background) {
        return "No element with id stars was found";
    }
    universe.sg = sg;
    universe.ctx = universe.background.getContext("2d");
    universe.width = window.innerWidth;
    universe.height = window.innerHeight;
    universe.stars = [];
    universe.threshold = 50;

    universe.background.width = universe.width;
    universe.background.height = universe.height;

    return universe;
};

var Star = function Star(universe) {
    var star = {};

    star.reset = function () {
        star.size = Math.random() * 2;
        star.speed = Math.random() * 0.8;
        star.staticSpeed = Math.random() * 0.2;
        star.x = Math.random() * universe.width;
        star.y = Math.random() * universe.height;
    };
    star.reset();

    star.update = function () {
        if (directions.rightPressed) {
            star.x += star.speed;
        }

        if (directions.leftPressed) {
            star.x -= star.speed;
        }

        if (directions.downPressed) {
            star.y -= star.speed;
        } else {
            star.y += star.staticSpeed;
        }

        if (directions.upPressed) {
            star.y += star.speed;
        }

        if (star.x > universe.width || star.x < 0 || star.y > universe.height || star.y < 0) {
            star.reset();
        } else {
            universe.ctx.fillRect(star.x, star.y, star.size, star.size);
        }
        return;
    };

    return star;
};

var ShootingStar = function ShootingStar(universe) {
    var shootingStar = {};
    shootingStar.reset = function () {
        shootingStar.x = Math.random() * universe.width;
        shootingStar.y = 0;
        shootingStar.len = Math.random() * 90 + 10;
        shootingStar.speed = Math.random() * 10 + 6;
        shootingStar.size = Math.random() * 1 + 0.1;
        shootingStar.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        shootingStar.active = false;
    };
    shootingStar.reset();

    shootingStar.update = function () {
        if (shootingStar.active) {
            shootingStar.x -= shootingStar.speed;
            shootingStar.y += shootingStar.speed;
            if (shootingStar.x < 0 || shootingStar.y >= universe.height) {
                shootingStar.reset();
            } else {
                universe.ctx.lineWidth = shootingStar.size;
                universe.ctx.beginPath();
                universe.ctx.moveTo(shootingStar.x, shootingStar.y);
                universe.ctx.lineTo(shootingStar.x + shootingStar.len, shootingStar.y - shootingStar.len);
                universe.ctx.stroke();
            }
        } else {
            if (shootingStar.waitTime < new Date().getTime()) {
                shootingStar.active = true;
            }
        }
    };
    return shootingStar;
};

var StarsBackground = function StarsBackground(sg) {
    var universe = Universe(sg);
    var updateStarsDirectionsOnMouseMove = function updateStarsDirectionsOnMouseMove() {
        if (Math.abs(sg.directions.x - sg.directions.oldx) > universe.threshold || Math.abs(sg.directions.y - sg.directions.oldy) > universe.threshold) {
            sg.directions.oldx = sg.directions.x;
            sg.directions.oldy = sg.directions.y;

            if (sg.directions.x - sg.directions.oldx > 0) {
                directions.rightPressed = true;
            }

            if (sg.directions.x - sg.directions.oldx < 0) {
                directions.leftPressed = true;
            }

            if (sg.directions.y - sg.directions.oldy > 0) {
                directions.downPressed = true;
            }

            if (sg.directions.y - sg.directions.oldy < 0) {
                directions.upPressed = true;
            }
        }
    };

    for (var i = 0; i <= universe.height; i++) {
        universe.stars.push(Star(universe));
    }
    universe.stars.push(ShootingStar(universe));

    universe.animate = function () {
        universe.ctx.fillStyle = "#1e2859";
        universe.ctx.fillRect(0, 0, universe.width, universe.height);
        universe.ctx.fillStyle = "#fff";
        universe.ctx.strokeStyle = "#fff";

        updateStarsDirectionsOnMouseMove();

        universe.stars.map(function (item) {
            item.update();
        });
    };

    if (universe.background) {
        universe.animate();
        window.addEventListener('resize', function () {
            return StarsBackground();
        });
    }

    return universe;
};

exports.default = StarsBackground;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./styles/global */ "./src/styles/global.scss");

var _SpaceGame = __webpack_require__(/*! ./SpaceGame */ "./src/SpaceGame.js");

var _SpaceGame2 = _interopRequireDefault(_SpaceGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _SpaceGame2.default)().startTheGame();

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/global.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/util/helper.js":
/*!****************************!*\
  !*** ./src/util/helper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventEmitter = undefined;

var _events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventEmitter = exports.eventEmitter = new _events2.default.EventEmitter();

var Helper = {
  getRandomNumber: function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  getRandomNumberWithMinAddMax: function getRandomNumberWithMinAddMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

exports.default = Helper;

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map