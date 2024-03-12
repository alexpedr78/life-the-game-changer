import { Player } from "./Player.js";
// screen
const landingScreen = document.getElementById("landing-page");
const initializeScreen = document.getElementById("initialize-screen");
const gameScreen = document.getElementById("game-screen");
const ruleScreen = document.getElementById("rule-screen");
const endScreen = document.getElementById("end-screen");

// button

const ruleButton = document.getElementById("rule-btn");
const startGameButton = document.getElementById("start-init");
const restartButton = document.getElementById("restart");
const initializeButton = document.getElementById("send");
const backTomenuButton = document.getElementById("menu");

// other
const gameContainer = document.getElementById("game");
const cellArray = [];
let modal = document.getElementById("modal");

function createBoard() {
  const player1 = new Player("alexis");

  for (let i = 13; i > 0; i--) {
    let divLine = document.createElement("div");
    divLine.classList.add("divLine");
    for (let j = 10; j > 0; j--) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      //   cell.textContent = i;
      cell.setAttribute("x", i);
      cell.setAttribute("y", j);
      player1.cellArray.push(cell);
      divLine.append(cell);
    }
    gameContainer.append(divLine);
  }

  player1.loopMove();
}

initializeButton.addEventListener("click", () => {
  initializeScreen.hidden = true;
  gameScreen.hidden = false;
  createBoard();
});

ruleButton.addEventListener("click", () => {
  landingScreen.hidden = true;
  ruleScreen.hidden = false;
});

backTomenuButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  ruleScreen.hidden = true;
  landingScreen.hidden = false;
});

restartButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  createBoard();
});

startGameButton.addEventListener("click", () => {
  landingScreen.hidden = true;
  initializeScreen.hidden = false;
});

gameContainer.addEventListener('click', (event) => )