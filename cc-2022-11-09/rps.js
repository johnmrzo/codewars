// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// Solution 1
// rock - paper - scissors

// rock paper
// rock scissors

// paper rock
// paper scissors

// scissors rock
// scissors paper

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'paper') {
        return "Player 2 won!"
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return "Player 1 won!"
    } else if (p1 === 'paper' && p2 === 'rock') {
        return "Player 1 won!"
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return "Player 2 won!"
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return "Player 2 won!"
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return "Player 1 won!"
    } else {
        return "Draw!"
    }
};

// Solution 2

// save the rules in an object

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";

    var beats = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === beats[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };