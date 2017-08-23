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
    var r = Math.floor(Math.random() * 256).toString(16);
    if(1 == r.length) {
        r = 0 + r;
    }
    var g = Math.floor(Math.random() * 256).toString(16);
    if(1 == g.length) {
        g = 0 + g;
    }
    var b = Math.floor(Math.random() * 256).toString(16);
    if(1 == b.length) {
        b = 0 + b;
    }

    console.log("r 의 길이 : " + r.length);
    console.log("g 의 길이 : " + g.length);
    console.log("b 의 길이 : " + b.length);

    var color = r + g + b;

    return color;
}
