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
 
 

 

 
 
 