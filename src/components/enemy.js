class Enemy {
    constructor(x, y = 0, delay = 10, randomize = 1000) {
        this.x = x,
        this.y = y,
        this.delay = delay,
        this.speed = 20,
        this.randomize = randomize;
    }
}

export default Enemy;