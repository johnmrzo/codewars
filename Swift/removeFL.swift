// Remove First and Last Character

// Instructions

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution 1
// func removeFirstAndLast(_ str: String) -> String {
//   var res = ""
//   for (i, e) in str.enumerated() {
//     if i == 0 || i == str.count - 1 {
//       continue
//     }
//     res += String(e)
//   }
//   return res
// }

// Solution 2
func removeFirstAndLast(_ str: String) -> String {
    return String(str.dropFirst().dropLast())
}
print(removeFirstAndLast("Bakhtiyor"))