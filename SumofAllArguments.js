//Sum of all arguments

function sum() {
    let total = 0;
    for(let i in arguments){
      total += arguments[i];
    }
    return total;
  }