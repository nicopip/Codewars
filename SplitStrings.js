/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').*/

function solution(str){
    let result = []
    if(str.length%2 !==0){
      str = str.split('').concat('_').join('')
    }
    for (let i = 0; i < str.length; i += 2) {
      result.push(str.substring(i, i + 2))
  }
    return result
  }