const inputName = document.getElementById("name");
export class Player {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.position = null;
    this.cellArray = [];
  }

  moveDown() {
    this.x -= 2;
    console.log(this.x, this.y, this.position);
  }
  moveUp() {
    this.x++;
  }
  hidePlayer() {
    if (!this.position) return;
    this.position.classList.remove("playerPosition");
  }
  displayPlayer() {
    this.position.classList.add("playerPosition");
  }
  setNewPosition(cell) {
    this.position = cell;
    this.x = +this.position.getAttribute("x");
    this.y = +this.position.getAttribute("y");
  }
}
