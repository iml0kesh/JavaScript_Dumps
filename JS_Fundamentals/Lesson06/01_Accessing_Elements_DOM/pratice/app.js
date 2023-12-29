// 1. Select element h4 which holds text of "Red" by using getElementsByTagName

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName

// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsById

// 4. Select div which has the class & Id of "yellow" by using querySelector()

// 5. Select all the elements which has the class of "teal" by using querySelectorAll

const redEle = document.getElementsByTagName("h4")
const divEle1 = document.getElementsByClassName("green")
const divEle2 = document.getElementsById("blue")
const divEle3 = document.querySelector(".yellow")
const divEle4 = document.querySelector("#yellow")
const divEles5 = document.querySelectorAll(".teal")