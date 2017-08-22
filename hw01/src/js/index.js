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

}

function colorCode() {

    var color = "";
    var code = "abcde0123456789";

    for (var i = 0; i < 6; i++) {
        color += code.charAt(Math.floor(Math.random() * code.length));
    }

    return color;
}
