console.log("Hello World");

// Keyword -> var, let, const

//keyword variableName = Value:

// var item = "Car";
// var age = 25;
// var isOrderm =true;
// var items=[1,2,3,4,5];
// var Person={
//     name: "Prashant",
//     courses: "FSD"
// }

// var item = "Bike"; //redeclearing -> Here , We are creating a variableagain
// item = "Scooter"; //reassigning -> Only Change value
// console.log(item); // No Error on Recreating a variable

//let
console.log("--------------Let---------------");
let item= "Car"; //Creating
 item = "Bike"; //Reassigning

{
    let item = "Scooter";//Cannot redeclare
    console.log(item);
}
console.log(item);

// Understanding scoping of a variable in JS
// Functional Scope -> inside cannt access outside
// Block Scope -> Block is definde as {}
// Global Scope -> access anywhere

// Copy by Value and Copy by reference

// Copy by value (Default in the premitive datatypes)
console.log("--------------Copy by value---------------");
let x=10;
let y=x; //copying
y=20;
console.log(x,y);

//non Primitive datatypes.

let arr1 = [1,2,3];
let arr2 = arr1;
arr2 = [1,2];
console.log(arr1,arr2);

// copy by referance
console.log("--------------Copy by Reference---------------");
let obj1 = {
    name: "Prashant",
    course : "FSD"
}
//  let obj2 = obj1;
//  obj2.name = "JAVASCRIPT";

//  console.log(obj1,obj2);

 //Copy by Value -> Sprede operator /Assign Operation

 let obj2 ={...obj1}; // collecting the values 
 obj2.name = "JS"
 console.log(obj1,obj2);

 //String function / Math Funtion

 //Math Funtion
 console.log("--------------Mathss Function---------------");
 console.log("PI = ",Math.PI);
 console.log("Round(74.4) = ",Math.round(74.4));
 console.log("Round(74.5)  = ",Math.round(74.5));

 console.log("floor(74.8)  = ",Math.floor(74.8)); //Lowwer 
 console.log("ceil(74.8) = ",Math.ceil(74.8)); //Heiger
 console.log("random() = ",Math.random());

 let variable = "hello world";

 console.log("Lenght of (hello world)= " , variable.length);
 console.log("Upper Case = " , variable.toUpperCase());
 console.log("Lowwer = ", variable.toLocaleLowerCase());

 let variable2 =variable.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
 console.log(variable2);
