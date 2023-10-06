// Simple, remove the spaces from the string, then return the resultant string

// Solution 1
function noSpace(x){
    let ret = ''
    for (let i = 0; i < x.size(); i++) {
        if (x[i] != ' ') {
            ret += x[i] 
        }
    }
    return ret
}

// Solution 2
function noSpace(x) {
    return x.split(' ').join('')
}


