const React = require("react");
import BaseView from "../viewBase.jsx";
import Board from "./board.jsx";
import Scorecard from "./scorecard.jsx";

class GameView extends BaseView {
  render() {
    return (
      <div className='game'>
        Turn: {this.state.activeUser}
        <Board squares={this.state.squares} />
        <Scorecard score={this.state.score}/>
      </div>
    )
  }
}
export default GameView;
