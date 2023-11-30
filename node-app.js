// console.log("hello world");

const multiply = (a,b) => a*b;

console.log(multiply(3,4));

const student = {
    name: "akash das",
    roll: 26,
    class: 11,
    background: 'Arts',
    studentDetails(){
        console.log(`${this.name} roll no is ${this.roll} reads in class ${this.class} and stream is ${this.background}`);
    }
}

console.log(student);

student.studentDetails();