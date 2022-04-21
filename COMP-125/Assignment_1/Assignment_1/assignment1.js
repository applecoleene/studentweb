// JavaScript source code
function unitChoice() {
    if (document.getElementById('metricop').checked) {
        document.getElementById('metricChoice').style.visibility = 'visible';
        document.getElementById('imperialChoice').style.visibility = 'hidden';
    }
    else {
        document.getElementById('metricChoice').style.visibility = 'hidden';
        document.getElementById('imperialChoice').style.visibility = 'visible';
    }
}

function calculateMet() {
    var genderCh = document.getElementById('gender').value;
    var ageVal = document.getElementById('age').value;
    var centi = document.getElementById('cm').value;
    var kilo = document.getElementById('kg').value;
    if (genderCh == "female") {
        var preBmr = 655 + (9.563 * kilo) + (1.850 * centi) - (4.676 * ageVal);
        if (document.getElementById('firstOp').checked) {
            var bmr = preBmr * 1.2;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('secOp').checked) {
            var bmr = preBmr * 1.375;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('thirdOp').checked) {
            var bmr = preBmr * 1.55;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fourthOp').checked) {
            var bmr = preBmr * 1.725;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fifthOp').checked) {
            var bmr = preBmr * 1.9;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
    }
    if (genderCh == "male") {
        var preBmr = 66.5 + (13.75 * kilo) + (5.003 * centi) - (6.755 * ageVal);
        if (document.getElementById('firstOp').checked) {
            var bmr = preBmr * 1.2;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('secOp').checked) {
            var bmr = preBmr * 1.375;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('thirdOp').checked) {
            var bmr = preBmr * 1.55;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fourthOp').checked) {
            var bmr = preBmr * 1.725;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fifthOp').checked) {
            var bmr = preBmr * 1.9;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
    }
}

function calculateImp() {
    var genderCh = document.getElementById('genderImp').value;
    var ageVal = document.getElementById('ageImp').value;
    var stone = document.getElementById('stonesImp').value;
    var pound = document.getElementById('poundsImp').value;
    var foot = document.getElementById('feetImp').value;
    var inch = document.getElementById('inchesImp').value;
    var inch2 = (foot * 12) + +inch;
    var pound2 = (stone * 14) + +pound;
    if (genderCh == "femaleImp") {
        //var preBmr = (4.536 * inch2) + (15.88 * pound2) - (5 * ageVal) - 161;
        var preBmr = 655 + (4.35 * pound2) + (4.7 * inch2) - (4.7 * ageVal);
        if (document.getElementById('firstOpImp').checked) {
            var bmr = preBmr * 1.2;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('secOpImp').checked) {
            var bmr = preBmr * 1.375;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('thirdOpImp').checked) {
            var bmr = preBmr * 1.55;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fourthOpImp').checked) {
            var bmr = preBmr * 1.725;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fifthOpImp').checked) {
            var bmr = preBmr * 1.9;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
    }
    if (genderCh == "maleImp") {
        var preBmr = 66 + (6.2 * pound2) + (12.7 * inch2) - (6.76 * ageVal);
        //var preBmr = (4.536 * inch) + (15.88 * pound) - (5 * ageVal) + 5;
        if (document.getElementById('firstOpImp').checked) {
            var bmr = preBmr * 1.2;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('secOpImp').checked) {
            var bmr = preBmr * 1.375;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('thirdOpImp').checked) {
            var bmr = preBmr * 1.55;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fourthOpImp').checked) {
            var bmr = preBmr * 1.725;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
        else if (document.getElementById('fifthOpImp').checked) {
            var bmr = preBmr * 1.9;
            alert("Your BMR is " + preBmr.toFixed(0) + " and your Calorie intake is " + bmr.toFixed(0) + "/day");
        }
    }
}
document.getElementById("submitImp").addEventListener("click", calculateImp, false);

document.getElementById("submitMet").addEventListener("click", calculateMet, false);
