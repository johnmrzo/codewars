// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// input => a stentence
// output => same sentense with words in reverse
// restriction: spaces has to remain

// example
// "This is an example!" ==> "sihT si na !elpmaxe"

// algorithm
// take the sentence as an input
function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseWords(str) {
  // split it by spaces
    let splitWords = str.split(" ")

    // reverse all the words and join with spaces
    splitWords.forEach((word, index) => {
        splitWords[index] = reverseString(word)
    });
    return splitWords.join(" ")
}