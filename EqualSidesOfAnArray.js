//Equal Sides Of An Array

function findEvenIndex(arr){
    let result = 0
    for(let i=0;i<=arr.length;i++){
        if (arr.slice(0,i).reduce((acc,c)=>acc+c,0) === arr.slice(i+1,arr.length).reduce((acc,c)=>acc+c,0)){
        result = i
          break
      } else {
        result = -1
      }
    }
    return result
  }