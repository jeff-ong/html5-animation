export const Bullet = sg => {
  const bullet = {};
  bullet.x = sg.player.x;
  bullet.y = sg.player.y;
  bullet.initialY = sg.player.y;
  bullet.speed = 5;
  bullet.spacePressed = true;
  bullet.shoot = () => {
    sg.spacePressed = true;
    sg.bulletObjArr.push(bullet);
  };
  sg.shootBullet = () => {
    Bullet(sg).shoot();
  };
  return bullet;
};

export const FireBulletAtEnemy = sg => {
  if (sg.bulletObjArr.length <= 0) {
    sg.spacePressed = false;
    return;
  }
  sg.bulletObjArr.map(bullet => {
    sg.ctx.beginPath();
    sg.ctx.arc(bullet.x + sg.planeWidth / 2, bullet.y, 5, 0, 2 * Math.PI);
    sg.ctx.fillStyle = "#fff";
    sg.ctx.fill();
    sg.ctx.closePath();
    if (bullet.y > -1) {
      bullet.y -= bullet.speed;
    } else {
      sg.bulletObjArr = sg.bulletObjArr.filter(item => item !== bullet);
    }
    for (let i = 0; i <= sg.enemyObjArr.length; i++) {
      if (
        sg.enemyObjArr[i] &&
        sg.enemyObjArr[i].y + 15 >= bullet.y &&
        Math.abs(
          sg.enemyObjArr[i].x - bullet.x &&
            Math.abs(sg.enemyObjArr[i].x - bullet.x) <= 25
        )
      ) {
        if (bullet.initialY <= sg.enemyObjArr[i].y) {
          continue;
        }
        sg.bulletObjArr = sg.bulletObjArr.filter(item => item !== bullet);
        sg.enemyObjArr = sg.enemyObjArr.filter(
          enemy => enemy !== sg.enemyObjArr[i]
        );
      }
    }
  });
};
