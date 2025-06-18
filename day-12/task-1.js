function test(){
    let a=8;
    let b=9;
    var c=a;
    a=b;
    b=c;
    console.log(a,b);
}
test();
