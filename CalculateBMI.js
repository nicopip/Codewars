//Write function bmi that calculates body mass index (bmi = weight / height2).


function bmi(weight, height) {
    const bmi = weight/Math.pow(height,2)
    if (bmi <= 18.5){
      return 'Underweight'
    } else if(bmi<= 25.0){
      return 'Normal'
    }else if(bmi<= 30.0){
      return 'Overweight'
    }else {
      return 'Obese'
    }
  }