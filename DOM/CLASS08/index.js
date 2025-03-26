
// 1). Constructor
// 2). Classes in JS
// 3). this keyword
// 4). super keyword
// 5). Class Inheritance

// let name="JS";
// let course = "HTML";

// let obj1 ={
//     name:"pk",
//     age:25,
//     // hello1 : function(){
//     //     console.log(`Hello ,i am ${name} and my age is ${age}`);
//     // },
//     hello : function(){
//         console.log(`Hello ,i am ${this.name} and my age is ${this.age}`);
//     }
// }// 8 BITS

// console.log(obj1.name)
// obj1.hello();
// obj1.hello1();

//Try to use an Object class
//Built in classs ,User sefined class

// let obj = new Object(); //  DYnamic Memory
// obj.name = "JS";
// console.log(obj);

//Class is awell defined structure of object and other datatypes

//  number, boolean, string, array, object

// car ->  Engine , WSheel, Name, color, Brand

// class className{
//     //initalising functions;
//     // Other Function;
// }

// class Car{
//     constructor(){
//         console.log("Default construtor");
//     }
//     greet(){
//         console.log("Hello , Vroom vroom");
//     }
// }

// let bmw = new Car();
// bmw.greet();

console.log("");
class Car{
    constructor(engine,wheel,name,color,brand,isPetrol){
        this.engine = engine;
        this.wheel = wheel;
        this.name = name;
        this.color = color;
        this.brand = brand;
        this.isPetrol = isPetrol;
    }
    greet(){
        console.log(`Car Details : ${this.engine} : ${this.wheel} : ${this.name} : ${this.color} : ${this.brand} : ${this.isPetrol} : ${this.battery}`);
    }
}

let bmw = new Car("1",4,"bmw","red","bmw","yes");
bmw.greet();

console.log("");
class EV extends Car{
    constructor(engine,wheel,name,color,brand,isPetrol,battery){
        super(engine,wheel,name,color,brand,isPetrol);
        this.battery= battery;
        
    }
    charging(){
        console.log("I am charging...");
    }
}

let bmwev = new EV("1",4,"EV","white","EV","no","500KM");

bmwev.charging();
bmwev.greet();