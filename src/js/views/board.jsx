const React = require("react");
import BaseView from "./viewBase.jsx";
import Square from "./square.jsx";
import _ from "underscore";

class Board extends BaseView {

  render() {
    let board = this.props.board;
    let squares = _.times(this.props.size, function(i) {
      return <Square key={i} index={i} owner={board[i]}/>
    });
    return (
      <div className='board'>
        {squares}
      </div>
    )
  }
}

export default Board;
