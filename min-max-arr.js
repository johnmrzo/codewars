// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// Solution 1
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
}

// Solution 2
var min = function(list){
    let minimum = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] < minimum) {
            minimum = list[i]
        }
    }
    return minimum
}

var max = function(list){
    let maximum = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] > maximum) {
            maximum = list[i]
        }
    }
    return maximum
}

function minMax(arr){
    return [min(arr), max(arr)]
}