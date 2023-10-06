// Credit Card Mask

//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

//Examples (input --> output):
//"4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""
//
// "What was the name of your first pet?"
//"Skippy" --> "##ippy"
//"Nananananananananananananananana Batman!" --> "####################################man!"

import Foundation

func maskify(_ string: String) -> String {
  // if input.len >= 4 => return it
  if (string.count <= 4) {
    return string
  }
  
  // extract the last 4 chars
  // count the number of chars, create a string with 4 - length
  let minusFour = string.count - 4
  let hash = String(repeating: "#", count: minusFour)
  let lastFour = string.suffix(4)
  
  return hash + lastFour
}

print(maskify(""))
print(maskify("1"))
print(maskify("07935616"))
print(maskify("4556364607935616"))
print(maskify("64607935616"))
print(maskify("Nananananananananananananananana Batman!"))
