const Player = sg => {
  sg.ctx.beginPath();
  sg.ctx.rect(sg.player.x, sg.player.y, sg.planeWidth, sg.planeHeight);
  sg.ctx.fillStyle = "#fff";
  sg.ctx.fill();
  sg.ctx.closePath();
};

export default Player;
