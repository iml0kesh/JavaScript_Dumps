// href
// value
// type


const a = document.querySelector("a");
const input = document.querySelector("input")

console.log(a.href = "www.google.com");
console.log(input.type = "password");
console.log(input.placeholder = "please provide pass");

// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
input.setAttribute("type","text");
console.log(input.type);