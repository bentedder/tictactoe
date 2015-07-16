import _ from "underscore"

class Grid {

  constructor(options) {
    this.size = options.size
    this.spaces = [];
    console.log("starting a new " + this.size + "x" + this.size + " grid");
    this.createSpaces();
  }

  createSpaces() {
    let _this = this;
    let spaces = [];
    _.times(this.size, function(i) {
      _.times(_this.size, function(j) {
        spaces.push({ row: i, column: j });
      });
    });

    this.spaces = spaces;
    console.log(this.spaces);
  }

  removeSpace(choice) {
    this.spaces.splice(choice, 1);
  }

  getSpaceAtIndex(index) {
    return this.spaces[index];
  }

  getAvailableSpaces() {
    return this.spaces;
  }

}

export default Grid;