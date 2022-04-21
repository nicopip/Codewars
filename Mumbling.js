//The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
	let arr = s.split('')
  let newArr = []
  for(let i=0;i<arr.length;i++){
    newArr[i] = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i)
  }
  return newArr.join('-')
}