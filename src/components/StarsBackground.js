const directions = {
    leftPressed: false,
    rightPressed: false,
    upPressed: false,
    downPressed: false
}

export const setDirections = (direction, boolean) => {
    directions[direction] = boolean;
}

const Universe = (sg) => {
    const universe = {};
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

const Stars = (universe, starsPos) => {
    const stars = {};
    stars.size = Math.random() * 2;
    stars.speed = Math.random() * 0.8;
    stars.staticSpeed = Math.random() * 0.2;
    stars.x = starsPos.x;
    stars.y = starsPos.y;

    stars.reset = () => {
        stars.size = Math.random() * 2;
        stars.speed = Math.random() * 0.8;
        stars.staticSpeed = Math.random() * 0.2;
        stars.x = window.innerWidth;
        stars.y = Math.random() * universe.height;
    };

    stars.update = () => {
        let condition = stars.y < 0;
        if (directions.rightPressed) {
            stars.x += stars.speed;
            condition = stars.x > universe.width;
        }

        if (directions.leftPressed) {
            stars.x -= stars.speed;
            condition = stars.x < 0;
        }

        if (directions.downPressed) {
            stars.y -= stars.speed;
            condition = stars.y < 0;
        } else {
            stars.y += stars.staticSpeed;
            condition = stars.y > universe.height;
        }

        if (directions.upPressed) {
            stars.y += stars.speed;
            condition = stars.y > universe.height;
        } 
      
        if (condition) {
            stars.reset();
        } else {
            universe.ctx.fillRect(stars.x, stars.y, stars.size, stars.size);
        }
        return;
    }

    return stars;
};

const ShootingStar = universe => {
    const shootingStar = {};
    shootingStar.active = true;
    shootingStar.reset = () => {
        shootingStar.x = Math.random() * universe.width;
        shootingStar.y = 0;
        shootingStar.len = Math.random() * 80 + 10;
        shootingStar.speed = Math.random() * 10 + 6;
        shootingStar.size = Math.random() * 1 + 0.1;
        shootingStar.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        shootingStar.active = false;
    }

    shootingStar.update = () => {
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
    }

    return shootingStar;
}

const StarsBackground = (sg) => {
    const universe = Universe(sg);
    const updateStarsDirectionsOnMouseMove = () => {
        if (Math.abs(sg.directions.x - sg.directions.oldx) > universe.threshold ||
            Math.abs(sg.directions.y - sg.directions.oldy) > universe.threshold) {
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
    }

    for (let i = 0; i <= universe.height; i++) {
        universe.stars.push(
            Stars(universe, {
                x: Math.random() * universe.width,
                y: Math.random() * universe.height
            })
        );
    }
    universe.stars.push(ShootingStar(universe));

    universe.animate = () => {
        universe.ctx.fillStyle = "#1e2859";
        universe.ctx.fillRect(0, 0, universe.width, universe.height);
        universe.ctx.fillStyle = "#fff";
        universe.ctx.strokeStyle = "#fff";

        updateStarsDirectionsOnMouseMove();

        universe.stars.map(star => {
            star.update();
        });
        
        window.requestAnimationFrame(universe.animate);
    }

    if (universe.background) {
        universe.animate();
        window.addEventListener('resize', () => StarsBackground());
    }
}

export default StarsBackground;
