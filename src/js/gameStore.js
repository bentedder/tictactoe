import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";
import logic from "./logic";
import { EventEmitter } from "events";
import _ from "underscore";

let ActionTypes = GameConstants.ActionTypes;

let data = {
  squares: [],
  messages: [{ type: "bot", text: "hello world" }],
  score: {
    bot: 0,
    human: 0    
  },
  activeUser: 1
};

class GameStore extends EventEmitter {

  constructor() {
    super();
    this.createSquares();
    this.recalculateSquareValues();
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

  createSquares() {
    let squares = logic.createSquares();
    data.squares = squares;
  }

  selectSquare(square) {
    let squares = _.each(data.squares, function(originalSquare) {
      if (originalSquare.id === square.id) {
        square.owner = data.activeUser;
      }
    });
    data.squares = squares;

    let status = logic.getBoardStatus(data.squares, data.activeUser);
    console.log(status);
    if (status.gameOver === true) {
      if (status.point === 1) {
        data.score.human += 1;
      } else if (status.point === 0) {
        data.score.bot += 1;
      }
      this.gameOver();
    } else {
      this.switchActiveUser();
      this.recalculateSquareValues();
    }
  }

  recalculateSquareValues() {
    let squares = logic.evaluateSquares(data.squares, data.activeUser);
    let _this = this;
    squares = _.filter(squares, function(square) {
      return square.owner === null;
    });

    let optimalChoice = _.max(squares, function(square) {
      return square.value;
    });

    if (data.activeUser === 0) {
      this.selectSquare(optimalChoice);
      this.emitChange();
    }
  }

  gameOver() {
    data.activeUser = 1;
    this.createSquares();
    this.recalculateSquareValues();
    console.log("it's all over guy");
    console.log(this.getState());
    this.emitChange();
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

    case ActionTypes.ADD_MESSAGE:
      data.messages.push(action.data.message);
      _GameStore.emitChange();
      break;

    case ActionTypes.UPDATE_SCORE:
      data.score = action.data.score;
      _GameStore.emitChange();
      break;

    case ActionTypes.GAME_OVER:
      data.messages.push(action.data.message);
      _GameStore.gameOver();
      _GameStore.emitChange();
      break;
    default:
      break;
  }
});
