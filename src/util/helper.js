import events from "events";
export const eventEmitter = new events.EventEmitter();

const Helper = {
  getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  getRandomNumberWithMinAddMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

export default Helper;
