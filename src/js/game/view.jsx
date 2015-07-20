const React = require("react");
import BaseView from "../viewBase.jsx";
import Board from "./board.jsx";
import Tools from "./tools.jsx";
// import Scorecard from "./scorecard.jsx";

class GameView extends BaseView {
  render() {
    return (
      <div className='game'>
        <h1>Impossible Tic-Tac-Toe</h1>
        <Board size={this.state.grid} board={this.state.board} />
        <Tools over={this.state.over} />
      </div>
    )
  }
}
export default GameView;
