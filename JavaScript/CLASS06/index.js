// 1). Hoisting = call function or variable befor the declaration.
// 2). Function
// 3). Diff b/w Function declaration and Function Expression
// 4). Array functions
// 5). IIFE vs Anonymous Function
// 6). Callback function and Promise

// To a create a function

//synatx of function

// function functionName(parameters){
// Statement1
// Statement2
// Statement3
// Statement4
// ...
// }
console.log("-------Creating Functions-------");
hai(); //It will not show  Error
function hai(){
    console.log("Hai");
}//function Declaration

hai(); // function calling

//function Expression
//let/const functionName = funtion(){
// }

//hello(); //It will Show error
//ReferenceError: Cannot access 'hello' before initialization
let hello = function(){
    console.log("Hello")
}//Function Expression

hello(); // Function Calling

// console.log(items);
//var items ="Car" // variable with var keyword willcbe hoisted but will show undefined output

// console.log(vehicle);
//let vehicle ="bike" ;// Variable created with let keyword will be hoisted but it will show initialization Error
//ReferenceError: Cannot access 'vehicle' before initialization

console.log("----------Array-----------");
let item = [1,2,3,4,5];
console.log(item);
//--------Looping Statemend and Condition statement-----------
console.log("--------Looping Statemend and Condition statement-----------");

//For, While

// ----------For Loop-------------
console.log("----------For Loop-------------");
// for('intialization';'Condition';'Incrementation/Decrementation'){
//     Statement1
// }

// Print Hello Word 10 times

for(let i =0;i<10;i++){
    console.log(i+1,":"," Hello Word! ");
}

console.log("------if-else Condition-------")

for(let i =0;i<10;i++){
    //------if-else Condition-------
    if(i<=5){
    console.log(i+1,":"," Hii ");
}
else{
    console.log(i+1,":"," Hello");
}
}

//-------While Loop---------
console.log("-------While Loop---------");
// initialization;
// while('Condition'){
//     Statement;
//     incre/decre;
// }

let i = 0;
while(i<10){
    console.log(i+1,":"," Hii ");
    i++;
}

// -------------IIFE vs Anonymous Function--------------
console.log("-------------IIFE vs Anonymous Function--------------");

// ------Immediatly Invoked Function Expression(IIFE)-----
(function(){
    console.log("hello");
})();// Automatically call without calling the function

//------Anonymous Function-----

console.log("------Anonymous Function-----");

const add = function(a,b){
    return a + b;
}
console.log("Addition for 1 + 2 = ",add(1,2));

//---------Callback function and Promise-----------
//callback -> Passing the function to another as a parameter.
console.log("-------Callback--------------");
console.log("-----Examole 1-----------");
function welcomne (name ,callback){
    console.log("Welcome",name);
    callback();
}

welcomne('Prashant' ,greet);

function greet(){
    console.log("Hai");
}

console.log("-----Examole 2-----------");
function output(a,b,callback){
    console.log(a+b);
    callback();
}

function Hello(){
    console.log("The outcome is Generated");
}

output(1,2,Hello);

// Promise
console.log("-----------------Promise----------------");
// # stages -> Pending -> Seccess/Completed ->Rejected

let myOutput = new Promise((resolve,reject) => {
 let colour = "Red";
 if (colour == "Blue"){
    resolve("Colour is Blue");
 }
 else{
    reject("Colour is "+ colour);
 }
})

myOutput
.then((data)=>console.log(data))
.catch((error)=>console.log(error)) // Exception Error