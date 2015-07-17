const React = require("react");
import View from "./view.jsx";

class Messages {

  constructor(props) {
    this.render();
  }

  render() {
    // jscs:disable
    React.render(<View/>, document.getElementById("messages"));
  }

};

export default Messages;
