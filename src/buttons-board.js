const ruleButton = document.getElementById("rule-btn");
const startGameButton = document.getElementById("start-init");
const newBoardButton = document.getElementById("new-board");
const initializeButton = document.getElementById("send");
const backTomenuButton = document.getElementById("menu");

// other
const gameContainer = document.getElementById("game");
const cellArray = [];
let modal = document.getElementById("modal");
let timeoutId = null;
let player;

function createBoard() {
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
}

newGame.addEventListener("click", () => {
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

newBoardButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  createBoard();
});

startGameButton.addEventListener("click", () => {
  landingScreen.hidden = true;
  initializeScreen.hidden = false;
});
