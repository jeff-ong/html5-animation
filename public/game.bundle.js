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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helper = __webpack_require__(/*! ./util/helper */ "./src/util/helper.js");

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var enemy_obj = function enemy_obj(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var randomize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;

    _classCallCheck(this, enemy_obj);

    this.x = x, this.y = y, this.delay = delay, this.speed = 20, this.randomize = randomize;
};

//when to deploy the first enemy 


var randomly_deploy_enemy = 100;

var bullet_obj = function bullet_obj(x, y, initialY) {
    _classCallCheck(this, bullet_obj);

    this.x = x, this.y = y, this.initialY = initialY;
    this.speed = 5;
};

var bullet_obj_arr = [];
var enemy_obj_arr = [];

var canvas = document.getElementById('root');
var ctx = canvas.getContext('2d');
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

document.getElementById('root').height = windowProperties.height;
document.getElementById('root').width = windowProperties.width;
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function enemy() {
    var new_enemy = new enemy_obj(x, -20);
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
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();

        if (item.speed > 0) {
            item.y += item.speed;
            item.speed -= .5;
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
                    return 'continue';
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

            if (_ret === 'continue') continue;
        }
    });
}

function keyDownHandler(e) {
    if (e.keyCode == 32) {
        spacePressed = true;
        var bullet_inst = new bullet_obj(player.x, player.y, player.y);
        bullet_obj_arr.push(bullet_inst);
    }
    if (e.key == 'Up' || e.key == 'ArrowUp') {
        upPressed = true;
    }
    if (e.key == 'Down' || e.key == 'ArrowDown') {
        downPressed = true;
    }
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    }
    if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'Up' || e.key == 'ArrowUp') {
        upPressed = false;
    }
    if (e.key == 'Down' || e.key == 'ArrowDown') {
        downPressed = false;
    }
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    }
    if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
}

function plane() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, planeWidth, planeHeight);
    ctx.fillStyle = '#fff';
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