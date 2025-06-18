function bmicalc(weight,height){
    return Math.round(weight/(height*height)); 
}
var t=bmicalc(65,1.8);
console.log(t);