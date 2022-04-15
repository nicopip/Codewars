//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    const result = (h * 3600000) + (m * 60000) + (s * 1000)
    return result
    
  }