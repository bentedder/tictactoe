class Player {

  constructor(options) {
    this.name = options.name;
    this.spacesPlayed = [];
  }

  addSpace(space) {
    this.spacesPlayed.push(space);
  }

  getSpacesPlayed() {
    return this.spacesPlayed;
  }
}

export default Player;