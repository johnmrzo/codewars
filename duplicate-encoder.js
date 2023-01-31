// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Solution 1
function isDuplicate(letter, word) {
    let count = 0
    word.split("").forEach(i => {
        if (i === letter) {
            count++
        }
    })
    return count >= 2
}

function duplicateEncode(word){
    word = word.toLowerCase()
    let res = ""
    word.split("").forEach(i => isDuplicate(i, word)? res += ")": res += "("
    )
    return res
}

// Solution 2
function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

// Solution 3
const duplicateEncode = s => s
  .toLowerCase()
  .split``
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join``;
