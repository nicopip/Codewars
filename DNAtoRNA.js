//Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
    let arr = dna.split('')
    let newArr = arr.map(x => x === 'T'? 'U': x)
    return newArr.join('')
  }