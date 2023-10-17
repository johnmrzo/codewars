// Square Every Digit

// Instructions
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.
import Foundation

// Solution 1
// func squareDigits(_ num: Int) -> Int {
//   var res = ""
//   // convert to string
//   var numStr = String(num)
//   // loop through chars
//   for n in numStr {
//     // square the num
//     var nSquared = pow(Double(String(n))!, 2.0)
    
//     res += String(Int(nSquared))
//   }

//   return Int(res)!
// }

// Solution 2
func squareDigits(_ num: Int) -> Int {
  return Int(String(num).map { String(Int(pow(Double(String($0))!, 2.0))) }.joined())!
}

print(squareDigits(9119))
print(squareDigits(765))