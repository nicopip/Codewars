//FromMin

function minValue(values){
    let arr = [...new Set(values)].sort((a,b) => a-b)
    let result = ""
    arr.map(x=>x.toString()).forEach( x => result += x)
    return Number(result)
  }