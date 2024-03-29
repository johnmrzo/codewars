// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
    let res = ""
    let mod = 10
    while (num !== 0) {
        if (num % mod !== 0) {
            res = (num % mod) + " + " + res 
        }
        num -= (num % mod)
        mod *= 10
    }
    return res.slice(0,-3)
}