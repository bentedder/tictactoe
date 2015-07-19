import { Dispatcher } from "flux";
import GameConstants from "./gameConstants";

let PayloadSources = GameConstants.PayloadSources;

class GameDispatcher extends Dispatcher {

  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }

}

let _GameDispatcher = new GameDispatcher();

export default _GameDispatcher;
