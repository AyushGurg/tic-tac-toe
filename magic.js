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
  if (insignia == "x") {
    console.log("BIG X");
  } else if (insignia == "o") {
    console.log("BIG O");
  }
  return { playerName, insignia };
};

//factory for each div in the board
const square = (colIndex, rowIndex) => {
  console.log(this);
};

//function
function play(i, j) {
  if (Gameboard.playerTurn == "x") {
    Gameboard.board[i][j].querySelector("[data-x]").classList.add("active");
    Gameboard.playerTurn = "o";
  } else if (Gameboard.playerTurn == "o") {
    Gameboard.board[i][j].querySelector("[data-o]").classList.add("active");
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
    Gameboard.board[col][row] = div;
    Gameboard.board[col][row].addEventListener("click", function () {
      play(col, row);
    });
  }
}
