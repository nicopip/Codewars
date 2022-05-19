
//Count the Digit


function nbDig(n, d) {
    let result = ''
      for(let i =0;i<=n;i++){
        result += i*i
      }
    return result.split(d).length -1
  }