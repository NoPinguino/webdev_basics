const pipes_separation = 80;
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
  const pipesList = [];
  for (let i = 0; i < 3; i++) {
    let startCoord = board_w + (pipe_image.width + pipes_separation) * i;
    // Constructor retrives: PipeCoordX - PipeGap - PipeImage - PipeVelocity
    const objPipe = new Pipe(startCoord, pipes_separation, pipe_image, 5);
    pipesList.push(objPipe);
  }

  const myGameBoard = new Board(
    board_w,
    board_h,
    start_image,
    over_image,
    bg_image,
    objBird,
    floor_image,
    pipesList,
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
  myGameBoard.objBird.velocity += myGameBoard.objBird.gravity * dt;
  myGameBoard.objBird.birdCoordY += myGameBoard.objBird.velocity * dt;
  // Moves pipes:
  for (let pipe of myGameBoard.pipesList) {
    pipe.pipeCoordX -= pipe.velocity;
    pipe.drawPipe(ctx, myGameBoard);
    if (pipe.pipeCoordX <= -100) {
      pipe.pipeCoordX = myGameBoard.board_w + 100;
    }
  }
  // Moves bird and checks colisions:
  myGameBoard.objBird.birdFall();
  myGameBoard.checkBirdColisions();

  // Updates frame:
  myGameBoard.reprintBoard(ctx, myGameBoard);

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
//----- Classes: -----
class Board {
  constructor(
    board_w,
    board_h,
    start_image,
    over_image,
    bg_image,
    objBird,
    floor_image,
    pipes,
  ) {
    this.board_w = board_w;
    this.board_h = board_h;
    this.start_image = start_image;
    this.over_image = over_image;
    this.bg_image = bg_image;
    this.objBird = objBird;
    this.floor_image = floor_image;
    this.pipes = pipes;
  }

  // Re-print:
  reprintBoard(ctx) {
    // Clear last frame.
    ctx.clearRect(0, 0, this.board_w, this.board_h);
    // Print new frame.
    ctx.drawImage(
      this.bg_image,
      this.board_w - this.bg_image.width,
      this.board_h - this.bg_image.height,
      this.bg_image.width,
      this.bg_image.height,
    );
    ctx.drawImage(
      this.objBird.bird_image,
      this.objBird.birdCoordX,
      this.objBird.birdCoordY,
      this.objBird.bird_image.width,
      this.objBird.bird_image.height,
    );
    ctx.drawImage(
      this.floor_image,
      this.board_w - this.floor_image.width,
      this.board_h - this.floor_image.height,
      this.floor_image.width,
      this.floor_image.height,
    );
  }

  // Bird colisions:
  checkBirdColisions() {
    // Ceiling colision:
    if (this.objBird.birdCoordY < 0) {
      this.objBird.birdCoordY = 0;
    }
    // Floor colisions:
    if (
      this.objBird.birdCoordY >
      this.board_h - this.floor_image.height - this.objBird.bird_image.height
    ) {
      // CHANGE THIS AFTER FOR GAME OVER (at the moment is just colision):
      this.objBird.birdCoordY =
        this.board_h - this.floor_image.height - this.objBird.bird_image.height;
    }
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

  birdFall() {
    if (this.velocity > 3) {
      this.bird_image = this.bird_imageList[2]; // Ascending image
    } else if (this.velocity < -3) {
      this.bird_image = this.bird_imageList[0]; // Descending image
    } else {
      this.bird_image = this.bird_imageList[1]; // Steady image
    }
  }
}
class Pipe {
  constructor(pipe_image, pipeX, pipeY) {
    this.pipe_image = pipe_image;
    this.pipeX = pipeX;
    this.pipeY = pipeY;
  }
}
class PipeSet {
  constructor(pipeCoordX, vertical_gap = 60, topPipe, bottomPipe) {
    this.pipeCoordX = pipeCoordX;
    this.vertical_gap = vertical_gap;
    this.topPipe = topPipe;
    this.bottomPipe = bottomPipe;
  }

  drawPipe(ctx, myGameBoard) {
    ctx.drawImage(
      this.pipe_image,
      this.pipeCoordX,
      myGameBoard.board_h / 3,
      this.pipe_image.width,
      this.pipe_image.height,
    );
  }
}
