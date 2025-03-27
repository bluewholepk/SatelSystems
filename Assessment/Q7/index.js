// Student and Admin Classes
// inheritance

class Student{
    constructor(name){
        console.log("Student Class - Default Constructor.");
        this.name = name;
        
    }
    greet(){
        console.log("You are accessing student class");
        console.log(`Student name : ${this.name}`);
    }
}

console.log("");

class Admin extends Student{
    constructor(name,aname){
        console.log("Admin Class - Default Constuctor.")
        super(name);
        this.aname = aname;
    }
    welcome(){
        console.log(`Student Name : ${this.name} and Admin Name : ${this.aname}`)
    }

}

const s = new Student("Prashant");
s.greet();

console.log("");

const a = new Admin("Prashant","AdminName");
a.greet();
a.welcome();
