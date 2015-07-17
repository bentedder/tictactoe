import GameDispatcher from "./gameDispatcher";
import GameConstants from "./gameConstants";

let ActionTypes = GameConstants.ActionTypes;

export default {

  selectSquare: (square) => {
    GameDispatcher.handleViewAction({
      type: ActionTypes.SELECT_SQUARE,
      data: { square: square }
    });
  }

}
