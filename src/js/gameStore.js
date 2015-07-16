import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";
import { EventEmitter } from "events";

let ActionTypes = GameConstants.ActionTypes;

let data = {
  message: "waiting to start",
  score: 0,
  squares: []
};

class GameStore extends EventEmitter {

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

}

let _GameStore = new GameStore();

export default _GameStore;

GameDispatcher.register((payload) => {
  let action = payload.action;
  switch(action.type) {
    case ActionTypes.START:
      data.message = action.data.message;
      _GameStore.emitChange();
      break;
    case ActionTypes.UPDATE_SCORE:
      data.score = action.data.score;
      _GameStore.emitChange();
      break;
    case ActionTypes.CREATE_SQUARES:
      data.squares = action.data.squares;
      _GameStore.emitChange();
      break;
    default:
      break;
  }
});