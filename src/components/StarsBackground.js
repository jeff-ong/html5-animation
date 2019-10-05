const Universe = () => {
    const universe = {};
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

const Stars = (universe, starsPos) => {
    const stars = {};
    stars.size = Math.random() * 2;
    stars.speed = Math.random() * 0.3;
    stars.x = starsPos.x;
    stars.y = starsPos.y;

    stars.reset = () => {
        stars.size = Math.random() * 2;
        stars.speed = Math.random() * 0.3;
        stars.x = window.innerWidth;
        stars.y = Math.random() * height;
    };

    stars.update = () => {
        stars.y += stars.speed;
        if (stars.y < 0) {
            stars.reset();
        } else {
            universe.ctx.fillRect(stars.x, stars.y, stars.size, stars.size);
        }
    }

    return stars;
};

const ShootingStar = (universe) => {
    const shootingStar = {};
    shootingStar.reset = () => {
        shootingStar.x = Math.random() * width;
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
    }

    return shootingStar;
}

const StarsBackground = () => {
    const universe = Universe();
    for (let i = 0; i <= universe.height; i++) {
        universe.entities.push(
            Stars(universe, {
                x: Math.random() * universe.width,
                y: Math.random() * universe.height
            })
        );
    }
    universe.entities.push(ShootingStar(universe));

    universe.animate = () => {
        universe.ctx.fillStyle = "#1e2859";
        universe.ctx.fillRect(0, 0, universe.width, universe.height);
        universe.ctx.fillStyle = "#fff";
        universe.ctx.strokeStyle = "#fff";
        universe.entLen = universe.entities.length;
        while (universe.entLen--) {
            universe.entities[universe.entLen].update();
        }
        window.requestAnimationFrame(universe.animate);
    }

    if (universe.background) {
        universe.animate();
        window.addEventListener('resize', () => init());
    }
}

export default StarsBackground;
