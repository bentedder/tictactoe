import React from "react";
import Interface from "./templates/interface.jsx";
import GameStore from "./gameStore";
import GameActions from "./gameActions";

let getGameState = () => {
  return GameStore.getState();
}

class GameView extends React.Component {

  constructor(props) {
    super(props);
    this.state = getGameState();
  }

  componentDidMount() {
    GameStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        <p>
          {this.state.message}
        </p>
        <Interface game={this.state} />
        <button onClick={this.start}>
          start
        </button>
      </div>
    );
  }

  _onChange() {
    this.setState(getGameState());
  }

  start() {
    GameActions.startGame();
  }

}

export default GameView;
