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

  sendMessage: (message) => {
    GameDispatcher.handleAppAction({
      type: ActionTypes.ADD_MESSAGE,
      data: { message: message }
    });
  },

  gameOver: (message) => {
    GameDispatcher.handleAppAction({
      type: ActionTypes.GAME_OVER,
      data: { message: message }
    });
  }

}
