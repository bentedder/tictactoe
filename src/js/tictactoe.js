import Game from "./game/app";
import _ from "underscore";
import MessageBoard from "./messages/app";
import GameActions from "./gameActions";

class App {

  constructor(props) {
    this.props = props;
    new Game();
    new MessageBoard();
    this.start();
  }

  start() {
    let firstUser = this.setFirstPlayer();
    GameActions.setTurn({ user: firstUser });
  }

  setFirstPlayer() {
    return _.random(0,1);
  }

};

export default App;
