import { Player } from "./Player.js"
// screen
const landingScreen = document.getElementById("landing-page")
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
let player
let modal = document.getElementById("modal")
let timeoutId = null

function createBoard() {
	player = new Player("alexis")

	for (let i = 12; i >= 0; i--) {
		let divLine = document.createElement("div")
		divLine.classList.add("divLine")
		for (let j = 0; j < 10; j++) {
			const cell = document.createElement("div")
			cell.classList.add("cell")
			// cell.textContent = `i: ${i}, j ${j}`
			cell.setAttribute("x", i)
			cell.setAttribute("y", j)
			player.cellArray.push(cell)
			divLine.append(cell)
		}
		gameContainer.append(divLine)
	}

	// player.loopMove()
}

initializeButton.addEventListener("click", () => {
	initializeScreen.hidden = true
	gameScreen.hidden = false
	createBoard()
})

ruleButton.addEventListener("click", () => {
	landingScreen.hidden = true
	ruleScreen.hidden = false
})

backTomenuButton.addEventListener("click", () => {
	gameContainer.innerHTML = ""
	ruleScreen.hidden = true
	landingScreen.hidden = false
})

restartButton.addEventListener("click", () => {
	gameContainer.innerHTML = ""
	createBoard()
})

startGameButton.addEventListener("click", () => {
	landingScreen.hidden = true
	initializeScreen.hidden = false
})

gameContainer.addEventListener("click", (event) => {
	if (timeoutId) return
	const clickedCell = event.target
	console.log(`Are we clicking on the next line?`)
	console.log(player.x)
	console.log(clickedCell)
	let xFromHtmlElement = Number(clickedCell.getAttribute("x"))
	if (player.x + 1 === xFromHtmlElement) {
		console.log("We clicked on the next line, do something")
		player.moveUp()
		player.hidePlayer()
		player.position = clickedCell

		player.displayPlayer()
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(2)
		setRandomObstacle(3)
		setRandomObstacle(4)

		console.log(player.position)

		if (player.position.classList.contains("obstacles")) {
			// move down etc.
		}

		timeoutId = setTimeout(() => {
			document.querySelectorAll(".obstacles").forEach((cell) => {
				cell.classList.remove("obstacles")
				timeoutId = null
			})
		}, 1000)
	} else {
		console.log("We clicked on an other line, do nothing.")
	}
})

function setRandomObstacle(num) {
	const line = document.querySelectorAll(`.cell[x="${num}"]`)
	randomObstaclePerLine(line)
}

function randomObstaclePerLine(line) {
	let randomNumber = Math.floor(Math.random() * line.length)
	line[randomNumber].classList.add("obstacles")
}
