import _ from "underscore";

// major inspiration from https://github.com/aglemann/tic-tac-toe/blob/master/tic-tac-toe.js
// https://en.wikipedia.org/wiki/Negamax

let grid = 3;
let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
let board = [];
let over = false;

class AI {

  get Over() {
    return over;
  }

  get GridSize() {
    return grid * grid;
  }

  get Board() {
    return board;
  }

  reset() {
    board = [];
  }

  selectSquare(i) {
    var bestMove = null;

    if (!board[i]){
      // user play and check
      board[i] = -1;

      if (this.checkStatus(0) === -1) {
        console.log("user won!");
        over = true;
        return;
      }

      // bot play and check
      bestMove = this.findBestMove(0, 1, -grid, grid);

      if (bestMove === undefined) {
        console.log("it's a tie!");
        over = true;
        return;
      }
      board[bestMove] = 1;
      if (this.checkStatus(0) === 1) {
        console.log("bot won!");
        over = true;
        return;
      }
    }   
  }

  checkStatus(depth) {
    var winner = null,
        bot, human;
    _.each(combos, function(combo) {
      bot = 0;
      human = 0;
      _.each(combo, function(n) {
        if (board[n] === 1) {
          bot++;
        } else if (board[n] === -1) {
          human++;
        }
      });
      if (bot === 3) winner = 1;
      if (human === 3) winner = -1;
    });
    return winner;
  }

  findBestMove(depth, player, alpha, beta){
    var i = grid * grid,
        min = -Infinity,
        max,
        value,
        next;
    if (value = this.checkStatus(depth)) {
      return value * player;
    }
    while(i--){
      if (!board[i]){
        board[i] = player;
        value = -this.findBestMove(depth + 1, -player, -beta, -alpha);
        board[i] = undefined;
        if (max === undefined || value > max) max = value;
        if (value > alpha) alpha = value;
        if (alpha >= beta) return alpha; // prune branch
        if (max > min){ min = max; next = i; } // best odds for next move
      }
    }
    return depth ? max || 0 : next; // 0 is tie game
  }
}

let _AI = new AI();
export default _AI;
