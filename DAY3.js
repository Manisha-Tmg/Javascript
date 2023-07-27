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
// if(s>0){//block of code if condition true
//     alert("This is an invalid age")
//  }
//  else{//block of code if condition false
//     alert("This is an invalid age")
//  }


 if(s<0){
    alert("This is an invalid age")
 }
 else if(s<9){
    alert("you r just a kid")}
else if(s<18 && s>=9){
    alert("you can thnik of driving")
}
else{
    alert("This is an valid age")
 }
//  ternary operator
console.log("you can",( a<18? "not drive" : "drive"))

//exercise 1
let age= prompt("what is your age")
if (age>=10 && age<=20){
   alert("Your age is between 10 and 20")
}
else{
  alert("Your age is not between 10 and 20")
}

//exercise 2
 //Switch statement


 let age1= prompt("what is your age")
switch(age1){
    case 1:
        console.log("your age is 1")
   break
    case 4:
        console.log("your age is 4")
    case 8:
        console.log("your age is 8")
    default:
        console.log("your age is not special")

}

//
let num =prompt("what is your age")
num=number.parseInt(num)
if (num%2==0 && num%3==0){
   console.log("your number is divisible by 2 and 3.")
}
else
{
   console.log("your number is not divisible by 2 and 3.")


}