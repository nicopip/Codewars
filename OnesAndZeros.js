//Given an array of ones and zeroes, convert the equivalent binary value to an integer.


const binaryArrayToNumber = arr => {
    let result = 0
    let long = arr.length
    for(let i=0;i<arr.length;i++){
       result +=  (arr[i] * Math.pow(2,long-1))
      long -= 1
    }
    return result
  };