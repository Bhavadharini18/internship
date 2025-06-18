//1.merge two arrays using concat()
const arr1=[1,2,3,4];
const arr2=[6,7,9,8];
let t=arr1.concat(arr2);
console.log(t);
//2.use splice()to remove 2 element from the middle
let s=arr1.splice(2,2);
console.log(s);
//3.sort numeric array
console.log((arr2.sort()));
//4.check if an aaray includes an specific items
console.log((arr2.includes(7)));
//5.find the index of an element
let i=arr2.indexOf(8);
console.log((i+1));