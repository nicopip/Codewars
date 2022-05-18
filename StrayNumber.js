//Stray number

const stray = numbers =>
  numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
  )