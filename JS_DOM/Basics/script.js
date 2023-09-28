// Selection of an Element.
let a = document.querySelector("h1");
console.log(a);

// Changing HTML
a.innerHTML = "Text Changed";

// Changing the CSS
a.style.color = "red";
a.style.backgroundColor = "black";

// Even Listener
// Has two parameters
// 1. The event (pre-defined events)
// 2. execute function.
a.addEventListener("click", function () {
    console.log("hey");
})
