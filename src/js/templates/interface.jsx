const React = require("react");
import Board from "./board.jsx";
import Score from "./score.jsx";

class Interface extends React.Component {
  render() {
    return (
      <div className='interface'>
        <Board />
        <Score score={this.props.game.score} />
      </div>
    )
  }
}

export default Interface;
