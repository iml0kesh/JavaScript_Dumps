let light = document.querySelector(".light");
let ON = document.querySelector(".btn-on");
let OFF = document.querySelector(".btn-off");

ON.addEventListener("click", function () {
  light.style.backgroundColor = "Yellow";
});

OFF.addEventListener("click", function () {
    light.style.backgroundColor = "rgb(119, 119, 116)";
});

