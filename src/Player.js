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
            if (
              Number(line.getAttribute(`.cell[x="${this.x}"]`)) >
              Number(`.cell[x="${this.x}"]`)
            )
              console.log(`.cell[x="${this.x}"]`);
            line.classList.add("unclickable");
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
