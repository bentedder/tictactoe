const React = require("react");
import BaseView from "../viewBase.jsx";
import Square from "./square.jsx";

class Board extends BaseView {

  select(e) {
    console.log(e);
  }

  render() {
    let squares = this.props.squares.map(function(square) {
      return <Square key={square.id} square={square} />
    });
    return (
      <div className='board'>
        {squares}
      </div>
    )
  }
}
export default Board;
