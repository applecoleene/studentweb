"use strict";

var ghost = {
    x: 0,
    y: 0
};
var ghostCaught = 0;
var speed = 10000;
var moveGhost;

var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

var background = new Image();
background.src = "fixedbackground.jpg";

var ghostImage = new Image();
ghostImage.src = "fixedghost.png";

function resetPosition() {
    ghost.x = (Math.random() * (canvas.width - 100));
    ghost.y = (Math.random() * (canvas.height - 100));
}

function render() {
    resetPosition();
    context.drawImage(background, 0, 0);
    context.drawImage(ghostImage, ghost.x, ghost.y);

    //var scoreArea = document.getElementById("score");
    //scoreArea.innerHTML = "Score: " + ghostCaught;

    context.fillStyle = "rgb(250, 250, 250)";
	context.font = "20px Creepster";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Score: " + ghostCaught, 32, 32);
}

function catchGhost(e) {
    var leftCan = e.pageX - canvas.offsetLeft;
    var topCan = e.pageY - canvas.offsetTop;
    if (leftCan > ghost.x && leftCan < (ghost.x + ghostImage.width) &&
        topCan > ghost.y && topCan < (ghost.y + ghostImage.height)) {
        ghostCaught++;
        render();
        speed = speed / 1.1;
        clearInterval(moveGhost);
        moveGhost = setInterval(render, speed);
    }
}

function resetScore() {
    ghostCaught = 0;
    render();
}

function resetLevel() {
    speed = 10000;
    clearInterval(moveGhost);
    moveGhost = setInterval(render, speed);
}

function createEventListeners() {
    if (canvas.addEventListener) {
        canvas.addEventListener("click", catchGhost, false);
    } else if (canvas.attachEvent) {
        canvas.attachEvent("onclick", catchGhost);
    }
    var sc = document.getElementById("reScore");
    if (sc.addEventListener) {
        sc.addEventListener("click", resetScore, false);
    } else if (sc.attachEvent) {
        sc.attachEvent("onclick", resetScore);
    }
    var lev = document.getElementById("reLevel");
    if (lev.addEventListener) {
        lev.addEventListener("click", resetLevel, false);
    } else if (lev.attachEvent) {
        lev.attachEvent("onclick", resetLevel);
    }
}

function setUpPage() {
    render();
    createEventListeners();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}