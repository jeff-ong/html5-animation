import {
  Bullet
} from "./Bullet";
import Controls from "./Controls";

import StarsBackground from "./StarsBackground";

const Setting = () => {
  const setting = {};
  setting.intervalToDeployEnemy = 100;
  setting.bulletObjArr = [];
  setting.enemyObjArr = [];
  setting.canvas = document.getElementById("root");
  setting.ctx = setting.canvas.getContext("2d");
  setting.x = setting.canvas.width / 2;
  setting.y = setting.canvas.height - 30;
  setting.planeHeight = 30;
  setting.planeWidth = 30;
  setting.rightPressed = false;
  setting.leftPressed = false;
  setting.upPressed = false;
  setting.downPressed = false;
  setting.spacePressed = false;
  setting.shootBullet = null;
  setting.directions = {
    x: 0,
    y: 0,
    oldx: 0,
    oldy: 0
  };
  setting.player = {
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    speed: 5
  };
  setting.windowProperties = {
    width: 0,
    height: 0
  };

  Bullet(setting);

  Controls(setting);

  StarsBackground(setting);

  return setting;
};

export default Setting;
