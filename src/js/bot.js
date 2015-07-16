import Actions from "./actions";
import Game from "./game/app";
import MessageBoard from "./messages/app";

class TicTacBot {

  constructor(props) {
    this.props = props;
    new Game();
    new MessageBoard();
    this.welcomeUser();
  }

  welcomeUser() {
    // Actions.sendMessage("Welcome. My name is " + this.props.name);
  }

};

export default TicTacBot;
