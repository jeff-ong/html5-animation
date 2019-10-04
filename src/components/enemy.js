import Helper from "../util/helper";
const Enemy = sg => {
  const enemy = {};
  enemy.x = Helper.getRandomNumberWithMinAddMax(20, sg.windowProperties.width);
  enemy.y = Helper.getRandomNumberWithMinAddMax(-300, -200);
  enemy.randomize = Helper.getRandomNumberWithMinAddMax(1000, 10000);
  enemy.delay = 10;
  enemy.speed = 20;
  if (sg.intervalToDeployEnemy > 0) {
    sg.intervalToDeployEnemy--;
  } else {
    sg.enemyObjArr.push(enemy);
    sg.intervalToDeployEnemy = Helper.getRandomNumberWithMinAddMax(100, 300);
  }
  sg.enemyObjArr.map(item => {
    sg.ctx.beginPath();
    sg.ctx.rect(item.x, item.y, 40, 20);
    sg.ctx.fillStyle = "red";
    sg.ctx.fill();
    sg.ctx.closePath();
    if (item.speed > 0) {
      item.y += item.speed;
      item.speed -= 0.5;
    }
  });
  return enemy;
};

export default Enemy;
