import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";
import { EventEmitter } from "events";
import _ from "underscore";
import bot from "./bot";
import clone from "clone";

var ActionTypes = GameConstants.ActionTypes;

var data = {
  players: [],
  squares: [],
  activeUser: 0
};

class GameStore extends EventEmitter {

  constructor() {
    super();
  }

  getState() {
    return data;
  }

  emitChange() {
    console.log("change being emitted");
    this.emit("CHANGE");
  }

  addChangeListener(cb) {
    this.on("CHANGE", cb);
  }

  removeChangeListener(cb) {
    this.removeListener("CHANGE", cb);
  }

  start() {
    data.squares = bot.createSquares();
    // bot.evaluateSquares(data.squares, data.activeUser);
  }

  switchActiveUser() {
    data.activeUser = 1 - data.activeUser;
  }

  selectSquare(square) {
    data.squares[square.id].owner = data.activeUser;
  }

  takeTurns() {
    this.switchActiveUser();
    // bot.evaluateSquares(data.squares, data.activeUser);
    
    if (data.players[1].type === "bot" && data.activeUser === 1) {
      var optimalChoice = _.max(data.squares, function(square) {
        return square.value;
      });
      this.selectSquare(optimalChoice);
    }
  }

  gameOver() {
    this.createSquares();
    console.log("it's all over guy");
  }

  reset() {
    this.start();
  }

}

let _GameStore = new GameStore();
export default _GameStore;

GameDispatcher.register((payload) => {
  let action = payload.action;
  switch(action.type) {

    case ActionTypes.SELECT_SQUARE:
      _GameStore.selectSquare(action.data.square);
      _GameStore.switchActiveUser();
      _GameStore.emitChange();
      if(_.filter(data.squares, function(square) { return square.owner === null}).length < 4) {
        var d = bot.minimax(clone(data.squares), 10, clone(data.activeUser));
        console.log("best choice is " + d);
      }
      break;

    case ActionTypes.START:
      data.players = [
        { name: "Player 1", id: 0, type: "human" },
        { name: "Player 2", id: 1, type: action.data.opponentType }
      ];
      _GameStore.start();
      _GameStore.emitChange();
      break;

    default:
      break;
  }
});
