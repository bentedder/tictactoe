const React = require("react");

class Square extends React.Component {
  render() {
    var square = this.props.square;
    return (
      <div className="square">{square.value}</div>
    )
  }
}

export default Square;
