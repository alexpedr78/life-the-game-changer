import { Player } from "./Player.js";
// screen
const landingScreen = document.getElementById("landing-page");
const initializeScreen = document.getElementById("initialize-screen");
const gameScreen = document.getElementById("game-screen");
const ruleScreen = document.getElementById("rule-screen");
const endScreen = document.getElementById("end-screen");

// button

const ruleButton = document.getElementById("rule-btn");
const startInitButton = document.getElementById("start-init");
const newBoardButton = document.getElementById("new-board");
const newGameButton = document.getElementById("send-name");
const backTomenuButtonFromRules = document.getElementById("menu");
const backTomenuButtonFromGame = document.getElementById("menu-from-game");
const backToMenuButtonFromInit = document.getElementById("menu-from-init");
const menuFromEndButton = document.getElementById("menu-from-end");
const newBoardFromEndButton = document.getElementById("start-from-end");
const dialog = document.getElementById("dialog");
// other
const gameContainer = document.getElementById("game");
let count = 0;
let timeoutId = null;
let player;
let countTimer = 0;
let timerInterval = null;
const numberOfGame = document.getElementById("number-of-game");

newGameButton.addEventListener("click", () => {
  initializeScreen.hidden = true;
  newBoardButton.hidden = false;
  backTomenuButtonFromGame.hidden = false;
  // gameScreen.hidden = false;
  gameScreen.classList.add("flex");
  createBoard();
});

ruleButton.addEventListener("click", () => {
  landingScreen.hidden = true;
  ruleScreen.hidden = false;
});

backTomenuButtonFromRules.addEventListener("click", () => {
  ruleScreen.hidden = true;
  landingScreen.hidden = false;
});
startInitButton.addEventListener("click", () => {
  landingScreen.hidden = true;
  initializeScreen.hidden = false;
});
backToMenuButtonFromInit.addEventListener("click", () => {
  initializeScreen.hidden = true;
  landingScreen.hidden = false;
});

backTomenuButtonFromGame.addEventListener("click", () => {
  countTimer = 0;
  gameContainer.innerHTML = "";
  newBoardButton.hidden = true;
  backTomenuButtonFromGame.hidden = true;
  gameScreen.hidden = true;
  gameScreen.classList.remove("flex");
  landingScreen.hidden = false;
  clearInterval(timerInterval);
});

newBoardButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  countTimer = 0;
  clearInterval(timerInterval);
  dialog.close();
  createBoard();
});

numberOfGame.textContent = count;
function createBoard() {
  count++;
  numberOfGame.textContent = count;
  player = new Player("alexis");
  for (let i = 13; i > 0; i--) {
    let divLine = document.createElement("div");
    divLine.classList.add("divLine");
    for (let j = 10; j > 0; j--) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = i;
      cell.setAttribute("x", i);
      cell.setAttribute("y", j);
      player.cellArray.push(cell);
      divLine.append(cell);
    }
    gameContainer.append(divLine);
  }
  let nameRecipient = document.createElement("div");
  nameRecipient.textContent = player.name;
  nameRecipient.classList.add("name-recipient");
  let timer = document.createElement("div");
  timer.classList.add("timer");
  gameContainer.appendChild(timer);
  gameContainer.appendChild(nameRecipient);
  timer.textContent = countTimer;

  timerInterval = setInterval(() => {
    countTimer += 1;

    timer.textContent = countTimer;
  }, 1000);
}

////

gameContainer.addEventListener("click", (event) => {
  if (timeoutId) return;
  dialog.close();
  const clickedCell = event.target;
  let clickedCellX = Number(clickedCell.getAttribute("x"));

  if (player.x + 1 === clickedCellX) {
    player.moveUp();
    player.hidePlayer();
    player.setNewPosition(clickedCell);
    player.displayPlayer();

    setRandomObstacle(3);
    setRandomObstacle(3);
    setRandomObstacle(6);

    setRandomObstacle(6);
    setRandomObstacle(6);
    setRandomObstacle(9);

    setRandomObstacle(9);
    setRandomObstacle(9);
    setRandomObstacle(12);
    setRandomObstacle(12);
    setRandomObstacle(12);
    setRandomObstacle(11);
    setRandomObstacle(11);
    setRandomObstacle(11);

    if (player.position.classList.contains("obstacles")) {
      player.hidePlayer();
      console.log(player.position);
      player.moveDown();
      const newPosition = document.querySelector(
        `.cell[x="${player.x}"][y="${player.y}"]`
      );
      player.setNewPosition(newPosition);
      player.displayPlayer();
    }

    timeoutId = setTimeout(() => {
      document.querySelectorAll(".obstacles").forEach((cell) => {
        cell.classList.remove("obstacles");
        timeoutId = null;
      });
      dialog.show();
    }, 2000);
  }

  if (player.x === 13) {
    gameContainer.innerHTML = "";
    gameScreen.hidden = true;
    gameScreen.classList.remove("flex");
    endScreen.hidden = false;
    clearInterval(timerInterval);
    dialog.close();
  }
});

newBoardFromEndButton.addEventListener("click", () => {
  createBoard();
  endScreen.hidden = true;
  countTimer = 0;
  gameScreen.classList.add("flex");
  gameScreen.hidden = false;
  newBoardButton.hidden = false;
  backTomenuButtonFromGame.hidden = false;
});

menuFromEndButton.addEventListener("click", () => {
  endScreen.hidden = true;
  landingScreen.hidden = false;
});

function setRandomObstacle(num) {
  const line = document.querySelectorAll(`.cell[x="${num}"]`);
  randomObstaclePerLine(line);
}

function randomObstaclePerLine(line) {
  let randomNumber = Math.floor(Math.random() * line.length);
  line[randomNumber].classList.add("obstacles");
}
