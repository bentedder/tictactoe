import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";

let ActionTypes = GameConstants.ActionTypes;

export default {
  
  updateScore: (score) => {
    GameDispatcher.handleAppAction({
      type: ActionTypes.UPDATE_SCORE,
      data: { score: score }
    });
  },

  setTurn: (user) => {
    console.log(user);
    GameDispatcher.handleAppAction({
      type: ActionTypes.SET_TURN,
      data: { user: user }
    });
  },

  sendMessage: (message) => {
    GameDispatcher.handleAppAction({
      type: ActionTypes.ADD_MESSAGE,
      data: { message: message }
    });
  },

  takeSquare: (square) => {
    GameDispatcher.handleAppAction({
      type: ActionTypes.TAKE_SQUARE,
      data: { square: square }
    })
  }
}
