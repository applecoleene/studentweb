"use strict";

var xhr = new XMLHttpRequest();
var photoList = [];
var placement = 0;
var intSpeed, intervalImg;
var areaImg = document.getElementsByTagName("img")[0];


function loadImage() {
    xhr.open("GET", "park.txt", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            photoList = JSON.parse(xhr.responseText);
            areaImg.src = "http://studentweb.cencol.ca/aduquina/COMP-125/Assignment_6/images/" + photoList[placement].image;
            intSpeed = photoList[placement].interval;
            //alert(placement);
            resetSpeed();
        }
    }
    xhr.send();
}

function resetSpeed() {
    clearInterval(intervalImg);
    intervalImg = setInterval(next, intSpeed);
}

function next() {
    if (photoList.length === placement + 1) {
        placement = 0;
    } else {
        placement++;
    }
    loadImage();
}

function previous() {
    if (placement === 0) {
        placement = photoList.length - 1;
    } else {
        placement--;
    }
    loadImage();
}

function update() {
    placement = 0;
    loadImage();
}

function createEventListeners() {
    var prev = document.getElementById("previous");
    var nxt = document.getElementById("next");
    var upd = document.getElementById("update");

    if (prev.addEventListener) {
        prev.addEventListener("click", previous, false);
    } else if (prev.attachEvent) {
        prev.attachEvent("onclick", previous);
    }

    if (nxt.addEventListener) {
        nxt.addEventListener("click", next, false);
    } else if (nxt.attachEvent) {
        nxt.attachEvent("onclick", next);
    }

    if (upd.addEventListener) {
        upd.addEventListener("click", update, false);
    } else if (upd.attachEvent) {
        upd.attachEvent("onclick", update);
    }
}

function setUpPage() {
    createEventListeners();
    loadImage();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}