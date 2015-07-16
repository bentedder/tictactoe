class Player {

  constructor(options) {
    this.name = options.name;
    this.spacesPlayed = [];
  }

  updateSpaces(space) {
    this.spacesPlayed.push(space);
    console.log(this.name + " played space " + space);
    console.log(this.spacesPlayed);
  }
}

export default Player;