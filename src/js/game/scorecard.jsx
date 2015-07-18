const React = require("react");
import BaseView from "../viewBase.jsx";

class Scorecard extends BaseView {
  render() {
    return (
      <div className='scorecard'>
        <div className='score-bot'>
          <svg version="1.1" className="icon o" x="0px" y="0px" viewBox="0 0 167.5 167.5">
            <circle fill="none" stroke="url(#Gradient2)" strokeWidth="2px" cx="83.8" cy="83.8" r="81"/>
          </svg>
          <div className='score'>
            Bot: {this.props.score.bot}
          </div>
        </div>
        <div className='score-tie'>
          Tie: {this.props.score.tie}
        </div>
        <div className='score-human'>
          <svg version="1.1" className="icon x" x="0px" y="0px" viewBox="0 0 167.2 167.2">
            <line fill="none" stroke="url(#Gradient1)" strokeWidth="2px" x1="0.4" y1="0.4" x2="166.9" y2="166.9"/>
            <line fill="none" stroke="url(#Gradient1)" strokeWidth="2px" x1="166.9" y1="0.4" x2="0.4" y2="166.9"/>
          </svg>
          <div className='score'>
            You: {this.props.score.human}
          </div>
        </div>
        <div className='turn'>Turn: {this.props.user}</div>
      </div>
    )
  }
}
export default Scorecard;
