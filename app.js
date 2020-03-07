const player1 = 'X';
const player2 = 'O';
const winningMoves = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];
const winnerHeading = document.querySelector('#winner');
const blocks = document.querySelectorAll('.block');
let currentTurn = player1;
let player1Moves = [];
let player2Moves = [];

const reset = () => {
  player2Moves = [];
  player1Moves = [];
  currentTurn = player1;
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].innerHTML = '';
  }
  winnerHeading.innerHTML = '';
}

const handleClick = element => {
  element.innerHTML = currentTurn;
  currentTurn === player1 ? player1Moves.push(element.id) : player2Moves.push(element.id);
  for (const val of winningMoves) {
    if (containsAll(val, player1Moves)) {
      winnerHeading.innerHTML = 'Player X is the WINNER!!!';
    }
    if (containsAll(val, player2Moves)) {
      winnerHeading.innerHTML = 'Player O is the WINNER!!!';
    }
  }
  currentTurn === player1 ? currentTurn = player2 : currentTurn = player1;
}

const containsAll = (targets, playerMoves) => {
  let output = true;
  for (const val of targets) {
    if (playerMoves.includes(val)) {
      continue;
    } else {
      output = false;
    }
  }
  return output;
}