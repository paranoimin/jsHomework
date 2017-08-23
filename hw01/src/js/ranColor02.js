window.onload = function() {
    var trigger = document.getElementById("colorBtn");
    trigger.addEventListener("click", bgChange);
};

function bgChange() {
    var boxes = document.getElementsByClassName("box");

    var i = 0;

    for (i; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#" + colorCode();
    }
    console.log(colorCode());

}

function colorCode() {

    var color = Math.floor(Math.random() * 16777215).toString(16);

    return color;
}
