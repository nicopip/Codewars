//Your task is to write a function which returns the sum of following series upto nth term(parameter).


function SeriesSum(n)
{
  let num = 1
  if(n === 0){
    return "0.00"
  } else{
    let arr = []
    for(let i=0;i<n;i++){
      arr.push(1/num)
      num += 3  
    }
    return "" + (arr.reduce((acc,c)=>acc+c,0)).toFixed(2)
  }
}