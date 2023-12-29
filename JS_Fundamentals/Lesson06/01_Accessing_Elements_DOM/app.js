// Accessing The Elements

// DOM SELECTORS
// 1. getElementsByTagName
const element = document.getElementsByTagName("h1")
console.log(element);

// 2. getElementsById
const element2 = document.getElementById("main")
console.log(element2);

// 3. getElementsByClassName
const element3 = document.getElementsByClassName("cls")
console.log(element3);

// 4. querySelector
const element4 = document.querySelector(".cls-1")
console.log(element4);

// 5. querySelectorAll
const elements5 = document.querySelectorAll("li");
console.log(elements5);