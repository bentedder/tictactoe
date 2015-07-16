const React = require("react");
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
    return (
      <div className='board'>
        Board
      </div>
    )
  }

  _onChange() {
    this.setState(getGameState());
  }
}

export default Board;
