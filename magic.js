// module for the Gameboard
const Gameboard = (() => {
  let board = [
    [, , ,],
    [, , ,],
    [, , ,],
  ];

  return { board };
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

// making two players for the game
let playerX = player("playerX", "x");
let playerO = player("playerO", "0");

for (let col = 0; col < Gameboard.board.length; col++) {
  for (let row = 0; row < Gameboard.board.length; row++) {
    let div = document.querySelector(".row-" + row + ".col-" + col);
    Gameboard.board[col][row] = div;
  }
}
