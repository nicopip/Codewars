//Write a function which calculates the average of the numbers in a given list

function find_average(array) {
    if(array.length === 0){
      return 0
    } else {
    const sum = array.reduce((acc,c) => acc + c,0)
    return (sum / array.length)
    }
  }