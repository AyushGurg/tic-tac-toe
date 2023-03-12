// module for the Gameboard
const Gameboard = (() => {
  // this keeps in track whose turn it is
  let playerTurn = "x";
  let board = [
    [, , ,],
    [, , ,],
    [, , ,],
  ];

  return { playerTurn, board };
})();

// factory for the player
const player = (playerName, insignia) => {
  // if (insignia == "x") {
  //   console.log("BIG X");
  // } else if (insignia == "o") {
  //   console.log("BIG O");
  // }
  return { playerName, insignia };
};

//factory for each div in the board
const square = (colIndex, rowIndex) => {
  console.log(this);
};

//function
function checkingwin(col, row, playerTurn) {
  let min = 0,
    middle = 1,
    max = 2;
  //checking horizontal
  // each col in the same row much have the same symbol
  if (
    Gameboard.board[min][row].spot.classList.contains(playerTurn + "-taken") &&
    Gameboard.board[middle][row].spot.classList.contains(
      playerTurn + "-taken"
    ) &&
    Gameboard.board[max][row].spot.classList.contains(playerTurn + "-taken")
  ) {
    console.log("h win");
  }
  //checking vertical
  if (
    Gameboard.board[col][min].spot.classList.contains(playerTurn + "-taken") &&
    Gameboard.board[col][middle].spot.classList.contains(
      playerTurn + "-taken"
    ) &&
    Gameboard.board[col][max].spot.classList.contains(playerTurn + "-taken")
  ) {
    console.log("v win");
  }

  // checking diagonal

  if (
    Gameboard.board[min][min].spot.classList.contains(playerTurn + "-taken") &&
    Gameboard.board[middle][middle].spot.classList.contains(
      playerTurn + "-taken"
    ) &&
    Gameboard.board[max][max].spot.classList.contains(playerTurn + "-taken")
  ) {
    console.log("p win");
  } else if (
    Gameboard.board[min][max].spot.classList.contains(playerTurn + "-taken") &&
    Gameboard.board[middle][middle].spot.classList.contains(
      playerTurn + "-taken"
    ) &&
    Gameboard.board[max][min].spot.classList.contains(playerTurn + "-taken")
  ) {
    console.log("n win");
  }
}

function play(i, j) {
  if (Gameboard.playerTurn == "x" && !Gameboard.board[i][j].taken) {
    Gameboard.board[i][j].spot
      .querySelector("[data-x]")
      .classList.add("active");
    Gameboard.board[i][j].taken = true;
    Gameboard.board[i][j].spot.classList.add("x-taken");
    checkingwin(i, j, Gameboard.playerTurn);
    Gameboard.playerTurn = "o";
  } else if (Gameboard.playerTurn == "o" && !Gameboard.board[i][j].taken) {
    Gameboard.board[i][j].spot
      .querySelector("[data-o]")
      .classList.add("active");
    Gameboard.board[i][j].taken = true;
    Gameboard.board[i][j].spot.classList.add("o-taken");
    checkingwin(i, j, Gameboard.playerTurn);
    Gameboard.playerTurn = "x";
  }
}
//Global stuff

// making two players for the game
let playerX = player("playerX", "x");
let playerO = player("playerO", "o");

//THis updates the DOM for the gameboard
for (let col = 0; col < Gameboard.board.length; col++) {
  for (let row = 0; row < Gameboard.board.length; row++) {
    let div = document.querySelector(".row-" + row + ".col-" + col);
    let spotTaken = false;
    Gameboard.board[col][row] = { spot: div, taken: spotTaken };
    Gameboard.board[col][row].spot.addEventListener("click", function () {
      play(col, row);
    });
  }
}
