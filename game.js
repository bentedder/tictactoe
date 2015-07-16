import _ from 'underscore';
import Grid from './grid';

class Game {

  constructor(options) {
    this.players = [];
    this.currentPlayer = 0;
    this.grid = new Grid({ size: 3 });
  }

  addPlayer(player) {
    this.players.push(player);
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
    console.log("------");
    console.log(p.name + " has played " + p.getSpacesPlayed().length + " times");
    if(!choice) {
      var choice = this.findOptimalChoice();
    }
    this.grid.removeSpace(choice);
    console.log(p.name + " chose " + choice);
    p.addSpace(this.grid.getSpaceAtIndex(choice));
    console.log(this.grid.getAvailableSpaces().length + " more spaces available");
  }

  findOptimalChoice() {
    let canIWin = this.canIWin();
    let canOpponentWin = this.canOpponentWin();
    
    console.log(canIWin);
    return _.random(0,8);
  }

  canIWin() {
    var player = this.players[this.currentPlayer];
    let played = player.getSpacesPlayed();
    if(played.length < 2) {
      return false;
    } else {
      var groups = _.groupBy(played, function(space) {
        return space.row
      });
      return groups;
    }
    return true;
  }

  canOpponentWin(player) {
    var player = this.players[1 - this.currentPlayer];
    if(player.spacesPlayed.length < 2) return false;
    return true;
  }

}

export default Game;