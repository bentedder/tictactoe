import _ from "underscore";

class AI {

  evaluateSquares(squares, user) {
    let _this = this;
    _.each(squares, function(square) {
        if (square.owner !== null) {
          square.value = 0;
        } else {
          square.value = _this.getSquareValue(squares, square, user);
        }
    });

    return squares;
  }

  getSquareValue(squares, square, user) {
    let value = 3;
    return value;
  }

  playImaginaryGame(squares, square, user) {
    console.log("playing imaginary game with " + _.filter(squares, function(square) { return square.owner === null }).length + " squares left as user " + user + ", starting from square " + square.id);
  }

}

export default new AI();
