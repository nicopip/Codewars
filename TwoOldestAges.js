// return the two oldest/oldest ages within the array of ages passed in.

function twoOldestAges(ages){
    let newArr = ages.sort((a,b)=>(a-b)).reverse()
    let result = [newArr[1],newArr[0]]
    return result
  }
  

