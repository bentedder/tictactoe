const React = require("react");
import Actions from "../actions";
import View from "./view.jsx";

class Game {

  constructor(props) {
    this.render();
  }

  render() {
    React.render(<View/>, document.getElementById("game"));
  }

};

export default Game;
