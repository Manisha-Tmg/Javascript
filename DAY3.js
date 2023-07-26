//Assignment operators

let assignment=5;
assignment+=5// same as assignment = assignment+5
console.log(assignment)

//comparision operators
let comp1=5;
let comp2="5";
console.log('comp1==comp2 is', comp1 ==comp2) //eqaul to
console.log('comp1==comp2 is', comp1 !=comp2)//not equal to
console.log('comp1==comp2 is', comp1 !==comp2)//not equal value or not equal type
console.log('comp1==comp2 is', comp1 ===comp2)//equal value and type

//logical operators
let a= 2;
let b= 6;
console.log(a>b && a==2)
console.log(a<b && b!==2)
console.log(!false)
console.log(!true)
/*  Tthis is multiline comments*/
///this is used for single line comment


//conditional statement
/*if 
if...else
if...else...if*/
let s= prompt("Hey !whats your age")
s=Number.parseInt(s)//converting the string to a number
console.log(typeof s)
if(s>0){//block of code if condition true
    alert("This is an invalid age")
 }
 else{//block of code if condition false
    alert("This is an invalid age")
 }


 if(s<0){
    alert("This is an invalid age")
 }
 else if(s<9){
    alert("you r just a kid")}
else if(s<18 && a>=9){
    alert("you can thik of driving")
}
  else{
    alert("This is an invalid age")
 }