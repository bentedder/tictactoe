import _ from "underscore";
import Grid from "./grid";
const React = require("react");
import GameView from "./gameView.jsx";


class Game {

  constructor() {
    this.players = [];
    this.currentPlayer = 0;
    this.grid = new Grid({ size: 3 });

    this.createBoard();
  }

  addPlayer(player) {
    this.players.push(player);
  }

  createBoard() {
    // jscs:disable
    React.render(<GameView />, document.getElementById('application') );
  }

  start() {
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
    this.currentPlayer = 0;
    this.turn();
    this.currentPlayer = 1;
    this.turn();
  }

  turn(choice) {
    let p = this.players[this.currentPlayer];
    console.log(p.name + " has played " + p.getSpacesPlayed().length + " times");
    if (!choice) {
      choice = this.findOptimalChoice();
    }
    this.grid.removeSpace(choice);
    console.log(p.name + " chose " + choice);
    p.addSpace(this.grid.getSpaceAtIndex(choice));
    console.log(this.grid.getAvailableSpaces().length + " more spaces available");
  }

  findOptimalChoice() {
    let canIWin = this.canIWin();
    // let canOpponentWin = this.canOpponentWin();
    
    console.log(canIWin);
    return _.random(0,8);
  }

  canIWin() {
    var player = this.players[this.currentPlayer];
    let played = player.getSpacesPlayed();
    if (played.length < 2) {
      return false;
    } else {
      var groups = _.groupBy(played, function(space) {
        return space.row;
      });
      return groups;
    }
    return true;
  }

  canOpponentWin() {
    var player = this.players[1 - this.currentPlayer];
    if (player.spacesPlayed.length < 2) return false;
    return true;
  }

}

export default Game;
