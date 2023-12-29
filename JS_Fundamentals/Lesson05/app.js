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
the lazy dog ${firstName} ${lastName}`;

console.log(str);
console.log(`${firstName} ${lastName}`);

console.clear();

// Arrow Functions

// function greet(username) {
// return `Hello ${username}`;
// }

const greet = (username) => `Hello ${username}`;
console.log(greet("Lokesh"));

const double = (num) => num * 2;
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

function user(name, age, work) {
  return {
    name,
    age,
    work,
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

const obj = { a, b, c };
console.log(obj);

console.clear();

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));

console.clear();

const getPersonES6 = (name, age, height) => {
  return { name, age, height };
};
const dataa = getPersonES6("lokesh", 21, 200);
console.log(dataa);

console.clear();

// Default parameters
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(2, 5));

console.clear();

// Spread Operator.
function helper(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "pink"];

// without Spread Operator
helper(colors);
// with Spread Operator
helper(...colors);

const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];

const concat1 = strNums.concat(moreStrNums);
console.log(concat1);

const concat2 = [...strNums, ...moreStrNums];
console.log(concat2);

const obj1 = {
  x: 1,
  y: 2,
};

const obj2 = {
  z: 3,
};

const obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);

console.clear();

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

const user11 = {
  name: "loki",
  age: "21",
};

let clone = [...arr1, ...arr2];
let cloneObj = { ...user11 };

function variadic(...params) {
  console.log(params);
}

console.log(variadic("hello", "world", true, [1, 2, 3]));

console.clear();

// Array Destructuring.
const ar = ["one", "two", "three"];

const [firstParam, secondParam] = ar;
console.log(firstParam);
console.log(secondParam);

function f() {
  return [1, 2];
}

let a1, b1;
[a1, b1] = f();
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

const student = { name1: "Lokesh", position: "last", roll: 42 };
const { name1 } = student;
console.log(name1);

const obj4 = { name2: "john Doe", age: 30, gender: "male", country: "USA" };

const { name2, age, country } = obj4;
console.log(name2, age, country);

// Re-name
const obj5 = { x: 100, y: 200 };
const { x, y } = obj5;

console.log(x);
console.log(y);

const obj6 = { x1: 100, y1: 200 };
const { x1: x2, y1: y2 } = obj6;

console.log(x2);
console.log(y2);

console.clear();

const person2 = {
  name3: "Jhon Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

const { name3: personName, age: personAge, country: personCountry } = person2;
console.log(personName, personAge, personCountry);

// Nested Destructuring
const d1 = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just Like You", singer: "NF", duration: 3.23 },
  { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
];

const [, , { singer }] = d1;
console.log(singer);

console.clear();

const dataaa = {
  user: {
    id: 123,
    namee: "John Doe",
    agee: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      countryy: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

const {
  user: {
    namee,
    agee,
    address: {city, countryy},
    hobbies,
    scores: {math, science, history},
    email
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {email: emailNotification, sms: smsNotification, push: pushNotification}
  },
  language
} = dataaa;

console.log("Name:", namee);
console.log("Age:", agee);
console.log(`Address: ${city}, ${country} `);
console.log(`Hobbies: ${hobbies.join(', ')}`);
console.log(`Scores: ${math}, `);

// Ternary Operator
// Condition : if true ? not true.

let password = 2;
function passCheck(ps) {
//   if (Ps === 8) {
//     return `Strong pass`
//   } else {
//     return `Minimum 8 char's`
//   }

  return ps === 8 ? `Strong pass` : `Minimum 8 char's`;
}

const res = passCheck(password);
console.log(res);

const res1 = password

let age1 = 17
const isAdult = age1 >= 18 ? true : false;
console.log(isAdult);

let personMoney = false;
let haveMoney = personMoney === true ? 'Buy Products' : 'They Should Bring Money'
console.log(haveMoney);

console.clear()

// For in Loop.
let p2 = {
  name: `Lokesh`,
  age: 21,
  gender: `male`
}

for(let key in p2) {
  console.log(key, p2[key]);
}

const list = ['one', 'two', 'three', 'four'];
for(let index in list){
  console.log(`${index} : ${list[index]}`);
}

const object = { a:1, b:2, c:3};
for(let key in object){
  console.log(key, object[key]);
}

// For of Loop
const peoples = ['p1', 'p2', 'p3'];
for (people of peoples) {
  console.log(people);
}

const text = "Lokesh"
for (char of text) {
  console.log(char);
}

const array1 = ["a", "b", "c"];
for (aa of array1) {
  console.log(aa);
}

console.clear();

// For Each

const ar2 = ["teal", "blue", "red", "green"]
ar2.forEach((color) => console.log(color))

const words = ["hello", "world", "array", "hashMap"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
})

console.log(words);

console.clear();


const numbs = [1, 2, 3, 4, 5];
let sum = 0;

function adder(number) {
  sum += number;
}

numbs.forEach(adder);

console.log(sum);

// Map Helper.
let numbs2 = [1,2,3,4,5];
let numbs3 = numbs2.map((num) => num * 2);
console.log(numbs3);

const numbs4 = [1,4,2,5,6,7];
let numbs5 = numbs4.map((num) => num*10);
console.log(numbs5);


// filter
const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

console.log(songs.filter((song) => song.duration > 3));

const computers = [
  {ram: 4, hdd: 100},
  {ram: 8, hdd: 200},
  {ram: 16, hdd: 300},
  {ram: 31, hdd: 400}
]

console.log(computers.filter((comp) => comp.ram > 8));

const ages = [32, 33, 16, 40]
console.log(ages.filter((age) => age >= 18 ));

const wordss = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

function checkLen(word) {
  return word.length > 6 ? true : false
}

const ress = wordss.filter(checkLen);
console.log(ress);


// Find

const aggess = [3, 10, 18, 20];
console.log(aggess.find((age) => age > 18));

// Every Method
const namess = ["loki", "thor", "Bhorr", "a"]
const res2 = namess.every((name) => name.length === 4)
console.log(res2);

// Some
const res3 = namess.some((name) => name.length < 5)
console.log(res3);

// Reduce
const numbs6 = [1,2,3,4,5];
const sum1 = numbs6.reduce((p, c) => {
  return p + c
}, 0)

console.log(sum1);

console.clear();


const numbs7 = [1,2,3,4,5];

const product = numbs7.reduce((p, c) => {
  return p * c;
}, 1);

console.log(product);

// MAP Data Structure

const map = new Map()
const keyOne = "String"
const keyTwo = {}
const keyThree = function () {};

map.set(keyOne, "value One");
map.set(keyTwo, "value Two");
map.set(keyThree, "value Three");

console.log(map);
console.log(map.keys());
console.log(map.values());

for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let key of map.keys()) {
  console.log(`${key}`);
}

for (let value of map.values()) {
  console.log(`${value}`);
}

const mp1 = new Map();
mp1.set("a",1);
mp1.set("b",2);
mp1.set("c",3);

console.log(mp1.get("a"));
console.log(mp1.size);
mp1.delete("b")
console.log(mp1);

// SET

const s1 = new Set();
s1.add("apple");
s1.add("apple");
s1.add("orange");
s1.add("banana");


const letters = new Set();
letters.add("a")
letters.add("b")
letters.add("c")

for (value of letters) {
  console.log(value);
} 