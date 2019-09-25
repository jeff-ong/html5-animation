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

/***/ "./src/components/bullet.js":
/*!**********************************!*\
  !*** ./src/components/bullet.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = function Bullet(x, y, initialY) {
  _classCallCheck(this, Bullet);

  this.x = x, this.y = y, this.initialY = initialY;
  this.speed = 5;
};

exports.default = Bullet;

/***/ }),

/***/ "./src/components/enemy.js":
/*!*********************************!*\
  !*** ./src/components/enemy.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function Enemy(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var randomize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;

  _classCallCheck(this, Enemy);

  this.x = x, this.y = y, this.delay = delay, this.speed = 20, this.randomize = randomize;
};

exports.default = Enemy;

/***/ }),

/***/ "./src/components/stars.js":
/*!*********************************!*\
  !*** ./src/components/stars.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helper = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict";

_helper2.default.canvasAnimationFallback();

var background = document.getElementById("stars");

if (background) {
  var bgCtx = background.getContext("2d"),
      width = window.innerWidth,
      height = window.innerHeight,
      entities = [],
      entLen = 0;

  background.width = width;
  background.height = height;
}

// stars
function Star(options) {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.3;
  this.x = options.x;
  this.y = options.y;
}

Star.prototype.reset = function () {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.3;
  this.x = width;
  this.y = Math.random() * height;
};

Star.prototype.update = function () {
  this.y += this.speed;
  if (this.y < 0) {
    this.reset();
  } else {
    bgCtx.fillRect(this.x, this.y, this.size, this.size);
  }
};

function ShootingStar() {
  this.reset();
}

ShootingStar.prototype.reset = function () {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = Math.random() * 80 + 10;
  this.speed = Math.random() * 10 + 6;
  this.size = Math.random() * 1 + 0.1;
  this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
  this.active = false;
};

ShootingStar.prototype.update = function () {
  if (this.active) {
    this.x -= this.speed;
    this.y += this.speed;
    if (this.x < 0 || this.y >= height) {
      this.reset();
    } else {
      bgCtx.lineWidth = this.size;
      bgCtx.beginPath();
      bgCtx.moveTo(this.x, this.y);
      bgCtx.lineTo(this.x + this.len, this.y - this.len);
      bgCtx.stroke();
    }
  } else {
    if (this.waitTime < new Date().getTime()) {
      this.active = true;
    }
  }
};

// init the stars
function star_init() {
  width = window.innerWidth, height = window.innerHeight;
  background.width = width;
  background.height = height;
  entities = [];
  for (var i = 0; i <= height; i++) {
    entities.push(new Star({
      x: Math.random() * width,
      y: Math.random() * height
    }));
  }
  entities.push(new ShootingStar());
  entities.push(new ShootingStar());
}

//animate background
function animate() {
  bgCtx.fillStyle = "#1e2859";
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = "#fff";
  bgCtx.strokeStyle = "#fff";

  entLen = entities.length;

  while (entLen--) {
    entities[entLen].update();
  }

  requestAnimationFrame(animate);
}

if (background) {
  animate();
}

window.addEventListener("resize", function () {
  star_init();
});

star_init();
// export default star_init;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helper = __webpack_require__(/*! ./util/helper */ "./src/util/helper.js");

var _helper2 = _interopRequireDefault(_helper);

var _stars = __webpack_require__(/*! ./components/stars */ "./src/components/stars.js");

var _enemy = __webpack_require__(/*! ./components/enemy */ "./src/components/enemy.js");

var _enemy2 = _interopRequireDefault(_enemy);

var _bullet = __webpack_require__(/*! ./components/bullet */ "./src/components/bullet.js");

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper2.default.canvasAnimationFallback();

var windowProperties = {
  width: 0,
  height: 0
};

var player = {
  x: 0,
  y: 0,
  width: 500,
  height: 500,
  speed: 5
};

//when to deploy the first enemy
var randomly_deploy_enemy = 100;
var bullet_obj_arr = [];
var enemy_obj_arr = [];

var canvas = document.getElementById("root");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var planeHeight = 30;
var planeWidth = 30;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

player.x = (window.innerWidth - planeWidth) / 2;
player.y = (window.innerHeight - planeHeight) / 2;
windowProperties.width = window.innerWidth;
windowProperties.height = window.innerHeight;

