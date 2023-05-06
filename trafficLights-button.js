let button = document.querySelector("button");
let colors = ["red", "yellow", "green"];
let currentColorIndex = 0;
function changeColor() {
  button.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}
setInterval(function () {
    changeColor();
}, 11000);
