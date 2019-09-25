import helper from "./util/helper";

import { star } from "./components/stars";
import Enemy from "./components/enemy";
import Bullet from "./components/bullet";

helper.canvasAnimationFallback();

const windowProperties = {
  width: 0,
  height: 0
};

const player = {
  x: 0,
  y: 0,
  width: 500,
  height: 500,
  speed: 5
};

//when to deploy the first enemy
let randomly_deploy_enemy = 100;
let bullet_obj_arr = [];
let enemy_obj_arr = [];

const canvas = document.getElementById("root");
const ctx = canvas.getContext("2d");
const x = canvas.width / 2;
const y = canvas.height - 30;
const planeHeight = 30;
const planeWidth = 30;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;

player.x = (window.innerWidth - planeWidth) / 2;
player.y = (window.innerHeight - planeHeight) / 2;
windowProperties.width = window.innerWidth;
windowProperties.height = window.innerHeight;

document.getElementById("root").height = windowProperties.height;
document.getElementById("root").width = windowProperties.width;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
if (window.innerWidth >= 1024) {
  document.addEventListener(
    "mousemove",
    e => {
      player.x = e.clientX;
      player.y = e.clientY;
    },
    false
  );
} else {
  document.addEventListener(
    "touchmove",
    e => {
      player.x = e.touches[0].pageX;
      player.y = e.touches[0].pageY;
      shootBullet();
    },
    false
  );
}

document.addEventListener(
  "click",
  () => {
    shootBullet();
  },
  false
);

document.addEventListener(
  "touchstart",
  () => {
    shootBullet();
  },
  false
);

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
  const new_enemy = new Enemy(x, -20);
  new_enemy.x = helper.getRandomNumberWithMinAddMax(20, windowProperties.width);
  new_enemy.y = helper.getRandomNumberWithMinAddMax(-300, -200);
  new_enemy.randomize = helper.getRandomNumberWithMinAddMax(1000, 10000);
  if (randomly_deploy_enemy > 0) {
    randomly_deploy_enemy--;
  } else {
    enemy_obj_arr.push(new_enemy);
    randomly_deploy_enemy = helper.getRandomNumberWithMinAddMax(100, 300);
  }
  enemy_obj_arr.map(item => {
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
  bullet_obj_arr.map(bullet => {
    ctx.beginPath();
    ctx.arc(bullet.x + planeWidth / 2, bullet.y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    if (bullet.y > -1) {
      bullet.y -= bullet.speed;
    } else {
      bullet_obj_arr = bullet_obj_arr.filter(item => item !== bullet);
    }
    for (let i = 0; i <= enemy_obj_arr.length; i++) {
      if (
        enemy_obj_arr[i] &&
        enemy_obj_arr[i].y + 15 >= bullet.y &&
        Math.abs(
          enemy_obj_arr[i].x - bullet.x &&
            Math.abs(enemy_obj_arr[i].x - bullet.x) <= 25
        )
      ) {
        if (bullet.initialY <= enemy_obj_arr[i].y) {
          continue;
        }
        bullet_obj_arr = bullet_obj_arr.filter(item => item !== bullet);
        enemy_obj_arr = enemy_obj_arr.filter(
          enemy => enemy !== enemy_obj_arr[i]
        );
      }
    }
  });
}

function shootBullet() {
  spacePressed = true;
  const bullet_inst = new Bullet(player.x, player.y, player.y);
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
