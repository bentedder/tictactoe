const React = require("react");
import Actions from "../actions";
import View from "./view.jsx";

class Messages {

  constructor(props) {
    this.render();
  }

  render() {
    React.render(<View/>, document.getElementById("messages"));
  }

};

export default Messages;
