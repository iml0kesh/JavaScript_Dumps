const firstName = "Lokesh";
const lastName = "Matta";

console.log(`My name is: ${firstName} ${lastName}`);

function info() {
    return `My name is ${firstName} ${lastName} & I'm 21 years old`;
}

console.log(`${info()}`);

console.clear();


const str = `The quick
brown fox
jumps over
the lazy dog ${firstName} ${lastName}`


console.log(str);
console.log(`${firstName} ${lastName}`);

console.clear();

// Arrow Functions

// function greet(username) {
    // return `Hello ${username}`;
// }

const greet = username => `Hello ${username}`;
console.log(greet('Lokesh'));

const double = num => num * 2;
console.log(double(10));

console.clear();

// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("Hey");
//         setTimeout(() => {
//             console.log("Namaste");
//             setTimeout(() => {
//                 console.log("Hi");
//                 setTimeout(() => {
//                     console.log("Bonjour");
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)


// Enhanced Object Literals
// function user (name, age, work) {
//     return {
//         name : name,
//         age : age,
//         work : work
//     };
// }

function user (name, age, work) {
    return {
        name,
        age,
        work
    };
}

const Lokesh = user("Lokesh", 21, "student");
const Brain = user("Brain", 9, "pet");

console.log(Lokesh);
console.log(Brain);

console.clear();


const a = 1;
const b = 2;
const c = 3;

const obj = {a, b, c}
console.log(obj);

console.clear();

const lib = {
    sum : (a,b) => a + b,
    mult : (a,b) => a * b 
}

console.log(lib.sum(2,3));
console.log(lib.mult(2,3));

console.clear();

const getPersonES6 = (name, age, height) => {return {name, age, height}}
const dataa = getPersonES6("lokesh", 21, 200)
console.log(dataa);

console.clear();

// Default parameters
function multiply(a,b = 1) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(2,5));

console.clear();

// Spread Operator.
function helper(a,b,c,d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

const colors = ["red", "orange", "yellow", "pink"]

// without Spread Operator
helper(colors);
// with Spread Operator
helper(...colors);

const strNums = ['one', 'two', 'three'];
const moreStrNums = ['four', 'five', 'six'];

const concat1 = strNums.concat(moreStrNums);
console.log(concat1);

const concat2 = [...strNums, ...moreStrNums];
console.log(concat2);


const obj1 = {
    x: 1,
    y: 2,
}

const obj2 = {
    z: 3
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3);

console.clear();

let arr1 = [1,2,3];
let arr2 = [4,5];

const user11 = {
    name: "loki",
    age: "21",
};

let clone = [...arr1, ...arr2];
let cloneObj = {...user11};

function variadic(...params){
    console.log(params);
}

console.log(variadic("hello", "world", true, [1,2,3]));

console.clear();


// Array Destructuring.
const ar = ['one', 'two', 'three'];

const [firstParam, secondParam] = ar;
console.log(firstParam);
console.log(secondParam);


function f() {
    return [1,2];
}

let a1,b1;
[a1,b1] = f();
console.log(a);
console.log(b);

console.clear();

const clors = ["red", "green", "blue", "yellow", "orange"];
const [color1, color2, color3] = clors;

console.log(color1);
console.log(color2);
console.log(color3);

console.clear();

// Object destructuring
// order doesn't mater but name does.

const student = {name1: "Lokesh", position: "last", roll: 42}
const {name1} = student
console.log(name1);

const obj4 = {name2: "john Doe", age: 30, gender:"male", country: "USA"}

const {name2, age, country} = obj4;
console.log(name2, age, country);

// Re-name
const obj5 = {x : 100, y : 200}
const {x, y} = obj5

console.log(x);
console.log(y);

const obj6 = {x1 : 100, y1 : 200}
const {x1 : x2, y1 : y2 } = obj6

console.log(x2);
console.log(y2);

console.clear();

const person2 = {
    name3 : "Jhon Doe",
    age : 30,
    gender : "male",
    country : "USA"
}

const {name3 : personName, age : personAge, country : personCountry} = person2;
console.log(personName, personAge, personCountry);