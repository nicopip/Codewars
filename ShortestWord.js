// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = s.split(' ')
    let newArr = []
    arr.forEach(x => newArr.push(x.length))
    return newArr.sort((a,b)=> a-b)[0]
  }