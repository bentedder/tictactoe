import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";
import { EventEmitter } from "events";
import _ from "underscore";

let ActionTypes = GameConstants.ActionTypes;
let combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]
];

let data = {
  squares: [],
  messages: [{ type: "bot", text: "hello world" }],
  score: {
    bot: 0,
    human: 0    
  },
  activeUser: 0
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
    let squares = [];
    let size = 3;
    let i = 0;
    let _this = this;
    _.times(size, function(row) {
      _.times(size, function(col) {
        let square = {
          id: i,
          row: row,
          col: col,
          value: 1,
          owner: null
        };
        squares.push(square);
        i++;
      });
    });
    data.squares = squares;
  }

  selectSquare(square) {
    let squares = _.each(data.squares, function(originalSquare) {
      if (originalSquare.id === square.id) {
        square.owner = data.activeUser;
      }
    });
    data.squares = squares;
    this.switchActiveUser();
    this.recalculateSquareValues();
  }

  recalculateSquareValues() {
    let _this = this;


    // owned squares have zero value
    _.each(data.squares, function(square) {
      if (square.owner !== null) {
        square.value = 0;
      } else {
        let value = 0;
        _.each(combos, function(combo) {
          if(_.contains(combo, square.id)) {
            value++;
          }
        });
        square.value = value;
      }
    });

    // look for winning squares
    let rows = [];
    _.times(3, function(i) {
      let row = _.where(data.squares, { row: i });
      rows.push(row);
    });

    _.each(rows, function(row, i) {
      _.each(row, function(square) {
        if (square.owner === 1- data.activeUser) {
          // this is a square I don't own, so this row is useless to me
          console.log("row " + i + " is useless to me");
        }
      });
    });

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

    default:
      break;
  }
});
