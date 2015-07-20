import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";
import { EventEmitter } from "events";
import _ from "underscore";
import AI from "./ai";

var ActionTypes = GameConstants.ActionTypes;

var data = {
  board: [],
  grid: 0,
  over: false,
  score: {
    user: 0,
    tie: 0,
    bot: 0
  }
};

class GameStore extends EventEmitter {

  constructor() {
    super();
    data.board = AI.Board;
    data.grid = AI.GridSize
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
  }

  gameOver() {
    data.over = true;
  }

  reset() {
    data.over = false;
    AI.reset();
    data.board = AI.Board;
  }

}

let _GameStore = new GameStore();
export default _GameStore;

GameDispatcher.register((payload) => {
  let action = payload.action;
  switch(action.type) {

    case ActionTypes.SELECT_SQUARE:
      AI.selectSquare(action.data.square);
      data.board = AI.Board;
      if(AI.Over) _GameStore.gameOver();
      data.score = AI.Score;
      _GameStore.emitChange();
      break;

    case ActionTypes.RESET:
      _GameStore.reset();
      _GameStore.emitChange();
      break;

    default:
      break;
  }
});
