var r1=Math.random();
var n1=Math.floor(r1*6)+1;

var randomDiceImage = "dice"+n1+".png";
var randomImageSource = "images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var r2=Math.random();
var n2=Math.floor(r2*6)+1;
var randomDiceImage = "dice"+n2+".png";
var randomImageSource2 = "images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (n1>n2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(n2>n1){document.querySelector("h1").innerHTML=" Play 2 Wins! 🚩";}
else{document.querySelector("h1").innerHTML="Draw";}