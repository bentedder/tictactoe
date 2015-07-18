const React = require("react");
import View from "./view.jsx";

class Game {

  constructor(props) {
    this.init();
  }

  init() {
    this.createPlayers();
    this.drawBoard();
    this.chooseWhoStarts();
    this.assignXO();
    this.play();
  }

  createPlayers() {

  }

  drawBoard() {
    // jscs:disable
    React.render(<View/>, document.getElementById("game"));
  }

  chooseWhoStarts() {

  }

  assignXO() {
    
  }

  play() {
    this.selectOpenSquare();
    let status = this.checkBoardStatus();
    if(status === "over") {
      this.endGame();
    } else {
      this.takeTurns();
    }
  }

  selectOpenSquare() {
    // choose how to select
  }

  takeTurns() {
    // switch users
    this.play();
  }

  checkBoardStatus() {
    
  }

};

export default Game;
