let gameOn = false;
let last_t = null;

window.onload = async function () {
  // Board creation:
  const board = document.getElementById("board");
  const board_w = 288;
  const board_h = 512;

  board.width = board_w;
  board.height = board_h;

  const ctx = board.getContext("2d");

  // JavaScript list destruction
  const [
    start_image,
    over_image,
    bg_image,
    bird_imageUP,
    bird_imageMID,
    bird_imageDOWN,
    pipe_image,
    floor_image,
  ] = await Promise.all([
    loadImage("./assets/sprites/message.png"),
    loadImage("./assets/sprites/gameover.png"),
    loadImage("./assets/sprites/background-day.png"),
    loadImage("./assets/sprites/redbird-downflap.png"),
    loadImage("./assets/sprites/redbird-midflap.png"),
    loadImage("./assets/sprites/redbird-upflap.png"),
    loadImage("./assets/sprites/pipe-green.png"),
    loadImage("./assets/sprites/base.png"),
  ]);

  const bird_images = [bird_imageDOWN, bird_imageMID, bird_imageUP];
  const objBird = new Bird(board_w / 8, board_h / 2, bird_images);

  const myGameBoard = new Board(
    board_w,
    board_h,
    start_image,
    over_image,
    bg_image,
    objBird,
    pipe_image,
    floor_image,
  );

  // Start Game:
  ctx.drawImage(
    myGameBoard.start_image,
    myGameBoard.board_w / 2 - myGameBoard.start_image.width / 2,
    myGameBoard.board_h / 2 - myGameBoard.start_image.height / 2,
    myGameBoard.start_image.width,
    myGameBoard.start_image.height,
  );
  addEventListener("keydown", (k) => {
    if (k.key === " ") {
      gameOn = true;
      myGameBoard.objBird.velocity = 0;
      requestAnimationFrame((t) => gameLoop(t, ctx, myGameBoard)); // t = time browser took to call the new frame
    }
  });
  // Controls:
  addEventListener("keydown", (k) => {
    if (k.key === " " && gameOn === true) {
      myGameBoard.objBird.velocity -= myGameBoard.objBird.jumpImpulse;
    }
  });
};
function gameLoop(t, ctx, myGameBoard) {
  // last_t storage t on last call of recursive function, first time last_t = t
  if (last_t === null) last_t = t;

  const dt = (t - last_t) / 16.67; // ensueres that game behaves always like 60fps (same for slow and fast computers)
  last_t = t;

  // Bird phisycs
  const myBird = myGameBoard.objBird;
  myBird.velocity += myBird.gravity * dt;
  myBird.birdCoordY += myBird.velocity * dt;

  // Colision with the floor:
  if (
    myBird.birdCoordY >=
    myGameBoard.board_h -
      myGameBoard.floor_image.height -
      myBird.bird_image.height
  ) {
    myBird.birdCoordY =
      myGameBoard.board_h -
      myGameBoard.floor_image.height -
      myBird.bird_image.height;
  }

  // Select bird_images
  if (myBird.velocity >= 3) {
    myBird.bird_image = myBird.bird_imageList[0];
  } else if (myBird.velocity <= -3) {
    myBird.bird_image = myBird.bird_imageList[2];
  } else {
    myBird.bird_image = myBird.bird_imageList[1];
  }

  // Clear last frame.
  ctx.clearRect(0, 0, myGameBoard.board_w, myGameBoard.board_h);
  // Print new frame.
  printBoard(ctx, myGameBoard);
  // Request a new frame (executes when browser is ready)
  requestAnimationFrame((t) => gameLoop(t, ctx, myGameBoard));
}
function loadImage(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => resolve(img);
  });
}
function printBoard(ctx, myGameBoard) {
  /*
  PRINT BOARD ELEMENTS:
  */
  ctx.drawImage(
    myGameBoard.bg_image,
    myGameBoard.board_w - myGameBoard.bg_image.width,
    myGameBoard.board_h - myGameBoard.bg_image.height,
    myGameBoard.bg_image.width,
    myGameBoard.bg_image.height,
  );
  ctx.drawImage(
    myGameBoard.objBird.bird_image,
    myGameBoard.objBird.birdCoordX,
    myGameBoard.objBird.birdCoordY,
    myGameBoard.objBird.bird_image.width,
    myGameBoard.objBird.bird_image.height,
  );
  ctx.drawImage(
    myGameBoard.floor_image,
    myGameBoard.board_w - myGameBoard.floor_image.width,
    myGameBoard.board_h - myGameBoard.floor_image.height,
    myGameBoard.floor_image.width,
    myGameBoard.floor_image.height,
  );
}
//----- Classes: -----
class Board {
  constructor(
    board_w,
    board_h,
    start_image,
    over_image,
    bg_image,
    objBird,
    pipe_image,
    floor_image,
  ) {
    this.board_w = board_w;
    this.board_h = board_h;
    this.start_image = start_image;
    this.over_image = over_image;
    this.bg_image = bg_image;
    this.objBird = objBird;
    this.pipe_image = pipe_image;
    this.floor_image = floor_image;
  }
}
class Bird {
  constructor(birdCoordX, birdCoordY, bird_images) {
    this.birdCoordX = birdCoordX;
    this.birdCoordY = birdCoordY;

    this.bird_imageList = bird_images;
    this.bird_image = bird_images[1];

    this.velocity = 0;
    this.gravity = 0.25;
    this.jumpImpulse = 5;
  }
}
