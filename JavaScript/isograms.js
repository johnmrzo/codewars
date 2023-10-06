// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// change to lower case
// loop through each letter
// count the letter, check if occurs > 1 => return false
// outside the loop => return true

// Solution 1
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length
}


// Solution 2
function isIsogram(str){
    strArr = str.toLowerCase().split("")
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i + 1; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                return false
            }
        }
    }
    return true
}