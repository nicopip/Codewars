//Inluces "x" and "o"


function XO(str) {
    str = str.toLowerCase()
    let numOfO = str.split('o').length-1
    let numOfX = str.split('x').length-1
    if(!str.includes('o') && !str.includes('x')){
        return true
    } else if (numOfO === numOfX) {
        return true
    } else {
        return false
    }
}