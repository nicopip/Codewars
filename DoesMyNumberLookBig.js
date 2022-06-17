//A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10)


function narcissistic(value) {
    let dur = (value+ '').length
    let arr = (value + '').split('')
    let newArr = arr.map(x => Math.pow(Number(x),dur))
    return newArr.reduce((a,b)=>a+b) === value
  }
  