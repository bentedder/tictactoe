const React = require("react");
import BaseView from "../baseView.jsx";

class MessageView extends BaseView {
  render() {
    return (
      <div className='messages'>
        Messages
      </div>
    )
  }
}

export default MessageView;
