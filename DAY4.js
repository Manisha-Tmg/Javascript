"use strict"
//loops
//add first 10 natural numbers
 for( let i=0; i<=20;i++){
   console.log(i+1)
 }

let n=prompt("enter the svalue of n")
let sum=0 
n=Number.parseInt(n)
for(i = 0;i<n; i++){
   sum+=(i+1)

 }
 console.log("Sum of first",+ n + "natural numbers is" + sum)


 function sumOfEvenNumbers(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0) {
       sum += arr[i];
     }
   }
   return sum;
 }
 
 let obj={
  isha:98,
  preeyaa:56,
  neeha:75,
  aaliyah:60
 }
 for (let h in obj){
  console.log("Marks of " + h + "are" + obj[h])
 }
let SUM =0
let N =  prompt("enter the value of n")
for (let c=0; c<N; c++){//prints from 0 t0 n-1
    SUM += c
console.log(sum)}
 

let b=0
let m= prompt("enter the value of n")
for (let v=0; v<m;v++){
    b+=v
}
console.log(b)
 
 
 