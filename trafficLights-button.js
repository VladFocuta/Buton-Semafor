let button = document.querySelector("button");
let color = "red";
setInterval(function () {
    if (color == "red") {
        button.style.backgroundColor = "yellow";
        color = "yellow";
    } else if (color == "yellow") {
        button.style.backgroundColor = "green";
        color = "green";
    } else if (color == "green") {
        button.style.backgroundColor = "red";
        color = "red";
    }
}, 11000);
function changeColor() {
    if (color == "red") {
        button.style.backgroundColor = "yellow";
        color = "yellow";
    } else if (color == "yellow") {
        button.style.backgroundColor = "green";
        color = "green";
    } else if (color == "green") {
        button.style.backgroundColor = "red";
        color = "red";
    }
}
