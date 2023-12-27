// Arrays
const numbersArray = [1,2,3,4,5];
console.log(numbersArray);

const stringArray = ["Eat", "Sleep", "Code", "Repeat"]
console.log(stringArray);

// Accessing Items from our array
console.log(stringArray[0]);


// Nested Array
const nestArray = ['one', ['two', 'three'], 'four', false]
console.log(nestArray);
console.log(nestArray[1]);
console.log(nestArray[1][1]);


const letters = ['h', 'e', 'l', 'l', 'o']
console.log(letters);

console.clear()

const favSingers = ['A', 'B', 'C'];
console.log(favSingers[0]);

const favNumbers = [1,2,3,4]
const mixedArr = ["Hello", ["world", "GPT"], 123, true]
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

console.clear()

// Array Methods
const fruitsArr = [
    'apples',
    'mango',
    'pineapple',
    'orange',
    'banana',
    'grape'
]

fruitsArr.push('cherry')
console.log(fruitsArr);

fruitsArr.pop();
console.log(fruitsArr);

fruitsArr.shift()
console.log(fruitsArr);

fruitsArr.unshift('tomato')
console.log(fruitsArr);

const vegArr = [
    'carrot',
    'veg2',
    'veg3'
]

const mixArr = fruitsArr.concat(vegArr);
console.log(mixArr);

console.clear()


const pl = ['Java', 'Python', 'JavaScript', 'C++']
const nums = [5,1,8,3,4]

console.log(pl.includes('Python'));

console.log(pl.join("_"));

console.log(pl.reverse());

console.log(nums.sort());

console.clear()


// OBJECTS
const person = {
    firstName : 'Lokesh',
    lastName : 'Matta',
    age : 21,
    location : ["Planet", "Earth"],
    isProgrammer : true
};

console.log(person);

// Accessing Items
console.log(person.age);
console.log(person.isProgrammer);

console.log(person['firstName']);
console.log(person['location']);

delete person.location

console.log(person);

console.clear()


const car = {
    type : 'SUV',
    model : 2024,
    color : 'Black'
};

console.log(typeof car);
car.type = 'Toyota';
car.wheels = '4x4';
console.log(car);

console.clear()

// Functions

// function greet() {
//     console.log("hello World");
// }

// greet()

// console.clear()

function sayHello(name) {
    console.log(`hello ${name}`);
}

sayHello('Lokesh');

console.clear()

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1,3));

console.clear()

function myFunction (num1 , num2) {
    return num1 * num2;
}

console.log(myFunction(2,3));

console.clear()

// function declaration
function fun1(p1) {
    console.log("Hello", p1);
}

// function Expression
const greeting = function (p1) {
    console.log("Hello", p1);
}

greeting("World");

// Callback Function

function showCallFunc(fn) {
    const value = 10;
    fn(value);
}

showCallFunc(function (value) {
    console.log(value);
})

console.clear();

function fun1(name, cb){
    console.log(name);
    cb();
}

// function cb() {
//     console.log("hello i am callback function");
// }

fun1("lokesh", function cb() {
    console.log("hello i am callback function");
});

console.clear()

function showCallFunc(fn) {
    const value = 10;
    fn(value)
}

showCallFunc(function(value) {
    console.log(value);
})

console.clear()

// Method

// function greet() {
//     console.log(`Hello i am ${persons.name} and i am ${persons.age} years old`);
// }

const persons = {
    name : 'Lokesh',
    age : 21,
    greet : function() {
        console.log(`Hello i am ${persons.name} and i am ${persons.age} years old`);
    }
}

persons.greet();

console.clear()

// JSON

const data = {
    "name" : "Lokesh",
    "Age" : 21,
    "email" : "ml@gmail.com"
}

const jsonString = JSON.stringify(data);
console.log(jsonString);

const pasredObj = JSON.parse(jsonString);
console.log(pasredObj);

console.clear()



// Time And Date
const currDate = new Date();
console.log(currDate);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const milliSeconds = date.getMilliseconds();

console.log(date.toDateString());


// setInterval 
setInterval(() => {
    console.log("This function will be executed every 2 seconds");
}, 2000);

// setTimeout
setTimeout(() => {
    console.log("this function will be executed after 3 seconds");
}, 3000)