// Control Flow

let a = 10
let b = 20

if(a > b) {
    console.log("A is greater than b");
} else if (a < b){
    console.log("A is less than b");
} else {
    console.log("A is equal to b");
}

console.clear()

let password;
if(password == 8){
    console.log("Welcone");
} else if(password <= 8) {
    console.log("password is too short");
} else if(password >= 8){
    console.log("too Long password");
    console.log("Password should be 8 characters");
} else {
    console.log("Please Provide a password");
}

console.clear()

// Switch  Statements
let x = '0'
let text;

switch (x) {
    case 0:
        text = "off"
        console.log(text);
        break;
    case 1:
        text = "on"
        console.log(text);
        break;
    default:
        text = "no value found";
        console.log(text);
}


console.clear()

let fruit = "banana"

switch (fruit) {
    case "banana":
        console.log("banana is good");
        break;
    case "Orange":
        console.log("I am not a fan of orange");
        break;
    case "Apple":
        console.log("How you like them apples?");
        break;
    default:
        console.log("I have never heard of that fruit");
        break;
}

console.clear()


// Loops

// for loop
// for (initial Expression; condition; incrementExpression) {}
for (let i = 0; i <= 5; i++){
    console.log(i, "Hello World");
}

console.clear();

for(let i = 0; i <= 1000; i++){
    console.log("Lokesh", i);
}

console.clear()


// // While Loop
let i = 10
while (i <= 100) {
    console.log("Lokesh", i);
    i++;
}

// Do While Loop

do {
    console.log("Hello");
} while(i <= 5)

console.clear();


// Logical Operators
// 1 . AND (&&)
// 2. OR (||)
// 3. NOT (!)

const n1 = 2;
const n2 = 3;
const n3 = 4;

console.log(n1 > n3 && n2 < n3);
console.log(n1 > n3 || n2 < n3);
console.log(!(n1 > n3));