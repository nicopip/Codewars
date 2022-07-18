//Maximum Multiple

function maxMultiple(divisor, bound){
    let result = []
    for(let i=0;i<= bound;i++){
      if(i % divisor === 0){
        result.push(i)
      }
    }
    return result.pop()
  }