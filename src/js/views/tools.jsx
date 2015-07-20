const React = require("react");
import BaseView from "./viewBase.jsx";
import ViewActions from "../viewActions";

class Tools extends BaseView {
  render() {
    let tools = "";
    if(this.props.over) {
      tools = <button className='again' onClick={this.reset.bind(this)}>Try Again</button>
    } else {
      tools = <button className='reset' onClick={this.reset.bind(this)}>Reset</button>
    }
    return (
      <div className='tools'>
        {tools}
      </div>
    )
  }

  reset() {
    ViewActions.reset();
  }
}
export default Tools;
