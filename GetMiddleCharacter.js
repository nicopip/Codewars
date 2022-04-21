//The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  let sLength = s.length
  let sArr = s.split('')
  if(sLength%2===0){
    return sArr[(sLength/2)-1] + (sArr[sLength/2]) 
  } else {
      return sArr[((sLength+1)/2)-1] 
    }
}

