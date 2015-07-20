// set defaults of game
var grid = 3;
var board = [];

// figure out winning combos (consider generating)
var combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// handle user click
  // user make move (draw/set owner)
  // check if somebody won, then die
  // figure out [computer] next move
  // if no next move, tie
  // comp make next move (draw/set owner)
  // check if somebody lost, then die

// figure out [player] next move
  // negamax to return value of 
