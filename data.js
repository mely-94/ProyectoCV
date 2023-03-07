document.getElementById("it").addEventListener("mouseover", mouseOver);
document.getElementById("it").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("it").style.color = "red";
}

function mouseOut() {
    document.getElementById("it").style.color = "#FF4D6A";
}