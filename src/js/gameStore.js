import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";
import logic from "./logic";
import { EventEmitter } from "events";
import _ from "underscore";
import bot from "./bot";

let ActionTypes = GameConstants.ActionTypes;

let data = {
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
    this.emit("CHANGE");
  }

  addChangeListener(cb) {
    this.on("CHANGE", cb);
  }

  removeChangeListener(cb) {
    this.removeListener("CHANGE", cb);
  }

  switchActiveUser() {
    data.activeUser = 1 - data.activeUser;
    let status = logic.getBoardStatus(data.squares, data.activeUser); 
    if (status.gameOver === true) {
      this.gameOver();
    } else {
      if (data.players[1].type === "bot" && data.activeUser === 1) {
        let optimalChoice = _.max(data.squares, function(square) {
          return square.value;
        });
        this.selectSquare(optimalChoice);
      }
    }
  }

  createSquares() {
    let squares = logic.createSquares();
    data.squares = squares;
  }

  selectSquare(square) {
    _.map(data.squares, function(originalSquare) {
      if (originalSquare.id === square.id) {
        square.owner = data.activeUser;
      }
      return originalSquare;
    });
    this.recalculateSquareValues();
    this.switchActiveUser();
  }

  recalculateSquareValues() {
    let squares = bot.evaluateSquares(data.squares, data.activeUser);
    data.squares = squares;
  }

  gameOver() {
    this.createSquares();
    console.log("it's all over guy");
  }

}

let _GameStore = new GameStore();

export default _GameStore;

GameDispatcher.register((payload) => {
  let action = payload.action;
  switch(action.type) {

    case ActionTypes.SELECT_SQUARE:
      _GameStore.selectSquare(action.data.square);
      _GameStore.emitChange();
      break;

    case ActionTypes.START:
      data.players = [
        { name: "Player 1", id: 0, type: "human" },
        { name: "Player 2", id: 1, type: action.data.opponentType }
      ];
      _GameStore.createSquares();
      _GameStore.recalculateSquareValues();
      _GameStore.emitChange();
      break;

    default:
      break;
  }
});
