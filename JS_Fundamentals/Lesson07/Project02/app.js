const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        color = btn.value;
        changeColor(color)
    })
})

function changeColor(color) {
    switch(color) {
        case "purple":
            body.classList.add("purple");
            break;
        case "blue":
            body.classList.add("blue");
            break;
        default:
            break;
    }
}