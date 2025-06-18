function main(){
   straight();
   turnleft();
   turnright();
   straight();
   turnleft();
   turnright();
   straight();
   
}
function straight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function turnleft(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function turnright(){
   turnRight();
   move();
   turnRight();
}
