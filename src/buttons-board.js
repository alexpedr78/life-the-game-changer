export function buttons() {
  newGameButton.addEventListener("click", () => {
    timeoutId = null;
    initializeScreen.hidden = true;
    newBoardButton.hidden = false;
    backTomenuButtonFromGame.hidden = false;
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
    dialog.close();
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
    dialog.close();
    gameContainer.innerHTML = "";
    countTimer = 0;
    clearInterval(timerInterval);
    createBoard();
    timeoutId = null;
  });
  newBoardFromEndButton.addEventListener("click", () => {
    endScreen.hidden = true;
    gameScreen.classList.add("flex");
    gameScreen.hidden = false;
    countTimer = 0;
    dialog.close();
    timeoutId = null;
    // removeEventListener("click", (event) => {
    //   attachEventToGameContainer;
    // });
    // gameContainer.addEventListener("click", (event) => {
    //   attachEventToGameContainer;
    // });
    createBoard();
  });
  menuFromEndButton.addEventListener("click", () => {
    // dialog.close();
    // gameContainer.innerHTML = "";
    timeoutId = null;
    endScreen.hidden = true;
    landingScreen.hidden = false;
  });
}
