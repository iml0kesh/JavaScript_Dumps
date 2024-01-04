// ------------------------------------
// createElement()
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
console.log(h1);

// appendChild()
const body = document.body
body.appendChild(h1)

// append()


// prepend()
// insertBefore()
const newLi = document.createElement("li");
newLi.textContent = "This is new li"

const li = document.querySelector("li")
const ul = document.querySelector("ul")

ul.insertBefore(newLi, li)

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------