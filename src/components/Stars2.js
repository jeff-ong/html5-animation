const background = document.getElementById("stars");

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

Star.prototype.reset = function() {
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.3;
  this.x = width;
  this.y = Math.random() * height;
};

Star.prototype.update = function() {
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

ShootingStar.prototype.reset = function() {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = Math.random() * 80 + 10;
  this.speed = Math.random() * 10 + 6;
  this.size = Math.random() * 1 + 0.1;
  this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
  this.active = false;
};

ShootingStar.prototype.update = function() {
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
  (width = window.innerWidth), (height = window.innerHeight);
  background.width = width;
  background.height = height;
  entities = [];
  for (let i = 0; i <= height; i++) {
    entities.push(
      new Star({
        x: Math.random() * width,
        y: Math.random() * height
      })
    );
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

  window.requestAnimationFrame(animate);
}

if (background) {
  animate();
}

window.addEventListener("resize", function() {
  star_init();
});

star_init();
// export default star_init;
