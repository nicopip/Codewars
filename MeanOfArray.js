//Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
    return Math.floor(marks.reduce((acc,c)=> acc+c,0) / marks.length)
  }