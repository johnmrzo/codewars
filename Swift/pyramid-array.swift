// Pyramid Array

// Instructions
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// // Solution 1
// func pyramid(_ n: Int) -> [[Int]] {
//   var res = [[Int]]()
  
//   for i in 0..<n {
//     res.append(Array(repeating: 1, count: i+1))
//   }
  
//   return res
// }

// Solution 2
func pyramid(_ n: Int) -> [[Int]] {
  return (0..<n).map { Array(repeating: 1, count: $0+1) }
}

print(pyramid(0))
