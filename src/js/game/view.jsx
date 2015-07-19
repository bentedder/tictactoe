const React = require("react");
import BaseView from "../viewBase.jsx";
import Board from "./board.jsx";
import Tools from "./tools.jsx";
import Scorecard from "./scorecard.jsx";

class GameView extends BaseView {
  render() {
    return (
      <div className='game'>
        <h1>Impossible Tic-Tac-Toe</h1>
        <Board squares={this.state.squares} user={this.state.activeUser} />
        <Scorecard score={this.state.score} user={this.state.activeUser} players={this.state.players} />
        <Tools />
      </div>
    )
  }
}
export default GameView;