document.getElementById("root").height = windowProperties.height;
document.getElementById("root").width = windowProperties.width;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
if (window.innerWidth >= 1024) {
  document.addEventListener("mousemove", function (e) {
    player.x = e.clientX;
    player.y = e.clientY;
  }, false);
} else {
  document.addEventListener("touchmove", function (e) {
    player.x = e.touches[0].pageX;
    player.y = e.touches[0].pageY;
    shootBullet();
  }, false);
}

document.addEventListener("click", function () {
  shootBullet();
}, false);

document.addEventListener("touchstart", function () {
  shootBullet();
}, false);

// if (typeof Gyroscope === "function") {
//   const gyroscope = new Gyroscope({ frequency: 60 });

//   gyroscope.addEventListener("reading", e => {
//     console.log("Angular velocity along the Z-axis " + gyroscope.z);

//     player.x = gyroscope.x;
//     player.y = gyroscope.y;
//   });
//   gyroscope.start();
// }

function enemy() {
  var new_enemy = new _enemy2.default(x, -20);
  new_enemy.x = _helper2.default.getRandomNumberWithMinAddMax(20, windowProperties.width);
  new_enemy.y = _helper2.default.getRandomNumberWithMinAddMax(-300, -200);
  new_enemy.randomize = _helper2.default.getRandomNumberWithMinAddMax(1000, 10000);
  if (randomly_deploy_enemy > 0) {
    randomly_deploy_enemy--;
  } else {
    enemy_obj_arr.push(new_enemy);
    randomly_deploy_enemy = _helper2.default.getRandomNumberWithMinAddMax(100, 300);
  }
  enemy_obj_arr.map(function (item) {
    ctx.beginPath();
    ctx.rect(item.x, item.y, 40, 20);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    if (item.speed > 0) {
      item.y += item.speed;
      item.speed -= 0.5;
    }
  });
}

function bullet() {
  if (bullet_obj_arr.length <= 0) {
    spacePressed = false;
  }
  bullet_obj_arr.map(function (bullet) {
    ctx.beginPath();
    ctx.arc(bullet.x + planeWidth / 2, bullet.y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    if (bullet.y > -1) {
      bullet.y -= bullet.speed;
    } else {
      bullet_obj_arr = bullet_obj_arr.filter(function (item) {
        return item !== bullet;
      });
    }

    var _loop = function _loop(i) {
      if (enemy_obj_arr[i] && enemy_obj_arr[i].y + 15 >= bullet.y && Math.abs(enemy_obj_arr[i].x - bullet.x && Math.abs(enemy_obj_arr[i].x - bullet.x) <= 25)) {
        if (bullet.initialY <= enemy_obj_arr[i].y) {
          return "continue";
        }
        bullet_obj_arr = bullet_obj_arr.filter(function (item) {
          return item !== bullet;
        });
        enemy_obj_arr = enemy_obj_arr.filter(function (enemy) {
          return enemy !== enemy_obj_arr[i];
        });
      }
    };

    for (var i = 0; i <= enemy_obj_arr.length; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }
  });
}

function shootBullet() {
  spacePressed = true;
  var bullet_inst = new _bullet2.default(player.x, player.y, player.y);
  bullet_obj_arr.push(bullet_inst);
}

function keyDownHandler(e) {
  if (e.keyCode == 32) {
    shootBullet();
  }
  if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
  }
  if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
  }
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  }
  if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  }
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function plane() {
  ctx.beginPath();
  ctx.rect(player.x, player.y, planeWidth, planeHeight);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane();
  if (spacePressed) {
    bullet();
  }
  if (downPressed && player.y < canvas.height - planeHeight) {
    player.y += player.speed;
  }
  if (upPressed && player.y > 0) {
    player.y -= player.speed;
  }
  if (rightPressed && player.x < canvas.width - planeWidth) {
    player.x += player.speed;
  }
  if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  }
}

(function update() {
  draw();
  enemy();
  requestAnimationFrame(update);
})();

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

var helper = {
    canvasAnimationFallback: function canvasAnimationFallback() {
        (function () {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();
    },
    getRandomNumber: function getRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },
    getRandomNumberWithMinAddMax: function getRandomNumberWithMinAddMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
};

exports.default = helper;

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map