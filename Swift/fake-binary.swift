// Fake Binary

// Instructions
// Output
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Solution 1
// func fakeBin(digits: String) -> String {
//   // create a new string
//   var binary = ""

//   // loop through the input
//   for digit in digits {
//     // check the value, add 0/1 accordingly
//     if Int(String(digit))! < 5 {
//         binary += "0"
//     } else {
//         binary += "1"
//     }

//   }
//   // return the result
//   return binary
// }

// Solution 2
func fakeBin(digits: String) -> String {
    return String(digits.map { Int(String($0))! < 5 ? "0" : "1"})
}

print(fakeBin(digits: "12345"))