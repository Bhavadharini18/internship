function Advancedbmicalc(weight,height){
    let Bmi=weight/(height*height); 
    if (Bmi < 18.5) {
    return "Your BMI is " + Bmi.toFixed(1) + ", so you are underweight.";
  } else if (Bmi >= 18.5 && Bmi <= 24.9) {
    return "Your BMI is " + Bmi.toFixed(1) + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + Bmi.toFixed(1) + ", so you are overweight.";
  }
}
var t=Advancedbmicalc(60,1.7);
console.log(t);