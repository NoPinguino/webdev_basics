const BOARD_WIDTH = 512;
const BOARD_HEIGHT = 288;
const GRAVITY = 0.5;
const PIPE_GAP = 80;

window.onload = async function () {
  const canvas_board = document.getElementById("idBoard");
  const ctx = canvas_board.getContext("2d");
  // Images load:
  const [
    bg_image,
    floor_image,
    birdDown_image,
    birdMid_image,
    birdUp_image,
    bottomPipe_image,
    topPipe_image,
  ] = await Promise.all([
    loadImage("./assets/sprites/background-day.png"),
    loadImage("./assets/sprites/base.png"),
    loadImage("./assets/sprites/redbird-downflap.png"),
    loadImage("./assets/sprites/redbird-midflap.png"),
    loadImage("./assets/sprites/redbird-upflap.png"),
    loadImage("./assets/sprites/bottomPipe.png"),
    loadImage("./assets/sprites/topPipe.png"),
  ]);

  // Intance Bird:
  const myBirdImages = [birdDown_image, birdMid_image, birdUp_image];
  const myBird = new Bird(BOARD_WIDTH / 8, BOARD_HEIGHT / 2, myBirdImages);
  // Instance PipeSet and Pipes:
  const pipeSet_list = [];
  // In case 3 pipes is not enought, change the for loop range:
  for (let i = 0; i < 3; i++) {
    const myBottomPipe = new Pipe(
      bottomPipe_image,
      BOARD_WIDTH / 2,
      BOARD_HEIGHT,
    );
    const myTopPipe = new Pipe(topPipe_image, BOARD_WIDTH / 2, BOARD_HEIGHT);
    const myPipeSet = new PipeSet(BOARD_WIDTH / 2, myTopPipe, myBottomPipe);
    pipeSet_list.push(myPipeSet);
  }
  // Instance Board:
  const myBoard = new Board(bg_image, floor_image, myBird, pipeSet_list, 0);
};

// Load image function:
function loadImage(path) {
  return Promise((resolve) => {
    const image = new Image();
    image.src(path);
    image.onload = () => resolve(image);
  });
}
// Game loop:
function gameLoop() {}
// Board object:
class Board {
  constructor(bg_image, floor_image, myBird, pipes, points) {
    this.bg_image = bg_image;
    this.floor_image = floor_image;
    this.myBird = myBird;
    this.pipes = pipes;
    this.points = points;
  }

  drawBoard(ctx) {
    // Draw background:
    ctx.drawImage(
      this.bg_image,
      0,
      0,
      this.bg_image.width,
      this.bg_image.height,
    );
    // Draw floor:
    ctx.drawImage(
      this.floor_image,
      0,
      BOARD_HEIGHT - this.floor_image.height,
      this.floor_image.width,
      this.floor_image.height,
    );
    // Draw bird:
    this.myBird.drawBird(ctx);
  }
}
// Bird object:
class Bird {
  constructor(bird_X, bird_Y, bird_imageList) {
    this.bird_X = bird_X;
    this.bird_Y = bird_Y;
    this.bird_imageList = bird_imageList;
    this.bird_image = bird_imageList[1];

    this.falling_velocity = 0;
    this.jump_impuse = 6;
  }

  birdJump() {
    this.falling_velocity += this.jump_impuse;
  }

  birdFall() {
    // Updates bird Y coordinate:
    this.falling_velocity += GRAVITY;
    this.bird_Y += this.falling_velocity;
    // Update actual image depending on falling velocity:
    if (this.falling_velocity > 2) this.bird_image = this.bird_imageList[0];
    if (this.falling_velocity < -2) this.bird_image = this.bird_imageList[2];
    if (this.falling_velocity < 2 && this.falling_velocity > -2)
      this.bird_image = this.bird_imageList[1];
  }

  drawBird(ctx) {
    ctx.drawImage(
      this.bird_image,
      this.bird_X,
      this.bird_Y,
      this.bird_image.width,
      this.bird_image.height,
    );
  }
}
// PipeSet object:
class PipeSet {
  constructor(pipeSet_X, topPipe, bottomPipe) {
    this.pipeSet_X = pipeSet_X;
    this.topPipe = topPipe;
    this.bottomPipe = bottomPipe;
  }
}
// Pipe object:
class Pipe {
  constructor(pipe_image, pipe_X, pipe_Y) {
    this.pipe_image = pipe_image;
    this.pipe_X = pipe_X;
    this.pipe_Y = pipe_Y;
    this.pipe_width = this.pipe_image.width;
    this.pipe_height = this.pipe_image.height;
  }
}
