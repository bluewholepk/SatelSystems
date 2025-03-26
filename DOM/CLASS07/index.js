// 1). DOM
// 2). How to Access the DOM
// 3). How to manipulate DOM using JS (Style or content)
// 4). Window and document objects
// 5). Digital Clock

// //How to access the document

// console.log("Hello World!");
// console.log(document);

// //Add the content to the website

// const body = document.body;
// body.append("Hello World!");

// const h1Tag = document.createElement("h1");

// // Add the content to the tag

// //innerText, innerHTML, textContent

// // h1Tag.innerText = "Hello<sup>2</sub>";

// h1Tag.innerHTML = "Hello<sup>2</sub>";

// body.append(h1Tag)

// const divTag = document.createElement("div");

// divTag.append(h1Tag);

// body.append(divTag);

// h1Tag.style.color="red";
// divTag.style.textAlign = "center";

// const button = document.getElementById("btn");
// console.log(button);

// // getElementById, getElementByClassname, querySelecter

// const item = document.getElementsByClassName("item");
// console.log(item);

// const ptag = document.querySelector("p");
// console.log(ptag);

// ptag.style.color = "red";
// ptag.style.textAlign = "center";

// // window.alert("This is DOM Class.");
// const userName = window.prompt("Enter Your Name: ");
// window.alert("name is : ",userName);
// console.log(userName);

// setTimeout(() => {
//     console.log("After 4 secont");
// },2000);

// setTimeout(() => {
//     console.log("After 2 secont");
// },2000);

// // arrow Function

// const add = (a,b)=> a+b;
// console.log(add(1,2));

// function timer(){
//     let data= document.getElementById("clock");
//     let hours = new Date().getHours();
//     let minutes = new Date().getMinutes();
//     let seconds = new Date().getSeconds(); 

//     if (hours >= 12) {
//         ampm = "PM";
//     } else {
//         ampm = "AM";
//     }
//     data.innerText = `${hours} : ${minutes} : ${seconds} ${ampm}`;
// }
// setInterval(()=>{
//     timer();
// },1000)

function showData(){
    const variable = document.getElementById("input").value;
    console.log(variable);
    const p = document.getElementById("content");
    
    p.innerText = variable;
    p.style.color= "White";
}
