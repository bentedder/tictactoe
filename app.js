import Player from './player';
import Game from './game';

var game = new Game();

var player1 = new Player({ name: "megan" });
game.addPlayer(player1);

var player2 = new Player({ name: "ben" });
game.addPlayer(player2);

game.start();