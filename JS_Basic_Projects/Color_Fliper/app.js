const colors = ['white','Red','Blue','Green','Orange','Yellow','Cyan','Violet']

const body = document.body;
let color = document.getElementById('colorName');
const btn = document.getElementById("btn-change");

btn.addEventListener('click', function() {
  const randomColor = getRandomColor()
  body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
})

function getRandomColor() {
  return Math.floor(Math.random()*colors.length);
}