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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SpaceGame = __webpack_require__(/*! ./SpaceGame */ "./src/SpaceGame.js");

var _SpaceGame2 = _interopRequireDefault(_SpaceGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _SpaceGame2.default)().startTheGame();

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