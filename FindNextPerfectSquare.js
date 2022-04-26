//You might know some pretty large perfect squares. But what about the NEXT one?

function findNextSquare(sq) {
    if(!Number.isInteger(Math.sqrt(sq))){
      return -1;
    } else {
      return Math.pow(Math.sqrt(sq) +1,2)
    }
  }