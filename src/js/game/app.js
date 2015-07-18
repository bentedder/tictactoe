const React = require("react");
import View from "./view.jsx";

class Game {

  constructor(props) {
    this.render();
  }

  render() {
    // jscs:disable
    React.render(<View/>, document.getElementById("game"));
  }

};

export default Game;
