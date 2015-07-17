const React = require("react");
import BaseView from "../viewBase.jsx";
import ViewActions from "../viewActions";
import AppActions from "../appActions";

class Square extends BaseView {
  render() {
    let square = this.props.square;
    let classString = "square";
    let symbol = "-";
    switch(square.owner) {
      case 0:
        symbol = "O";
        break;
      case 1:
        symbol = "X";
        break;
      default:
        break;
    }
    return (
      <div className="square" onClick={this.select.bind(this)}>
        <strong>value: { square.value }</strong>
        <br/>
        row: { square.row } col: { square.col }
        <br/>
        {symbol}
      </div>
    )
  }

  select() {
    let square = this.props.square;
    if (square.owner === null) {
      ViewActions.selectSquare(this.props.square);
    } else {
      AppActions.sendMessage({ type: "system", text: "Sorry, that square has already been claimed." });
    }
  }
}
export default Square;
