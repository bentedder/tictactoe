const React = require("react");
import BaseView from "../viewBase.jsx";

class Scorecard extends BaseView {
  render() {
    let players = this.props.players.map(function(player, i) {
      return (
        <div className='score-player'>
          <div className='score'>
            {player.name} ({player.type})
          </div>
        </div>
      )
    });
    let classString = " scorecard";
    classString += this.props.user;
    return (
      <div className={classString}>
        {players}
        <div className='turn'>Turn: {this.props.user}</div>
      </div>
    )
  }
}
export default Scorecard;
