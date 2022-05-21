//Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

function roundToNext5(n){
    let i = n
    if(n<=0 && n>-5){
      return 0
    } else{
      while(i % 5 !== 0){
        if(i%5===0){
          return i
        }
        i++
      }
    }
    return i
  }