import clone from "clone";
import _ from "underscore";

let size = 3;
let combinations = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

var AI = {

  createSquares: function() {
    var squares = [];
    var i = 0;

    _.times(size, function(row) {
      _.times(size, function(col) {
        var square = {
          id: i,
          row: row,
          col: col,
          value: 1,
          owner: null
        };
        squares.push(square);
        i++;
      });
    });
    return squares;
  },

  evaluateSquares: function(squares, user) {
    let _this = this;
    let newSquares = clone(squares);
    let newUser = clone(user);

    _.each(newSquares, function(square) {
      if (square.owner !== null) {
        square.value = 0;
      } else {
        square.value = _this.minimax(newSquares, newUser)
      }
    });

    return newSquares;

  },

  iterate: function(squares, id, user) {
    var _this = this;
    var value = 0;
    // iterate through each possible move
    var doIt = function(squares) {
      squares[id].owner = user;      
      _.each(squares, function(square, i) {
        if (square.owner === null) {
          var status = _this.checkBoard(moves, user);
          if(status.over === true) {
            value += status.value;
            return;
          } else {
            user = 1 - user;
            doIt(squares);
          }
        }
      });
    };
    doIt(squares);

    return value;
  },

  minimax: function(squares, depth, user) {
    var _this = this;
    squares = clone(squares);
    var status = this.checkBoard(squares, user);
    console.log(status);
    if (status.over === true) {
      console.log("we got to a result!!!!");
      return status.value;
    }

    if (user === 0) {
      var bestScore = -Infinity;
      _.each(squares, function(possibility) {
        if(possibility.owner === null) {
          console.log("trying user 0 in spot", possibility.id);
          var newGame = clone(squares);
          newGame[possibility.id].owner = 0;
          var score = _this.minimax(newGame, depth - 1, 1);
          if (score > bestScore) {
            bestScore = score;
          }
        }
      });
      return bestScore;
    } else {
      var bestScore = Infinity;
      _.each(squares, function(possibility) {
        if(possibility.owner === null) {
          var newGame = clone(squares);
          console.log("trying user 1 in spot", possibility.id);
          newGame[possibility.id].owner = 1;
          var score = _this.minimax(newGame, depth - 1, 0);
          if (score < bestScore) {
            bestScore = score;
          }
        }
      });
      return bestScore;
    }

  },

  checkBoard: function(squares, user) {
    var status = {
          over: false,
          value: 0,
          squaresleft: _.filter(squares, function(square) { return square.owner === null}).length
        };
    var _this = this;

    _.each(combinations, function(combo, i) {
      var opponentIDs = _this.getIDs(squares, 1 - user);
      var userIDs = _this.getIDs(squares, user);
      var diffOpp = _.difference(combo, opponentIDs);
      var diffUser = _.difference(combo, userIDs);
      var opponentWins = diffOpp.length === 0;
      var userWins = diffUser.length === 0;
      var tieGame = _.every(squares, function(square) { return square.owner !== null } );

      if (tieGame) {
        _this.gameOver("nobody");
        status.over = true;
      }

      else if (opponentWins) {
        _this.gameOver(1-user);
        status.over = true;
        status.value = -1;
      }

      else if (userWins) {
        _this.gameOver(user);
        status.over = true;
        status.value = 1;
      }

      else {
        status.over = false;
        status.value = 0;
      }

    });
    return status;
  },

  getIDs: function(squares, user) {
    var userSquares = _.filter(squares, function(square) {
      return square.owner === user;
    });

    var IDs = _.pluck(userSquares, "id");
    return IDs;
  },

  gameOver: function(user) {
  }

}

export default AI;
