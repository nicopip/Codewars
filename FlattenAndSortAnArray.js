//Flatten and sort an array

function flattenAndSort(array) {
  let newArr = [].concat(...array)
  return newArr.sort((a,b) => a-b)
}