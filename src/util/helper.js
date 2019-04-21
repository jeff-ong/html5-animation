
const helper = {
    canvasAnimationFallback() {
        (function () {
            const requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();
    },
    getRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },
    getRandomNumberWithMinAddMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

}

export default helper;