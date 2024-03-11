restartButton.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  createBoard();
});
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
  ruleScreen.hidden = true;
  menu.hidden = false;
});
startGameButton.addEventListener("click", () => {
  menu.hidden = true;
  initialize.hidden = false;
});
