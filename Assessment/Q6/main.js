
function game(){
    const num1=document.getElementById("input").value;
    console.log(" Your Number : ",num1);
    const yourNum  = document.getElementById("your");
    yourNum.innerText = num1;

    const num2 = Math.floor(Math.random()*20) + 1;
    console.log("System Generated Number : ",num2);
    const systemNum  = document.getElementById("system");
    systemNum.innerText = num2;
    
    if(num1 == num2){
        console.log("🎉 Congratulations! You won 7 Crore!");
        const match = document.getElementById("match");
        match.innerText = "🎉 Congratulations! You won 7 Crore!";
        match.style.color = "green";
        
    }

    else if(num1>num2){
        console.log("Number is low!", num1);
        match.innerText = "Number is low!";
        match.style.color = "red";
    }
    else{
        console.log("Number is  high!", num1);
        match.innerText = "Number is  high!";
        match.style.color = "blue";
    }
}