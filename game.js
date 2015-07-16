import _ from 'underscore';
import Actions from './src/actions';
import Grid from './grid';

class Game {

  constructor(options) {
    this.players = [];
    this.grid = new Grid({ size: 3 });
  }

  addPlayer(player) {
    this.players.push(player);
  }

  start() {
    this.turn(this.players[0]);
  }

  turn(player, choice) {
    console.log(player.name + " is taking a turn");
    if(!choice) {
      var choice = this.findOptimalChoice();
    }

    Actions.selectSpace(player, choice);
  }

  findOptimalChoice() {
    return _.random(0,8);
  }

}

export default Game;