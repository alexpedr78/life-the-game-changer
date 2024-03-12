// screen
const menu = document.getElementById("landing-page")
const initializeScreen = document.getElementById("initialize-screen")
const gameScreen = document.getElementById("game-screen")
const ruleScreen = document.getElementById("rule-screen")
const endScreen = document.getElementById("end-screen")

// button

const ruleButton = document.getElementById("rule-btn")
const startGameButton = document.getElementById("start-init")
const restartButton = document.getElementById("restart")
const initializeButton = document.getElementById("send")
const backTomenuButton = document.getElementById("menu")

// other
const gameContainer = document.getElementById("game")
const cellArray = []
let modal = document.getElementById("modal")
// let flag = true;
export class Player {
	constructor(name) {
		this.name = name
		this.x = 0
		this.y = 0
		this.position = null
		this.cellArray = []
	}

	comparePosition() {
		for (let elem of this.cellArray) {
			if (
				elem.classList.contains("obstacles") &&
				elem.classList.contains("playerPosition")
			) {
				elem.classList.remove("playerPosition")
				this.x -= 2
			}
		}
		this.position = document.querySelector(
			`.cell[x="${this.x}"][y="${this.y}"]`
		)
		this.position.classList.add("playerPosition")

		this.cellArray.forEach((cell) => {
			cell.classList.remove("unclickable")
			// cell.removeEventListener("click", this.doThing.bind(this));
			if (Number(cell.getAttribute("x")) <= this.x) {
				cell.classList.add("unclickable")
			} else if (Number(cell.getAttribute("x")) > this.x + 1) {
				cell.classList.add("unclickable")
			}
		})
		setTimeout(() => {
			this.loopMove()
		}, 1000)
		setTimeout(() => {
			this.reinitializeBlackBoxes()
		}, 1500)
	}

	moveUp() {
		this.x++
	}

	hidePlayer() {
		if (!this.position) return
		this.position.classList.remove("playerPosition")
	}
	displayPlayer() {
		this.position.classList.add("playerPosition")
	}

	loopMove() {
		// flag = true;
		// const intervalId = setTimeout(() => {
		if (this.x < 13) {
			modal.hidden = false
			const upperLine = document.querySelectorAll(`.cell[x="${this.x + 1}"]`)
			upperLine.forEach((cell) => {
				cell.addEventListener("click", this.doThing.bind(this))
			})
			// flag = false;
		} else {
			gameScreen.hidden = true
			gameContainer.innerHTML = ""
			endScreen.hidden = false
			// clearInterval(intervalId);
		}
		// }, 1000);
	}

	doThing(e) {
		const cell = e.currentTarget
		console.log(cell)
		modal.hidden = true
		if (this.position) {
			this.position.classList.remove("playerPosition")
		}
		cell.classList.add("playerPosition")
		this.position = cell
		this.x = Number(cell.getAttribute("x"))
		this.y = Number(cell.getAttribute("y"))
		this.setRandomObstacle()

		this.comparePosition()
	}

	setRandomObstacle() {
		const line3 = document.querySelectorAll('.cell[x="3"]')
		const line6 = document.querySelectorAll('.cell[x="6"]')
		const line9 = document.querySelectorAll('.cell[x="9"]')
		const line11 = document.querySelectorAll('.cell[x="11"]')
		const line12 = document.querySelectorAll('.cell[x="12"]')

		this.randomObstaclesPerLine(line3)
		this.randomObstaclesPerLine(line3)
		this.randomObstaclesPerLine(line3)
		this.randomObstaclesPerLine(line3)
		this.randomObstaclesPerLine(line3)
		this.randomObstaclesPerLine(line3)
		this.randomObstaclesPerLine(line3)

		// console.log(line3);
	}
	// TEST
	randomObstaclesPerLine(line) {
		let randomNumber = this.createRandomNumber()
		// line[randomNumber].classList.add("obstacles");
		line.forEach((cell) => {
			if (Number(cell.getAttribute("y")) === randomNumber) {
				cell.classList.add("obstacles")
			}
		})
	}

	createRandomNumber() {
		let i = Math.ceil(Math.random() * 10)
		return i
	}

	reinitializeBlackBoxes() {
		this.cellArray.forEach((cell) => {
			cell.classList.remove("obstacles")
		})
	}
}
