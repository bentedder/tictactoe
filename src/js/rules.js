
class Rules = {

  createPlayers() {

  }

  drawBoard() {

  }

  chooseWhoStarts() {

  }

  assignXO() {

  }

  play() {
    this.selectOpenSquare();
    this.checkBoardStatus();
    this.takeTurns();
  }

  selectOpenSquare() {
    // choose how to select
  }

  takeTurns() {
    // switch users
    this.play();
  }

  endGame() {

  }

}

export default Rules;
