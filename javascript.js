var myDiv = document.getElementById("box");

function grow() {
    myDiv.classList.add("grow");
}


function fade() {
    myDiv.classList.add("fade-in");
    setTimeout(function () { myDiv.classList.remove("fade-in"); }, 2000);
}

function blue() {
    var x = document.getElementById('box');
    if (x.style.backgroundColor === 'blue') {
        x.style.backgroundColor = 'blue';
    } else {
        x.style.backgroundColor = 'blue';
    }
}

function shadow() {
    myDiv.classList.add("shadow");
}

function refelction() {
    myDiv.classList.add("refelction");
}

function round() {
    myDiv.classList.add("round");
}


function reset() {
    myDiv.classList = [];
    myButton.classList = [];
    var x = document.getElementById('box');
    if (x.style.backgroundColor === 'orange') {
        x.style.backgroundColor = 'orange';
    } else {
        x.style.backgroundColor = 'orange';
    }
}

var myButton = document.getElementById("button7");

function button() {
    myButton.classList.add("button");
}

