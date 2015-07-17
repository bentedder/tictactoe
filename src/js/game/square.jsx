const React = require("react");
import BaseView from "../baseView.jsx";
import GameActions from "../gameActions";

class Square extends BaseView {
  render() {
    let square = this.props.square;
    let classString = "square";
    return (
      <div className="square" onClick={this.select.bind(this)}>
        <strong>value: { square.value }</strong>
        <br/>
        row: { square.row }
        <br/>
        col: { square.col }
        <br/>
        owner: { square.owner }
      </div>
    )
  }

  select() {
    let square = this.props.square;
    if (square.owner) {
      console.log("has owner");
    } else {
      GameActions.selectSquare(this.props.square);
    }
  }
}
export default Square;
