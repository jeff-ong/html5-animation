import helper from './util/helper';

helper.canvasAnimationFallback();

const windowProperties = {
    width: 0,
    height: 0,
}

const player = {
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    speed: 5,
};

class enemy_obj {
    constructor(x, y = 0, delay = 10, randomize = 1000) {
        this.x = x,
        this.y = y,
        this.delay = delay,
        this.speed = 20,
        this.randomize = randomize;
    }
}

//when to deploy the first enemy 
let randomly_deploy_enemy = 100;

class bullet_obj {
    constructor(x, y) {
        this.x = x,
        this.y = y,
        this.speed = 5;
    }
}

let bullet_obj_arr = [];
let enemy_obj_arr = [];

const canvas = document.getElementById('root');
const ctx = canvas.getContext('2d');
const x = canvas.width / 2;
const y = canvas.height - 30;
const paddleHeight = 30;
const paddleWidth = 30;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
let request = 0;

player.x = (window.innerWidth - paddleWidth) / 2;
player.y = (window.innerHeight - paddleHeight) / 2;
windowProperties.width = window.innerWidth;
windowProperties.height = window.innerHeight;

document.getElementById('root').height = windowProperties.height;
document.getElementById('root').width = windowProperties.width;
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function enemy() {
    const new_enemy = new enemy_obj(x, -20);
    new_enemy.x = helper.getRandomNumberWithMinAddMax(20, windowProperties.width);
    new_enemy.y = helper.getRandomNumberWithMinAddMax(-300, -200);
    new_enemy.randomize = helper.getRandomNumberWithMinAddMax(1000, 10000);
    if (randomly_deploy_enemy > 0) {
        randomly_deploy_enemy--;
    } else {
        enemy_obj_arr.push(new_enemy);
        randomly_deploy_enemy = helper.getRandomNumberWithMinAddMax(100, 300);  
    }
    
    enemy_obj_arr.map((item,index) => {
        ctx.beginPath();
        ctx.arc(item.x, item.y, 10, 0, 2 * Math.PI);
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
    bullet_obj_arr.map((item, index) => {
        ctx.beginPath();
        ctx.arc(item.x + (paddleWidth / 2), item.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        if (item.y > -1) {
            item.y -= item.speed;
        } else {
            bullet_obj_arr = bullet_obj_arr.filter(bullet => bullet !== item);
        }
    });
}

function keyDownHandler(e) {
    if (e.keyCode == 32) {
        spacePressed = true;
        const bullet_inst = new bullet_obj(player.x, player.y);
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

function paddle() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, paddleWidth, paddleHeight);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle();
    enemy();
    if (spacePressed) {
        bullet();
    }

    if (downPressed && player.y < canvas.height - paddleHeight) {
        player.y += player.speed;
    }
    if (upPressed && player.y > 0) {
        player.y -= player.speed;
    }
    if (rightPressed && player.x < canvas.width - paddleWidth) {
        player.x += player.speed;
    }
    if (leftPressed && player.x > 0) {
        player.x -= player.speed;
    }
}

(function update() {
    draw();
    requestAnimationFrame(update);
})();
