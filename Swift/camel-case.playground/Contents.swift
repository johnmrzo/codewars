import Cocoa

// CamelCase Method
//
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
//
// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

func camelCase(_ str: String) -> String {
  return str.capitalized.replacingOccurrences(of: " ", with: "")
}

print(camelCase("test case"))
print(camelCase("camel case method"))
print(camelCase("say hello "))
print(camelCase(" camel case word"))
print(camelCase(""))
