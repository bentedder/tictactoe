# Setup

Run `npm install` to grab dependencies.

Run `grunt`. A browser window should open at localhost port 3000.

## About

This project was built using [React](https://facebook.github.io/react/) as the view handler. It also uses the [Flux](https://github.com/facebook/flux) pattern of unidirectional data flow. There is only one React component, with several sub-components.

The core of the AI of the app is a modification and expansion on the [Negamax algorithm](https://en.wikipedia.org/wiki/Negamax) (with alpha and beta pruning). Being my first experience with this formula, I leaned heavily on the experience of others and how they implemented it. There seem to be a lot of ways of going about it, but essentially it just traverses the tree of possible moves and adds values back up the chain for all winning or tie moves to tell the bot the optimal square to pick.

### Potential improvements
* Optimize a bit more for mobile. There are some click delays I'd get rid of.
* Consider simplifying the flux structure, as it may be overkill for this size of a project.
* Add a line or some indicator to the board to show the winning combination.
* Add a bit more user feedback (insults when they lose, ability to input their name, that kind of thing).

## Original Challenge

Your challenge, should you choose to accept it, is to write a tic-tac-toe interface (AI) that never allows the challenger (user) to win.  

### Constraints
* The interface must look like a tic-tac-toe board (in whatever form you want to create)
* The interface should clearly indicate whose turn it is
* The game pieces should clearly reflect each player
* The AI must run entirely in the browser - no server-side logic
* Feel free to use any bootstrapping or other libraries you would like (we want you to have a lot of freedom here)

### Evaluation Criteria
Your solution will be judged on the following criteria, with the most important listed first.
* 100% coverage of all features and constraints listed above
* Code legibility.  This includes formatting, commenting, naming, and adherence to solid design patterns
* Error checking and error handling.
* Amount of time taken to return the assignment.
* Packaging and submission style.  You may submit this assignment via Git, JSfiddle, a tarball or zip, or any other means of submission you feel appropriate (though it is an evaluation criteria item).
