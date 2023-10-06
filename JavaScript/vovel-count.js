// Vovel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vovels = ["a", "e", "i", "o", "u"]

    let count = 0
    str.split("").forEach(el => {
        if (vovels.includes(el)) {
            count++
        }
    })
    return count
}