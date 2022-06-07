//Your order, please


function order(words){
    const arr = words.split(' ');
    const newArr = [];
    for(i = 0; i <= arr.length; i++) {
      for(j = 0; j < arr.length; j++) {
        if(arr[j].indexOf(i) >= 0) {
          newArr.push(array[j]);
        }
      }
    }
    return newArr.join(' ');
  }