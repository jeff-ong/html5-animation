import Setting from "./components/Setting";
import Player from "./components/Player";
import Enemy from "./components/Enemy";
import { Bullet, FireBulletAtEnemy } from "./components/Bullet";
import StarsBackground, { setDirections } from "./components/StarsBackground";

const SpaceGame = () => {
  const sg = Setting();
  Bullet(sg);
  const StarsBackgroundObj = StarsBackground(sg);
  sg.Frame = () => {
    sg.ctx.clearRect(0, 0, sg.canvas.width, sg.canvas.height);
    Player(sg);
    Enemy(sg);
    if (sg.spacePressed) {
      FireBulletAtEnemy(sg);
    }
    if (sg.downPressed && sg.player.y < sg.canvas.height - sg.planeHeight) {
      sg.player.y += sg.player.speed;
      setDirections('downPressed', true);
    }
    if (sg.upPressed && sg.player.y > 0) {
      sg.player.y -= sg.player.speed;
      setDirections('upPressed', true);
    }
    if (sg.rightPressed && sg.player.x < sg.canvas.width - sg.planeWidth) {
      sg.player.x += sg.player.speed;
      setDirections('leftPressed', true);
    }
    if (sg.leftPressed && sg.player.x > 0) {
      sg.player.x -= sg.player.speed;
      setDirections('rightPressed', true);
    }
  };

  sg.startTheGame = () => {
    const updatePerFrame = () => {
      sg.Frame();
      StarsBackgroundObj.animate();
      window.requestAnimationFrame(updatePerFrame);
    };
    updatePerFrame();
  };

  return sg;
};

export default SpaceGame;
