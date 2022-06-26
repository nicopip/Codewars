// Upto and including n, this function will return the sum of all multiples of 3 and 5.

function findSum(n) {
    let result = 0
    for(let i=0;i<=n;i++){
      (i % 3 === 0) || (i % 5 === 0) ? result+= i:result;
    }
      return result
  }