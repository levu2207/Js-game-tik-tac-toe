import { TURN } from "./constants.js";
import {
  getCellElementList,
  getCurrentTurnElement,
  getGameStatusElement,
  getCellElementAtIdx,
} from "./selectors.js";

// Global variables
let currentTurn = TURN.CROSS;
let isGameEnded = false;
let cellValues = new Array(9).fill("");

function toggleTurn() {
  currentTurn = currentTurn === TURN.CROSS ? TURN.CIRCLE : TURN.CROSS;
}

function handleCellClick(cell, index) {
  const isClick =
    cell.classList.contains(TURN.CIRCLE) || cell.classList.contains(TURN.CROSS);

  if (isClick) return;

  // set selected cell
  cell.classList.add(currentTurn);

  // toggle TURN
  toggleTurn();
  console.log("click", cell, index);
  //update turn on DOM element
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CROSS, TURN.CIRCLE);
    currentTurnElement.classList.add(currentTurn);
  }
}

function initCellElementList() {
  const cellElementList = getCellElementList();

  cellElementList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}
/**
 * TODOs
 *
 * 1. Bind click event for al cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value
 *
 *
 * 3. If game is win or ended --> show replay button
 * 4. On replay button click --> reset game to play again.
 */
(() => {
  // bind click event for all li element
  initCellElementList();
  // bind click event for replay button

  //...
})();
