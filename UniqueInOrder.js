//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    let arr = []
    let newArr = []
    if(typeof iterable === 'string'){
      arr = iterable.split('')
    } else{
      arr = iterable
    }
    for(let i=0;i<=arr.length;i++){
      if(i<arr.length){
        arr[i] !== arr[i+1]?newArr.push(arr[i]):arr[i]
      }
    }
      return newArr
  }