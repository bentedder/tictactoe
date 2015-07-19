import _ from "underscore";

let combinations = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

class AI {

  evaluateSquares(squares, user) {
    var _this = this;
    var _squares = "";

    _squares = _.each(squares, function(square) {
      if (square.owner !== null) {
        square.value = 0;
      } else {
        square.value = _this.iterate(squares, square.id, user);
      }
    });

    return _squares;
  }

  iterate(board, id, user) {
    var _this = this;
    // get all possible moves
    var value = 0;
    // iterate through each possible move
    var doIt = function() {
      var moves = _this.getPossibleMoves(board);
      _.each(moves, function(square) {
        square.owner = user;
        var status = _this.checkBoard(moves, user);
        square.owner = null;
        window.setTimeout(function() {
          if(status.over === true) {
            value += status.value;
            return;
          } else {
            user = 1 - user;
            doIt();
          }
        }, 1000);
      });
    };
    doIt();
    return value;
  }

  getPossibleMoves(squares) {
    var s = _.filter(squares, function(square) {
      return square.owner === null;
    });
    return s;
  }

  checkBoard(squares, user) {
    var status = {
          over: false,
          value: 0
        };
    var _this = this;

    _.each(combinations, function(combo, i) {
      var opponentIDs = _this.getIDs(squares, 1 - user);
      var userIDs = _this.getIDs(squares, user);
      var diffOpp = _.difference(combo, opponentIDs);
      var diffUser = _.difference(combo, userIDs);
      var opponentWins = diffOpp.length === 0;
      var userWins = diffUser.length === 0;
      var tieGame = _.where(squares, { owner: null } ).length < 1;

      if (tieGame) {
        _this.gameOver("nobody");
        status.over = true;
      }

      else if (opponentWins) {
        _this.gameOver(1-user);
        status.over = true;
        status.value -= 1
      }

      else if (userWins) {
        _this.gameOver(user);
        status.over = true;
        status.value += 1
      } 

      else {
        status.over = false;
      }
    });
    return status;
  }

  getIDs(squares, user) {
    var userSquares = _.filter(squares, function(square) {
      return square.owner === user;
    });

    var IDs = _.pluck(userSquares, "id");
    return IDs;
  }

  gameOver(user) {
    console.log("game over. winner is " + user)
  }

}
let _AI = new AI();
export default _AI;
