import AppActions from "./appActions";
import _ from "underscore";

let size = 3;
let combinations = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
let preferred = [0,2,6,8];
let status = {
  gameOver: false,
  winner: "",
  point: null
};

class Logic {

  createSquares() {
    status.gameOver = false;
    status.winner = "";
    status.point = null;

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
      let diffUser = _.difference(combo, userIDs);

      let opponentWins        = diffOpp.length === 0;
      let userWins            = diffUser.length === 0;
      let tieGame             = _.where(squares, { owner: null } ).length < 1;
      let comboIsPossible     = diffOpp.length === 3;
      let opponentAboutToWin  = (diffOpp.length < 2) && (diffUser.length === 3);
      let userAboutToWin      = (diffUser.length < 2) && (diffOpp.length === 3);

      console.log(diffOpp);

      console.log(tieGame, opponentWins, userWins);

      if (tieGame) {
        _this.gameOver();
      }

      else if (opponentWins) {
        _this.gameOver(1-user);
      }

      else if (userWins) {
        _this.gameOver(user);
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
      if(_.contains(preferred, square.id)) {
        square.value += 1;
      }
      if(square.id === 4) {
        square.value += 2;
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

  gameOver(user) {
    status.gameOver = true;
    status.point = user ? user : "tie";
    status.winner = user ? user + " is the winner!" : "It's a tie";
  }

  getIDs(squares, user) {
    let userSquares = _.filter(squares, function(square) {
      return square.owner === user;
    });

    let IDs = _.pluck(userSquares, "id");
    return IDs;
  }

  getBoardStatus(squares, user) {
    this.evaluateSquares(squares, user);
    return status;
  }

}


export default new Logic();
