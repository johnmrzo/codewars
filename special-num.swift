// Special Number (Special Numbers Series #5)

// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not.

// Notes
// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.

func specialNumber(_ number: Int) -> String {
    let specialNumbers = [0, 1, 2, 3, 4, 5]
    let digits = String(number).compactMap{ $0.wholeNumberValue }
    for digit in digits {
        if !specialNumbers.contains(digit) {
            return "NOT!!"
        }
    }
    return "Special!!"
}
print(specialNumber(123))
print(specialNumber(2368982))