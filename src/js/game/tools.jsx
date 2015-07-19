const React = require("react");
import BaseView from "../viewBase.jsx";
import ViewActions from "../viewActions";

class Tools extends BaseView {
  render() {
    return (
      <div className='tools'>
        <button onClick={this.start.bind(this)}>Start Human</button>
        <button onClick={this.startBot.bind(this)}>Start Bot</button>
      </div>
    )
  }

  start() {
    ViewActions.start("human");
  }

  startBot() {
    ViewActions.start("bot");
  }
}
export default Tools;
