//Digital root is the recursive sum of all the digits in a number



function digital_root(n) {
    let result = 0
    String(n).split('').map(x => result += Number(x))
    
    return result >=10? digital_root(result):result
    
  }