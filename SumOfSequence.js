//Your task is to make function, which returns the sum of a sequence of integers.

const sequenceSum = (begin, end, step) => {
    let result = 0
    for(let i=begin;i<=end;i+=step){
      result += i
    }
    return result
  };