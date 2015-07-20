const React = require("react");
import BaseView from "./viewBase.jsx";

class Scorecard extends BaseView {
  render() {
    let score = this.props.score;
    let classString = "scorecard";
    return (
      <div className='scorecard'>
        <div className='score-player'>
          <svg version="1.1" className="icon x" x="0px" y="0px" viewBox="0 0 167.2 167.2">
            <line fill="none" stroke="url(#Gradient1)" strokeWidth="2px" x1="0.4" y1="0.4" x2="166.9" y2="166.9"/>
            <line fill="none" stroke="url(#Gradient1)" strokeWidth="2px" x1="166.9" y1="0.4" x2="0.4" y2="166.9"/>
          </svg>
          <div className='score'>{score.user}<small>You</small></div>
        </div>
        <div className='score-player'>
        <svg version="1.1" className="icon tie" x="0px" y="0px" viewBox="0 0 167.2 167.2">
          <line fill="none" stroke="#999999" strokeWidth="2px" x1="0.4" y1="80" x2="166.9" y2="80"/>
        </svg>
          <div className='score'>{score.tie}<small>Tie</small></div>
        </div>
        <div className='score-player'>
          <svg version="1.1" className="icon o" x="0px" y="0px" viewBox="0 0 167.5 167.5">
            <circle fill="none" stroke="url(#Gradient2)" strokeWidth="2px" cx="83.8" cy="83.8" r="81"/>
          </svg>
          <div className='score'>{score.bot}<small>Bot</small></div>
        </div>
      </div>
    )
  }
}
export default Scorecard;
