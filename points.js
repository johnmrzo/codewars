// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Solution 

// input  --> an array: ["3:1", "2:2", "0:1", ...]
// return --> int for x. 

// create a function that takes in an array of string
function points(games) {
    // declare a counter variable
    let counter = 0
    let x, y
    // go through each string in the array
    for (let i = 0; i < games.length; i++) {
        // get x and y
        x = games[i][0]
        y = games[i][2]
        // check if the x is larger than y -> increment counter by 3
        if (x > y) {
            counter += 3
        } else if (x === y) { // if there is a tie -> increment counter by 1
            counter++
        }
    }
    return counter
}






