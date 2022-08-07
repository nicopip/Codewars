//AlternateCap


function capitalize(s){
    let arr = s.split('')
    let arr1 = []
    let arr2 = []
    let arr3 = []
    arr.forEach((x,i) =>{
      if(i === 0){
        arr1.push(x.toUpperCase())
        arr2.push(x.toLowerCase())
      } else if(i%2 !== 0){
        arr1.push(x.toLowerCase())
        arr2.push(x.toUpperCase())
      } else {
        arr1.push(x.toUpperCase())
        arr2.push(x.toLowerCase())
      }
    })
    arr3[0] = arr1.join('')
    arr3[1] = arr2.join('')
    return arr3
  };