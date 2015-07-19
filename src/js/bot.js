var clone = require("clone");
var _ = require("underscore");

var size = 3;
var combinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

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
    var _this = this;
    var newSquares = clone(squares);
    var newUser = clone(user);

    _.each(newSquares, function(square) {
      if (square.owner !== null) {
        square.value = 0;
      } else {
        square.value = 0;
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

  oldminimax: function(squares, user) {
    var _this = this;
    squares = clone(squares);
    _user = clone(user);
    var status = this.checkBoard(squares, user);
    if (status.over === true) {
      console.log("game over", status.value);
      return status.value;
    }
    if (user === 0) {
      var bestScore = -Infinity;
      _.map(squares, function(possibility) {
        if(possibility.owner === null) {
          console.log("trying user 0 in spot", possibility.id);
          var newGame = clone(squares);
          newGame[possibility.id].owner = 0;
          _user = 1;
          var score = _this.minimax(newGame, 1);
          if(score > bestScore) {
            bestScore = score;
          }
          return bestScore;
        }
      });
      console.log("user best score", bestScore);
      return bestScore;
    } else {
      var bestScore = Infinity;
      _.map(squares, function(possibility) {
        if(possibility.owner === null) {
          console.log("trying user 1 in spot", possibility.id);
          var newGame = clone(squares);
          newGame[possibility.id].owner = 1;
          _user = 0;
          var score = _this.minimax(newGame, 0);
          if(score < bestScore) {
            bestScore = score;
          }
          return bestScore;
        }
      });
      console.log("opponent best score", bestScore);
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
        status.value = 0;
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
    console.log(user, "wins");
  }

}

module.exports = AI;
