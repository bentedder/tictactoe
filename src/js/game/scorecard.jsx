const React = require("react");
import BaseView from "../viewBase.jsx";

class Scorecard extends BaseView {
  render() {
    return (
      <div className='scorecard'>
        <div className='score-bot'>Bot: {this.props.score.bot}</div>
        <div className='score-human'>Human: {this.props.score.human}</div>
        <div className='turn'>Turn: {this.props.user}</div>
      </div>
    )
  }
}
export default Scorecard;
