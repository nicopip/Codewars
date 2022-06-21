//return the total number of smiling faces in the array
function countSmileys(arr) {
    let result = 0
    arr.forEach(x =>{
      if(x.length === 2) {
      ((x[0]=== ':' || x[0]===';') && (x[1]=== ')' || x[1]==='D')) ? result++:result
    } else {
      ((x[0]=== ':' || x[0]===';') &&(x[1]=== '-' || x[1]==='~') &&(x[2]=== ')' ||x[2]=== 'D')) ? result++:result
    }
      })      
    return result
  }

