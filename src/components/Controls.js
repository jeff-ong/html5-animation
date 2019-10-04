const Controls = sg => {
  const controls = {};

  controls.keyDownHandler = e => {
    if (e.keyCode == 32) {
      sg.shootBullet();
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
      sg.upPressed = true;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      sg.downPressed = true;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
      sg.rightPressed = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
      sg.leftPressed = true;
    }
  };

  controls.keyUpHandler = e => {
    if (e.key == "Up" || e.key == "ArrowUp") {
      sg.upPressed = false;
    }
    if (e.key == "Down" || e.key == "ArrowDown") {
      sg.downPressed = false;
    }
    if (e.key == "Right" || e.key == "ArrowRight") {
      sg.rightPressed = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft") {
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

  if (window.innerWidth >= 1024) {
    document.addEventListener(
      "mousemove",
      e => {
        sg.player.x = e.clientX;
        sg.player.y = e.clientY;
      },
      false
    );
  } else {
    document.addEventListener(
      "touchmove",
      e => {
        sg.player.x = e.touches[0].pageX;
        sg.player.y = e.touches[0].pageY;
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
