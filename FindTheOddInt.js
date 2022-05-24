/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/




function findOdd(A) {
    let arr = []
    for(let i=0;i<=A.length;i++){
      if(((A.filter(x => x === A[i])).length % 2) !== 0){
        arr.push(A[i])
        break
      }
    }
    return Number(arr.join(''))
  }