

const numberArea = document.getElementById("number");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");


let number = 0;
decrement.addEventListener("click", function() {
    number = number - 1;
    numberArea.textContent = number;
    if(number < 0){
        numberArea.style.color = 'red';
    }
})

reset.addEventListener('click', function() {
    number = 0;
    numberArea.textContent = number;
    numberArea.style.color = 'black';
})

increment.addEventListener("click", function() {
    number = number + 1;
    numberArea.textContent = number;
    if(number > 0){
        numberArea.style.color = 'green';
    }
})
