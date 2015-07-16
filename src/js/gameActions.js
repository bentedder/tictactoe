import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";

let ActionTypes = GameConstants.ActionTypes;

export default {
  
  startGame: () => {
    GameDispatcher.handleClientAction({
      type: ActionTypes.START,
      data: { message: "hello" }
    });
  },

  updateScore: (score) => {
    GameDispatcher.handleClientAction({
      type: ActionTypes.UPDATE_SCORE,
      data: { score: score }
    });
  },

  createSquares: (squares) => {
    GameDispatcher.handleClientAction({
      type: ActionTypes.CREATE_SQUARES,
      data: { squares: squares }
    });
  }
}
