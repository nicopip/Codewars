/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text){
    let obj = {}
    let count = 0
    text = text.toLowerCase();
    for (let i=0;i<text.length;i++) {
      if ( obj[text[i]] ) {
        obj[text[i]]++;
      } else {
        obj[text[i]] = 1;
      }
    }
    for ( let j in obj ) {
      if ( obj[j] > 1 ) {
        count++}
    }
    return count;
  }