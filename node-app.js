// console.log("hello world");

// const multiply = (a,b) => a*b;

// console.log(multiply(3,4));

// const student = {
//     name: "akash das",
//     roll: 26,
//     class: 11,
//     background: 'Arts',
//     studentDetails(){
//         console.log(`${this.name} roll no is ${this.roll} reads in class ${this.class} and stream is ${this.background}`);
//     }
// }

// console.log(student);

// student.studentDetails();

//Map on array

// const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];

// const newArr = arr.map((element, index) => {
//   if (element === " ") {
//     element = "empty string";
//   }
//   return element;
// });

// console.log(newArr);
// console.log(arr);

//  For const we can do certain operation on variable declair with const but we cannot reassign it.
//  That's why it is not gives us error.

//  Spread operator is used to clone or copy a object which will be pointing to the new memory reference so if
//  we change or manipulate the new object it will not change the older object.

//  If we want to take as many argument as we want in the function parameter we can use rest operator.

//1) const obj1 = { key1: 1 };

// const obj2 = { ...obj1 };

// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }

// Answer: different objects

// 2) const obj1 = { key1: 1, key2: 2 };

// const obj2 = { ...obj1, key1: 1000 };

// console.log(obj1);

// console.log(obj2);

// Answer: obj1 : {key1: 1, key2: 2}
//         obj2 : {key1: 1000, key2: 2}


// Destructuring

//1) const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}

// console.log(key1, key3);

// Answer: key1: 1 , key3: 1000


// 2) const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1

// console.log(val1)

// console.log(val2)

// Answer: val1: 'value1', val2: 'value2'

//3) const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1

// key1 = 20;

// key3 = 123;

// console.log(obj1.key1,obj1.key3)

// Answer: obj1.key1: 1, obj1.key3: 1000