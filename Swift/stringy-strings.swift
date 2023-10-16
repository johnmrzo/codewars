// Stringy Strings

// Write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

func stringy(_ size: Int) -> String {
  // get the even number out
  var isEven = size % 2 == 0
  
  if isEven {
    // repeat "10" by size / 2
    return String(repeating: "10", count: size / 2)
  }
  
  // repeat "10" by (size - 1) / 2
  // add "1" to the end and return that
  return String(repeating: "10", count: size / 2) + "1"
}

print(stringy(3))