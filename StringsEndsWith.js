//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    if(str === ending){
      return true
    } else {
      let newStr = str.split('').splice(str.length-ending.length,str.length-1).join('')
      return newStr === ending
    }
  }