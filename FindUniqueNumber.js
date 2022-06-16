//Find the unique number


function findUniq(arr) {
    let newArr = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
    return newArr[0]
  }