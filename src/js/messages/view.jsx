const React = require("react");
import BaseView from "../viewBase.jsx";
import MessageList from "./list.jsx";

class MessageView extends BaseView {
  render() {
    return (
      <div className='messages'>
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageView;
