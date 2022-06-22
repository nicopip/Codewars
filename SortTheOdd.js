//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let newArr = array.filter(x => x % 2 === 1 || x % 2 === -1).sort((a,b)=> a-b)
    let oldArr = array.filter(x => x % 2 === 0)
    let arr = []
    for(let i=0;i<array.length;i++){
      array[i] % 2 === 0 ? arr.push(oldArr.shift()) : arr.push(newArr.shift())
    }
    return arr
  }