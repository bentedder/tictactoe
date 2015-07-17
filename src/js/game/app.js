const React = require("react");
import GameActions from "../gameActions";
import _ from "underscore";
import View from "./view.jsx";

class Game {

  constructor(props) {
    this.render();
    this.createSquares();
  }

  render() {
    // jscs:disable
    React.render(<View/>, document.getElementById("game"));
  }

  createSquares() {
    let squares = [];
    let size = 3;
    let i = 0;
    _.times(size, function(row) {
      _.times(size, function(col) {
        squares.push({
          id: i,
          row: row,
          col: col,
          value: 0,
          owner: null
        });
        i++;
      });
    });
    GameActions.createSquares(squares);
  }

};

export default Game;
