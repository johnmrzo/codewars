// Calculate BMI 

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let ratio = weight / (Math.pow(height, 2))
    if (ratio <= 18.5) {
        return 'Underweight'
    } else if (ratio <= 25.0) {
        return 'Normal'
    } else if (ratio <= 30.0) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}

// console.log(bmi(100, 25))
// console.log(bmi(100, 5))
// console.log(bmi(100, 3.5))
// console.log(bmi(100, 3))
// console.log(bmi(80, 1.8))