// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let numStr = n.toString()
    let numArr = numStr.split('')
    for (let i = 0; i < numArr.length; i++) {
      numArr[i] = parseInt(numArr[i])
    }
    return numArr.reverse()
  }
  console.log(digitize(12345))
  console.log(digitize(0))
  console.log("3")
  console.log(parseInt("3"))
