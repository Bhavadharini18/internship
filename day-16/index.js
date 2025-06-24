
var n=document.querySelectorAll(".drum").length;
for (var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  var v = this.innerHTML;
  alert("clicked-"+v);
  makesound(v);
  buttonanimation(v);
})
}
document.addEventListener("keypress",function(e){
  makesound(e.key);
  buttonanimation(e.key);
});


function makesound(key){
  switch(key){
    case 'w':
      var x=new Audio('sounds/tom-1.mp3');
      x.play();
      break;
    case 'a':
      var y=new Audio('sounds/tom-2.mp3');
      y.play();
      break;
    case 's':
      var x=new Audio('sounds/tom-3.mp3');
      x.play();
      break;
    case 'd':
      var x=new Audio('sounds/tom-4.mp3');
      x.play();
      break;
    case 'j':
      var x=new Audio('sounds/snare.mp3');
      x.play();
      break;
    case 'k':
      var x=new Audio('sounds/crash.mp3');
      x.play();
      break;
    case 'l':
      var x=new Audio('sounds/kick.mp3');
      x.play();
      break;

  }

}
function buttonanimation(ck){
  var activebtn=document.querySelector("."+ck);
  activebtn.classList.add("pressed");
  setTimeout(function(){
  activebtn.classList.remove("pressed");
  },100);
}
