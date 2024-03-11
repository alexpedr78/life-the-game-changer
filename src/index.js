const menu = document.getElementById("landing-page");
const initialize = document.getElementById("initialize-screen");
const main = document.getElementById("game-screen");
const ruleScreen = document.getElementById("rule-screen");
const backTomenuButton = document.getElementById("menu");
const ruleButton = document.getElementById("rule-btn");
const startGameButton = document.getElementById("start-init");
const initializeButton = document.getElementById("send");
const gameContainer = document.getElementById("game");

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

ruleButton.addEventListener("click", () => {
  menu.hidden = true;
  ruleScreen.hidden = false;
});

backTomenuButton.addEventListener("click", () => {
  ruleScreen.hidden = true;
  menu.hidden = false;
});
startGameButton.addEventListener("click", () => {
  menu.hidden = true;
  initialize.hidden = false;
});

initializeButton.addEventListener("click", () => {
  initialize.hidden = true;
  main.hidden = false;
  createBoard();
  playerMove();
  randomObstacle();
});

function createBoard() {
  for (let i = 13; i > 0; i--) {
    for (let j = 10; j > 0; j--) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = i;
      cell.setAttribute("x", i);
      cell.setAttribute("y", j);
      gameContainer.append(cell);
    }
  }
}

function playerMove() {
  const line1 = document.querySelectorAll('.cell[x="1"]');
  line1.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.classList.add("playerPosition");
    });
  });
}

function randomObstacle() {
  const line3 = document.querySelectorAll('.cell[x="3"]');
  const line6 = document.querySelectorAll('.cell[x="6"]');
  const line9 = document.querySelectorAll('.cell[x="9"]');
  const line11 = document.querySelectorAll('.cell[x="11"]');
  const line12 = document.querySelectorAll('.cell[x="12"]');

  let randomNumber1 = createRandomNumber();
  let randomNumber2 = createRandomNumber();
  let randomNumber3 = createRandomNumber();
  let randomNumber4 = createRandomNumber();
  let randomNumber5 = createRandomNumber();

  line3.forEach((cell) => {
    if (cell.getAttribute("y") === randomNumber1) {
      cell.classList.add("obstacles");
    }
  });
  line6.forEach((cell) => {
    if (cell.getAttribute("y") === randomNumber2) {
      cell.classList.add("obstacles");
    }
  });
  line9.forEach((cell) => {
    if (cell.getAttribute("y") === randomNumber3) {
      cell.classList.add("obstacles");
    }
  });
  line11.forEach((cell) => {
    if (cell.getAttribute("y") === randomNumber4) {
      cell.classList.add("obstacles");
    }
  });
  line12.forEach((cell) => {
    if (cell.getAttribute("y") === randomNumber5) {
      cell.classList.add("obstacles");
    }
  });

  //   const Obstacle1 = line3.querySelectorAll(".cell[x= randomNumber1]");
  //   const Obstacle2 = line6.querySelectorAll(".cell[x=randomNumber2]");
  //   const Obstacle3 = line9.querySelectorAll(".cell[x=randomNumber3]");
  //   const Obstacle4 = line11.querySelectorAll(".cell[x=randomNumber4]");
  //   const Obstacle5 = line12.querySelectorAll(".cell[x=randomNumber5]");

  //   Obstacle1.classList.add("obstacle");
  //   Obstacle2.classList.add("obstacle");
  //   Obstacle3.classList.add("obstacle");
  //   Obstacle4.classList.add("obstacle");
  //   Obstacle5.classList.add("obstacle");
}
function createRandomNumber() {
  let i = Math.ceil(Math.random() * 10);
  return i;
}

function choosePlayer() {}

function loopGame() {}
