console.log("----- Q3 . Create an array named Students with some values in it. Find the highest score among the array ------")

// var a=5;
// var b=2;
// var c=3;
// let highest = Math.max(a,b,c);

let Students = [3,4,9,5,2,1];


let highest = Math.max(...Students);



// let highest = Students[0];

// for (let i = 1; i < Students.length; i++) {
//     console.log(Students[i]);
//     if (Students[i] > highest) {
        
//         highestScore = Students[i];
//         console.log("Current Highest Score :",highest,"__");
//     }
// }

console.log("highest score :", highest);
