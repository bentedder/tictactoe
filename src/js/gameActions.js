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
      type: ActionTypes.UPDATESCORE,
      data: { score: score }
    })
  }
}
