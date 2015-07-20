const React = require("react");
import GameStore from "../gameStore";

let getGameState = () => {
  return GameStore.getState();
}

class BaseView extends React.Component {

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

  _onChange() {
    this.setState(getGameState());
  }

}

export default BaseView;
