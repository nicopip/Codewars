//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    let arr = String(n).split('')
    let newArr = arr.sort((a,b)=>b-a)
    return Number(newArr.join(''))
}