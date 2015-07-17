const React = require("react");
import BaseView from "../baseView.jsx";
import MessageList from "./list.jsx";

class MessageView extends BaseView {
  render() {
    return (
      <div className='messages'>
        <span className='message-title'>Messages</span>
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageView;
