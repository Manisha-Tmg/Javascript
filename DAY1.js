//let is a keyword that lets us declare a variable. 
let remember ="june.2";
var age;
age= 39;
var friends =["misha","isha","nisha"];
console.log(friends.length);
console.log(friends[1])

// "misha" + "!"
// typeof "value"
// + is an operator with several different uses:
//  What does it do when operating on strings?
//  Any guess what else it can operate on?
//  How many values does it oparate on at a time?
// +add
// -subtract
// *multiply
// /divide
//JS is case sensitive
// console.log//prints the result in console.
// var canbe updated and re-declared within its scope.
//const cannot be updated and re-declared.
//nn bb ss u


//Non Primitive Data Type- Objects in js
const item={
    "a":5,
    "b":false,
    "v":undefined,

}
console.log(item["v"])


// chapter-1 
// practice set-Q1
var time="Hello"
are= "Namaste"
s=time +are
console.log(s);

//  practice set-Q2
console.log(typeof (time+are))

//  practice set-Q3
const apple={
    color:"red",
    number:5,
    quantity:4,}

//  practice set-Q4
    apple["her"]="she"
console.log(apple)

 //  practice set-Q5
 const dict={
    excited:"very enthusiastic and eager.",
    nervous:"easily agitated or alarmed.",
    bad:"unpleasant, harmful, or undesirable.",

 }
console.log(dict["excited"])


console.log("operators in js")
let a=4;
let b=7;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a/b",a/b)
console.log("a**b=",a**b)
console.log("a%b=",a%b)
console.log("a++=",a++)//increment
console.log("a--=",a--)//decrement
console.log("++a=",++a)
console.log("--a=",--a)