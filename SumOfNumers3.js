//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.


const getSum = (a, b) => {
    [a, b] = a > b ? [b, a] : [a, b];
    
    let result = 0;
    
    while (a <= b) {
      result += a;
      a++;
    }
    
    return result;
  };