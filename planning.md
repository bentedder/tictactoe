Create a bot that knows the chance of winning with every move, and always chooses the most optimal spot.

Goal is to win
Next best is to tie

Board has 9 spots

Empty board - 8 chances to win
p1: 8 possibilities of winning
  put o in B2 (center)
p2: 4 possibilities of winning
  put x at A1 (top right)
p1: 4 possibilities of winning
  put o at B1
p2: 3 possibilities of winning
  put x at B3
p1: 3 possibilities of winning
  put o at C1
p2: 2 possibilities of winning
  put x at A3
p1: 2 possibilities of winning

...nah

with every move, priorities are:
1) can i win this move?
if no,
2) can other player win this move?
if no,
3) can I win in two moves?
if no,
4) can other player win in two moves?
if no,

...nah

should calculate each way to win, and how many moves each way takes, for each player.

every move should answer the question: what is the most optimal move.

what are my current chances of winning? what are my opponent's current chances of winning?

empty board: 8
x in A1: 20% chance of winning

...nah

need to come up with an algorithm that predicts all possible outcomes.


1st move. optimal place to play is center because there are 8 ways to win
2nd move. optimal place to play is

[
  {
    row: 1
    column: 1
  },
  {
    row: 2
    column: 1
  },
  {
    row: 3,
    column: 1
  }
]