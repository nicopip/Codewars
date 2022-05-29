//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
    let arr =[]
    for(let i=0;i<a.length;i++){
      if(!b.includes(a[i])){
        arr.push(a[i])
      }
    }
    return arr
  }