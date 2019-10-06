import {
  setDirections
} from "./StarsBackground";

const Controls = sg => {
  const controls = {};
  const Directions = {
    Up: ["Up", "ArrowUp"],
    Down: ["Down", "ArrowDown"],
    Left: ["Left", "ArrowLeft"],
    Right: ["Right", "ArrowRight"],
  }
  controls.keyDownHandler = e => {
    if (e.keyCode == 32) {
      sg.shootBullet();
    }
    if (Directions.Up.includes(e.key)) {
      sg.upPressed = true;
    }
    if (Directions.Down.includes(e.key)) {
      sg.downPressed = true;
    }
    if (Directions.Right.includes(e.key)) {
      sg.rightPressed = true;
    }
    if (Directions.Left.includes(e.key)) {
      sg.leftPressed = true;
    }
  };

  controls.keyUpHandler = e => {
    setDirections('upPressed', false);
    setDirections('downPressed', false);
    setDirections('leftPressed', false);
    setDirections('rightPressed', false);
    if (Directions.Up.includes(e.key)) {
      sg.upPressed = false;
    }
    if (Directions.Down.includes(e.key)) {
      sg.downPressed = false;
    }
    if (Directions.Right.includes(e.key)) {
      sg.rightPressed = false;
    }
    if (Directions.Left.includes(e.key)) {
      sg.leftPressed = false;
    }
  };

  sg.player.x = (window.innerWidth - sg.planeWidth) / 2;
  sg.player.y = (window.innerHeight - sg.planeHeight) / 2;
  sg.windowProperties.width = window.innerWidth;
  sg.windowProperties.height = window.innerHeight;
  document.getElementById("root").height = sg.windowProperties.height;
  document.getElementById("root").width = sg.windowProperties.width;
  document.addEventListener("keydown", controls.keyDownHandler);
  document.addEventListener("keyup", controls.keyUpHandler);

  if (window.innerWidth >= 480) {
    document.addEventListener(
      "mousemove",
      e => {
        sg.directions.x = sg.player.x = e.clientX;
        sg.directions.y = sg.player.y = e.clientY;
      },
      false
    );
  } else {
    document.addEventListener(
      "touchmove",
      e => {
        sg.directions.x = sg.player.x = e.touches[0].pageX;
        sg.directions.y = sg.player.y = e.touches[0].pageY;
        sg.shootBullet();
      },
      false
    );
  }

  document.addEventListener(
    "click",
    () => {
      sg.shootBullet();
    },
    false
  );

  document.addEventListener(
    "touchstart",
    () => {
      sg.shootBullet();
    },
    false
  );

  return controls;
};

export default Controls;
