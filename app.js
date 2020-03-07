// const blocks = document.querySelectorAll('.block');
const player1 = 'X';
const player2 = 'O';
let currentTurn = player1;
const player1Moves = [];
const player2Moves = [];
const winningMoves = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];

const handleClick = element => {
  element.innerHTML = currentTurn;
  currentTurn === player1 ? player1Moves.push(element.id) : player2Moves.push(element.id);
  currentTurn === player1 ? currentTurn = player2 : currentTurn = player1;
  for (const val of winningMoves) {
    if (containsAll(val, player1Moves)) {
      return alert('Player X is the WINNER!!!');
    }
    if (containsAll(val, player2Moves)) {
      return alert('Player O is the WINNER!!!');
    }
  }
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