const React = require("react");
import BaseView from "../viewBase.jsx";
import Square from "./square.jsx";

class Board extends BaseView {

  render() {
    let squares = this.props.squares.map(function(square) {
      return <Square key={square.id} square={square} />
    });
    let classString = "board ";
    classString += this.props.user === 0 ? "bot": "human";
    return (
      <div className={classString}>
        {squares}
      </div>
    )
  }
}

export default Board;
