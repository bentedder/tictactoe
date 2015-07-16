const React = require("react");
import Square from "./square.jsx";
import GameStore from "../gameStore";
import GameActions from "../gameActions";

let getGameState = () => {
  return GameStore.getState();
}

class Board extends React.Component {

  componentDidMount() {
    GameStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    let squares = this.props.squares.map(function(square) {
      return (
        <Square square={square} key={square.id} />
      )
    });
    return (
      <div className='board'>
        <small>Board</small>
        <div>{squares}</div>
      </div>
    )
  }

  _onChange() {
    this.setState(getGameState());
  }
}

export default Board;
