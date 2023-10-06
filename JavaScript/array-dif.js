// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// Solution
// create a new array
// loop though b
    // if a includes b elem
    // loop through a
        // check if a elem is not equal to b elem
        // if yes => add it to new array
        // else, do nothing
    // a = new array


function arrayDiff(a, b) {
    let arr = []
    b.forEach(bElem => {
        if (a.includes(bElem)) {
            a.forEach(aElem => {
                if (aElem !== bElem) {
                    arr.push(aElem)
                }
            })
            a = arr 
        }
    })
    return a
}