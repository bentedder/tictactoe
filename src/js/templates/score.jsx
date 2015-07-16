const React = require("react");
import GameActions from "../gameActions";

class Score extends React.Component {
  
  render() {
    return (
      <div className='score'>
        Score: {this.props.score}
        <div>
          <button onClick={this.updateScore}>Update</button>
        </div>
      </div>
    )
  }

  updateScore() {
    GameActions.updateScore(1);
  }
}

export default Score;
