//Stray number

function stray(numbers) {
    let number = 0
    numbers.forEach(x => numbers.indexOf(x) ? number = x : null)
    return number
  }