// return masked string
function maskify(cc) {
    let arr = cc.split('')
    if(arr.length<4){
      return arr.join('')
    } else{
         let code = ''
    let code1 = arr.slice(arr.length-4,arr.length).join('')
    for(let i=0;i<arr.length-4;i++){
      code += '#'
    }
   return code + code1
    }
 }
 