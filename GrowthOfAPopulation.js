//How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let result = 0
    let i=0
    while(p0<p){
      let result = Math.floor(p0 + (p0 * (percent/100))) + aug
      p0 = result
      i++
    }
  return i
}