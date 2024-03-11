const menu = document.getElementById("landing-page");
const initialize = document.getElementById("initialize-screen");
const main = document.getElementById("game-screen");
const ruleScreen = document.getElementById("rule-screen");
const endScreen = document.getElementById("end-screen");
const backTomenuButton = document.getElementById("menu");
const ruleButton = document.getElementById("rule-btn");
const startGameButton = document.getElementById("start-init");
const restartButton = document.getElementById("restart");
const initializeButton = document.getElementById("send");
const gameContainer = document.getElementById("game");
const cellArray = [];
let modal = document.getElementById("modal");
// ...document.getElementsByClassName("cell")

class Player {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.position = null;
  }

  comparePosition() {
    for (let elem of cellArray) {
      if (
        elem.classList.contains("obstacles") &&
        elem.classList.contains("playerPosition")
      ) {
        elem.classList.remove("playerPosition");
        this.x -= 2;
      }
    }
    this.position = document.querySelector(
      `.cell[x="${this.x}"][y="${this.y}"]`
    );
    setTimeout(() => {
      this.position.classList.add("playerPosition");
    }, 1000);

    setTimeout(() => {
      reinitializeBlackBoxes();
    }, 1500);
  }

  loopMove() {
    const intervalId = setInterval(() => {
      if (this.x < 13) {
        modal.hidden = false;
        const upperLine = document.querySelectorAll(`.cell[x="${this.x + 1}"]`);
        upperLine.forEach((cell) => {
          cell.addEventListener("click", () => {
            const inferiorLine = document.querySelectorAll(
              `.cell[x="${this.x}"]`
            );
            // TRYING SOMETHING
            // if (
            //   Number(line.getAttribute(`.cell[x="${this.x}"]`)) >
            //   Number(`.cell[x="${this.x}"]`)
            // )
            //   console.log(`.cell[x="${this.x}"]`);
            // line.classList.add("unclickable");
            modal.hidden = true;
            if (this.position) {
              this.position.classList.remove("playerPosition");
            }
            cell.classList.add("playerPosition");
            this.position = cell;
            this.x = Number(cell.getAttribute("x"));
            this.y = Number(cell.getAttribute("y"));
            this.position = document.querySelector(
              `.cell[x="${this.x}"][y="${this.y}"]`
            );
            setRandomObstacle();
            setTimeout(() => {
              this.comparePosition();
            }, 1000);
          });
        });
      } else {
        main.hidden = true;
        endScreen.hidden = false;
        clearInterval(intervalId);
      }
    }, 4000);
  }
}

function reinitializeBlackBoxes() {
  cellArray.forEach((cell) => {
    cell.classList.remove("obstacles");
  });
}

function createBoard() {
  for (let i = 13; i > 0; i--) {
    for (let j = 10; j > 0; j--) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      //   cell.textContent = i;
      cell.setAttribute("x", i);
      cell.setAttribute("y", j);
      cellArray.push(cell);
      gameContainer.append(cell);
    }
  }
  const player1 = new Player("alexis");
  player1.loopMove();
}

function setRandomObstacle() {
  for (let cell of cellArray) {
    cell.classList.remove("obstacles");
  }
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
    if (Number(cell.getAttribute("y")) === randomNumber1) {
      cell.classList.add("obstacles");
    }
  });
  line6.forEach((cell) => {
    if (Number(cell.getAttribute("y")) === randomNumber2) {
      cell.classList.add("obstacles");
    }
  });
  line9.forEach((cell) => {
    if (Number(cell.getAttribute("y")) === randomNumber3) {
      cell.classList.add("obstacles");
    }
  });
  line11.forEach((cell) => {
    if (Number(cell.getAttribute("y")) === randomNumber4) {
      cell.classList.add("obstacles");
    }
  });
  line12.forEach((cell) => {
    if (Number(cell.getAttribute("y")) === randomNumber5) {
      cell.classList.add("obstacles");
    }
  });
}
function createRandomNumber() {
  let i = Math.ceil(Math.random() * 10);
  return i;
}

initializeButton.addEventListener("click", () => {
  initialize.hidden = true;
  main.hidden = false;
  createBoard();
});

ruleButton.addEventListener("click", () => {
  menu.hidden = true;
  ruleScreen.hidden = false;
});

backTomenuButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  ruleScreen.hidden = true;
  menu.hidden = false;
});

restartButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  createBoard();
});

startGameButton.addEventListener("click", () => {
  menu.hidden = true;
  initialize.hidden = false;
});
