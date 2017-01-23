const readline = require('readline');

var pieceCount = 0;
var board = 
[
  ['', 'A', 'B', 'C'],
  [1, ['', '', '']],
  [2, ['', '', '']],
  [3, ['', '', '']]
]
var columns = {
  'A': 0,
  'B': 1, 
  'C': 2
};

console.log(board);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//player 1 is x
//player 2 is o

function createQuestion(player, type, cb) {
  var symbol = player === 1 ? 'x' : 'o';
  var question = type === "pick" ? `Player ${player}: pick a spot to place your next piece (eg. B2): ` : `Player ${player}: pick again, that spot was taken already`;
  rl.question(question, (answer) => {
    console.log('You selected: ', answer);
    var column = columns[answer.split('')[0]];
    var row = answer.split('')[1];
    console.log('column ', column, 'row ', row);
    if (board[row][1][column] === '') {
      board[row][1][column] = symbol;
    } else {
      createQuestion(player, 'pick again', cb);
    }
    console.log(board)
    cb();
  });
}


//NEED TO CONVERT THESE ALL TO THE RIGHT INDEXING
//INDEXES OFF BY A BIT BECAUSE OF THE EXTRA COLUMNS
function checkRows(row) {
  var initialPiece = board[i][1][0];
  for (var i = 1; i < 3; i++) {
    if (board[row][1][i] !== initialPiece) {
      return false;
    }
  }
  return true;
}

function checkColumns(column) {
  var initialPiece = board[0][1][column];
  for (var j = 1; j < 3; j++) {
    if (board[j][1][column] !== initialPiece) {
      return false;
    }
  }
  return true;
}

function checkRightDiagonal() {
  var initialPiece1 = board[0][1][0];
  for (var j = 1; j < 3; j++) {
    if (board[j][1][j] !== initialPiece) {
      return false;
    }
  }
  return true;
}

function checkLeftDiagonal() {
  var initialPiece2 = board[0][1][2];

}

createQuestion(1, 'pick', () => {
  createQuestion(2, 'pick', ()=> {
    createQuestion(1, 'pick', () => {
      createQuestion(2, 'pick', () => {
        createQuestion(1, 'pick', () => {

        })
      })
    })
  })
})




