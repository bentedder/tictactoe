const React = require("react");
import BaseView from "../baseView.jsx";
import Board from "./board.jsx";
import Scorecard from "./scorecard.jsx";

class GameView extends BaseView {
  render() {
    return (
      <div className='game'>
        <span className='game-title'>Game</span>
        <Board squares={this.state.squares} />
        <Scorecard score={this.state.score}/>
      </div>
    )
  }
}
export default GameView;
