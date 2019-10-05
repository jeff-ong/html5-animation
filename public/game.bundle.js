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

  sg.Frame = function () {
    sg.ctx.clearRect(0, 0, sg.canvas.width, sg.canvas.height);
    (0, _Player2.default)(sg);
    (0, _Enemy2.default)(sg);
    if (sg.spacePressed) {
      (0, _Bullet.FireBulletAtEnemy)(sg);
    }
    if (sg.downPressed && sg.player.y < sg.canvas.height - sg.planeHeight) {
      sg.player.y += sg.player.speed;
    }
    if (sg.upPressed && sg.player.y > 0) {
      sg.player.y -= sg.player.speed;
    }
    if (sg.rightPressed && sg.player.x < sg.canvas.width - sg.planeWidth) {
      sg.player.x += sg.player.speed;
    }
    if (sg.leftPressed && sg.player.x > 0) {
      sg.player.x -= sg.player.speed;
    }
  };

  sg.startTheGame = function () {
    var updatePerFrame = function updatePerFrame() {
      sg.Frame();
      window.requestAnimationFrame(updatePerFrame);
    };
    (0, _StarsBackground2.default)();
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
var Controls = function Controls(sg) {
  var controls = {};

  controls.keyDownHandler = function (e) {
    if (e.keyCode == 32) {
      sg.shootBullet();
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
      sg.upPressed = true;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      sg.downPressed = true;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
      sg.rightPressed = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      sg.leftPressed = true;
    }
  };

  controls.keyUpHandler = function (e) {
    if (e.key == "Up" || e.key == "ArrowUp") {
      sg.upPressed = false;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      sg.downPressed = false;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
      sg.rightPressed = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
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

  if (window.innerWidth >= 1024) {
    document.addEventListener("mousemove", function (e) {
      sg.player.x = e.clientX;
      sg.player.y = e.clientY;
    }, false);
  } else {
    document.addEventListener("touchmove", function (e) {
      sg.player.x = e.touches[0].pageX;
      sg.player.y = e.touches[0].pageY;
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

var _Bullet = __webpack_require__(/*! ./Bullet */ "./src/components/Bullet.js");

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

  (0, _Bullet.Bullet)(setting);

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
var Universe = function Universe() {
    var universe = {};
    universe.background = document.getElementById("stars");
    if (!universe.background) {
        return "No element with id stars was found";
    }
    universe.ctx = universe.background.getContext("2d");
    universe.width = window.innerWidth;
    universe.height = window.innerHeight;
    universe.entities = [];
    universe.enttLen = 0;

    universe.background.width = universe.width;
    universe.background.height = universe.height;

    return universe;
};

var Stars = function Stars(universe, starsPos) {
    var stars = {};
    stars.size = Math.random() * 2;
    stars.speed = Math.random() * 0.3;
    stars.x = starsPos.x;
    stars.y = starsPos.y;

    stars.reset = function () {
        stars.size = Math.random() * 2;
        stars.speed = Math.random() * 0.3;
        stars.x = window.innerWidth;
        stars.y = Math.random() * height;
    };

    stars.update = function () {
        stars.y += stars.speed;
        if (stars.y < 0) {
            stars.reset();
        } else {
            universe.ctx.fillRect(stars.x, stars.y, stars.size, stars.size);
        }
    };

    return stars;
};

var ShootingStar = function ShootingStar(universe) {
    var shootingStar = {};
    shootingStar.reset = function () {
        shootingStar.x = Math.random() * width;
        shootingStar.y = 0;
        shootingStar.len = Math.random() * 80 + 10;
        shootingStar.speed = Math.random() * 10 + 6;
        shootingStar.size = Math.random() * 1 + 0.1;
        shootingStar.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        shootingStar.active = false;
    };

    shootingStar.update = function () {
        if (shootingStar.active) {
            shootingStar.x -= shootingStar.speed;
            shootingStar.y += shootingStar.speed;
            if (shootingStar.x < 0 || shootingStar.y >= height) {
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

var StarsBackground = function StarsBackground() {
    var universe = Universe();
    for (var i = 0; i <= universe.height; i++) {
        universe.entities.push(Stars(universe, {
            x: Math.random() * universe.width,
            y: Math.random() * universe.height
        }));
    }
    universe.entities.push(ShootingStar(universe));

    universe.animate = function () {
        universe.ctx.fillStyle = "#1e2859";
        universe.ctx.fillRect(0, 0, universe.width, universe.height);
        universe.ctx.fillStyle = "#fff";
        universe.ctx.strokeStyle = "#fff";
        universe.entLen = universe.entities.length;
        while (universe.entLen--) {
            universe.entities[universe.entLen].update();
        }
        window.requestAnimationFrame(universe.animate);
    };

    if (universe.background) {
        universe.animate();
        window.addEventListener('resize', function () {
            return init();
        });
    }
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