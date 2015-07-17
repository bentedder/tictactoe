const React = require("react");
import BaseView from "../baseView.jsx";

class MessageList extends BaseView {
  render() {
    let messages = this.props.messages.map(function(message) {
      return (
        <li><span className={message.type}>{message.text}</span></li>
      )
    });
    return (
      <ul className='message-list'>
        { messages }
      </ul>
    )
  }
}

export default MessageList;
