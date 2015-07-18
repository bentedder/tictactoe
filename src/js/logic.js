import AppActions from "./appActions";
import _ from "underscore";

let size = 3;
let combinations = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

class Jack {

  createSquares() {
    let squares = [];
    let i = 0;

    _.times(size, function(row) {
      _.times(size, function(col) {
        let square = {
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
  }

  evaluateSquares(squares, user) {
    console.clear();
    let opponentIDs = this.getIDs(squares, 1 - user);
    let userIDs = this.getIDs(squares, user);
    let _this = this;

    this.resetSquareValues(squares);

    _.each(combinations, function(combo, i) {
      let diffOpp = _.difference(combo, opponentIDs);
      let intOpp = _.intersection(combo, opponentIDs);
      let diffUser = _.difference(combo, userIDs);

      let opponentWins        = diffOpp.length === 0;
      let userWins            = diffUser.length === 0;
      let comboIsPossible     = diffOpp.length === 3;
      let opponentAboutToWin  = (diffOpp.length < 2) && (diffUser.length === 3);
      let userAboutToWin      = (diffUser.length < 2) && (diffOpp.length === 3);

      console.log(intOpp);

      if (opponentWins) {
        _this.gameOver("The computer won...of course.")
      }

      else if (userWins) {
        _this.gameOver("You won...wait a second.");
      }

      else if (opponentAboutToWin) {
        _this.opponentWinning(squares, diffOpp[0]);
      }

      else if (userAboutToWin) {
        _this.userWinning(squares, diffUser[0]);
      }

      else {
        _this.devaluePlayedSquares(squares);
        
        if (comboIsPossible) {
          _this.setOpenSquareValues(squares, combo);
        }
      }

    });

    return squares;
  }

  setOpenSquareValues(squares, combo) {
    _.map(squares, function(square) {
      if(_.contains(combo, square.id)) {
        square.value += 1;
      }
    });
  }

  userWinning(squares, diff) {
    console.log("you are about to win");
    squares = _.map(squares, function(square) {
      if( square.id === diff ) {
        square.value += 100;
      }
      return square;
    });
  }

  opponentWinning(squares, diff) {
    console.log("opponent is about to win at " + diff);
    squares = _.map(squares, function(square) {
      if( square.id === diff ) {
        square.value += 50;
      }
      return square;
    });
  }

  devaluePlayedSquares(squares) {
    _.each(squares, function(square) {
      if (square.owner !== null) {
        square.value = null;
      }
    });
  }

  resetSquareValues(squares) {
    _.map(squares, function(square) {
      square.value = 0;
      return square;
    });
    return squares;
  }

  gameOver(msg) {
    console.log(msg);
  }

  getIDs(squares, user) {
    let userSquares = _.filter(squares, function(square) {
      return square.owner === user;
    });

    let IDs = _.pluck(userSquares, "id");
    return IDs;
  }

}


export default new Jack();
