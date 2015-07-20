const React = require("react");
import BaseView from "./viewBase.jsx";
import ViewActions from "../viewActions";

class Square extends BaseView {
  render() {
    let owner = this.props.owner;
    let classString = "square open";
    switch(owner) {
      case -1:
        classString = "square x";
        break;
      case 1:
        classString = "square o";
        break;
      default:
        break;
    }
    return (
      <div className={classString} onClick={this.select.bind(this)}>
        <svg version="1.1" className="icon x" x="0px" y="0px" viewBox="0 0 167.2 167.2">
          <line fill="none" stroke="url(#Gradient1)" strokeWidth="2px" x1="0.4" y1="0.4" x2="166.9" y2="166.9"/>
          <line fill="none" stroke="url(#Gradient1)" strokeWidth="2px" x1="166.9" y1="0.4" x2="0.4" y2="166.9"/>
        </svg>
        <svg version="1.1" className="icon o" x="0px" y="0px" viewBox="0 0 167.5 167.5">
          <circle fill="none" stroke="url(#Gradient2)" strokeWidth="2px" cx="83.8" cy="83.8" r="81"/>
        </svg>
      </div>
    )
  }

  select() {
    let i = this.props.index;
    ViewActions.selectSquare(i);
  }
}
export default Square;
