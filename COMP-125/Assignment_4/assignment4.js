"use strict";

var profile = {};

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

function validateFirstName() {
    var fnameInput = document.getElementById("fname");
    var formError = document.getElementById("fnameError");
    var valid = true;
    if (fnameInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        fnameInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        fnameInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateLastName() {
    var lnameInput = document.getElementById("lname");
    var formError = document.getElementById("lnameError");
    var valid = true;
    if (lnameInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        lnameInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        lnameInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateAddress() {
    var addressInput = document.getElementById("address");
    var formError = document.getElementById("addressError");
    var valid = true;
    if (addressInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        addressInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        addressInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateCity() {
    var cityInput = document.getElementById("city");
    var formError = document.getElementById("cityError");
    var valid = true;
    if (cityInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        cityInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        cityInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validatePostal() {
    var posCodeInput = document.getElementById("pcode");
    var formError = document.getElementById("pcodeError");
    var valid = true;
    var posCodeFormat = /^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$/;
    if (posCodeInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        posCodeInput.style.border = "1px solid red";
        valid = false;
    } else if (posCodeFormat.test(posCodeInput.value) === false) {
        formError.innerHTML = "Please enter correct format a0a0a0.";
        formError.style.color = "red";
        posCodeInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        posCodeInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateProvince() {
    var provinceInput = document.getElementById("province");
    var formError = document.getElementById("provinceError");
    var valid = true;
    if (provinceInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        provinceInput.style.border = "1px solid red";
        valid = false;
    } else if (provinceInput.value !== "QC" &&
        provinceInput.value !== "ON" &&
        provinceInput.value !== "MN" &&
        provinceInput.value !== "SK" &&
        provinceInput.value !== "AB" &&
        provinceInput.value !== "BC") {
        formError.innerHTML = "Valid provinces are QC, ON, MN, SK, AB, BC.";
        formError.style.color = "red";
        provinceInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        provinceInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateAge() {
    var ageInput = document.getElementById("age");
    var formError = document.getElementById("ageError");
    var valid = true;
    if (ageInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        ageInput.style.border = "1px solid red";
        valid = false;
    } else if (isNaN(ageInput.value) || ageInput.value < 18) {
        formError.innerHTML = "Must be at least 18 years old.";
        formError.style.color = "red";
        ageInput.style.border = "1px solid red";
        return false;
    } else {
        formError.innerHTML = "";
        ageInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validatePassword() {
    var passInput = document.getElementById("password");
    var passError = document.getElementById("passwordError");
    var valid = true;
    if (passInput.value === "") {
        passError.innerHTML = "Please fill this field.";
        passError.style.color = "red";
        passInput.style.border = "1px solid red";
        valid = false;
    } else if (/.{6,}/.test(passInput.value) === false) {
        passError.innerHTML = "Password must be at least 6 characters.";
        passError.style.color = "red";
        passInput.style.border = "1px solid red";
        valid = false;
    } else if (/[a-zA-Z]/.test(passInput.value) === false) {
        passError.innerHTML = "Password must contain at least one letter.";
        passError.style.color = "red";
        passInput.style.border = "1px solid red";
        valid = false;
    } else if (/[A-Z]/.test(passInput.value) === false) {
        passError.innerHTML = "Password must contain at least one uppercase letter.";
        passError.style.color = "red";
        passInput.style.border = "1px solid red";
        valid = false;
    } else if (/\d/.test(passInput.value) === false) {
        passError.innerHTML = "Password must contain at least one number.";
        passError.style.color = "red";
        passInput.style.border = "1px solid red";
        valid = false;
    } else {
        passError.innerHTML = "";
        passInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateConfirm() {
    var passInput = document.getElementById("password");
    var conInput = document.getElementById("confirm");
    var conError = document.getElementById("confirmError");
    var valid = true;
    if (conInput.value === "") {
        conError.innerHTML = "Please fill this field.";
        conError.style.color = "red";
        conInput.style.border = "1px solid red";
        valid = false;
    } else if (passInput.value !== conInput.value) {
        conError.innerHTML = "Password does not match.";
        conError.style.color = "red";
        conInput.style.border = "1px solid red";
        valid = false;
    } else {
        conError.innerHTML = "";
        conInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var formError = document.getElementById("emailError");
    var valid = true;
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    if (emailInput.value === "") {
        formError.innerHTML = "Please fill this field.";
        formError.style.color = "red";
        emailInput.style.border = "1px solid red";
        valid = false;
    } else if (emailCheck.test(emailInput.value) === false) {
        formError.innerHTML = "Provide proper email.";
        formError.style.color = "red";
        emailInput.style.border = "1px solid red";
        valid = false;
    } else {
        formError.innerHTML = "";
        emailInput.style.border = "1px solid black";
        valid = true;
    }
    return valid;
}

function clearForm() {
    document.getElementById("registerForm").reset();
    removeSelectDefaults();
    var inp = document.getElementsByTagName("input");
    var sel = document.getElementsByTagName("select");
    var par = document.getElementsByTagName("p");
    for (var i = 0; i < inp.length; i++) {
        inp[i].style.border = "1px solid black";
    }
    for (var i = 0; i < sel.length; i++) {
        sel[i].style.border = "1px solid black";
    }
    for (var i = 0; i < par.length; i++) {
        par[i].innerHTML = "";
    }
}

function validateForm() {
    if (validateFirstName() && validateLastName() && validateAddress() &&
        validateCity() && validatePostal() && validateProvince() && validateProvince() &&
        validateAge() && validatePassword() && validateConfirm() && validateEmail()) {
        viewProfile();
        alert("Thanks for registering with our website, your customer record was created successfully.");
    } else if (validateFirstName() === "" || validateLastName() === "" || validateAddress() === "" ||
        validateCity() === "" || validatePostal() === "" || validateProvince() === "" || validateProvince() === "" ||
        validateAge() === "" || validatePassword() === "" || validateConfirm() === "" || validateEmail() === "") {
        //alert("Please fill all fields.");
        var par = document.getElementsByTagName("p");
        var inp = document.getElementsByTagName("input");
        for (var i = 0; i < par.length; i++) {
            par[i].innerHTML = "Please fill this field.";
            par[i].style.color = "red";
            inp[i].style.border = "1px solid red";
        }
    } else {
        alert("Please fill all fields.");
    }
}

function viewProfile() {
    var formRegistration = document.getElementById("profile");
    var firstIn = document.getElementById("fname");
    var lnameIn = document.getElementById("lname");
    var addressIn = document.getElementById("address");
    var cityIn = document.getElementById("city");
    var pcodeIn = document.getElementById("pcode");
    var provinceIn = document.getElementById("province");
    var ageIn = document.getElementById("age");
    var emailIn = document.getElementById("email");

    formRegistration.innerHTML = "<h3>Profile:</h3>" +
        "<h4>Name: " + firstIn.value + " " + lnameIn.value + " </h4>" +
        "<h4>Age: " + ageIn.value + " years old</h4>" +
        "<h4>Address: " + addressIn.value + ", " + cityIn.value + ", " +
        provinceIn.value + ", " + pcodeIn.value + " </h4>" +
        "<h4>Email: " + emailIn.value + " </h4>";

    formRegistration.style.textAlign = "center";
    formRegistration.style.fontFamily = "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", "Arial", "sans-serif";
    formRegistration.style.fontVariant = "small-caps";
    formRegistration.style.textTransform = "capitalize";

    var button = document.createElement("button");
    button.innerHTML = "Return to Form";
    button.addEventListener('click', function () {
        location.reload();
    })
    formRegistration.appendChild(button);
}

function createEventListeners() {
    if (window.addEventListener) {
        window.addEventListener("load", removeSelectDefaults, false);
    } else if (window.attatchEvent) {
        window.attatchEvent("onload", removeSelectDefaults);
    }

    var clear = document.getElementById("clear");
    var submit = document.getElementById("submit");
    var firstIn = document.getElementById("fname");
    var lnameIn = document.getElementById("lname");
    var addressIn = document.getElementById("address");
    var cityIn = document.getElementById("city");
    var pcodeIn = document.getElementById("pcode");
    var provinceIn = document.getElementById("province");
    var ageIn = document.getElementById("age");
    var passwordIn = document.getElementById("password");
    var confirmIn = document.getElementById("confirm");
    var emailIn = document.getElementById("email");
    /*
        if (lnameIn.addEventListener) {
            //firstIn.addEventListener("change", validateFirstName, false);
            //lnameIn.addEventListener("change", validateLastName, false);
            //addressIn.addEventListener("change", validateAddress, false);
            //cityIn.addEventListener("change", validateCity, false);
            pcodeIn.addEventListener("change", validatePostal, false);
            provinceIn.addEventListener("change", validateProvince, false);
            ageIn.addEventListener("change", validateAge, false);
            passwordIn.addEventListener("change", validatePassword, false);
            confirmIn.addEventListener("change", validateConfirm, false);
            emailIn.addEventListener("change", validateEmail, false);
        } else if (lnameIn.attachEvent) {
            //firstIn.attachEvent("onchange", validateFirstName);
            //lnameIn.attachEvent("onchange", validateLastName);
            //addressIn.attachEvent("onchange", validateAddress);
            //cityIn.attachEvent("onchange", validateCity);
            pcodeIn.attachEvent("onchange", validatePostal);
            provinceIn.attachEvent("onchange", validateProvince);
            passwordIn.attachEvent("onchange", validateAge);
            passwordIn.attachEvent("onchange", validatePassword);
            confirmIn.attachEvent("onchange", validateConfirm);
            emailIn.attachEvent("onchange", validateEmail);
        }
        */

    if (firstIn.addEventListener) {
        firstIn.addEventListener("change", validateFirstName, false);
    } else if (firstIn.attachEvent) {
        firstIn.attachEvent("onchange", validateFirstName);
    }

    if (lnameIn.addEventListener) {
        lnameIn.addEventListener("change", validateLastName, false);
    } else if (lnameIn.attachEvent) {
        lnameIn.attachEvent("onchange", validateLastName);
    }

    if (addressIn.addEventListener) {
        addressIn.addEventListener("change", validateAddress, false);
    } else if (addressIn.attachEvent) {
        addressIn.attachEvent("onchange", validateAddress);
    }

    if (cityIn.addEventListener) {
        cityIn.addEventListener("change", validateCity, false);
    } else if (cityIn.attachEvent) {
        cityIn.attachEvent("onchange", validateCity);
    }

    if (pcodeIn.addEventListener) {
        pcodeIn.addEventListener("change", validatePostal, false);
    } else if (pcodeIn.attachEvent) {
        pcodeIn.attachEvent("onchange", validatePostal);
    }

    if (provinceIn.addEventListener) {
        provinceIn.addEventListener("change", validateProvince, false);
    } else if (provinceIn.attachEvent) {
        provinceIn.attachEvent("onchange", validateProvince);
    }

    if (ageIn.addEventListener) {
        ageIn.addEventListener("change", validateAge, false);
    } else if (ageIn.attachEvent) {
        ageIn.attachEvent("onchange", validateAge);
    }

    if (passwordIn.addEventListener) {
        passwordIn.addEventListener("change", validatePassword, false);
    } else if (passwordIn.attachEvent) {
        passwordIn.attachEvent("onchange", validatePassword);
    }

    if (confirmIn.addEventListener) {
        confirmIn.addEventListener("change", validateConfirm, false);
    } else if (confirmIn.attachEvent) {
        confirmIn.attachEvent("onchange", validateConfirm);
    }

    if (emailIn.addEventListener) {
        emailIn.addEventListener("change", validateEmail, false);
    } else if (emailIn.attachEvent) {
        emailIn.attachEvent("onchange", validateEmail);
    }

    if (clear.addEventListener) {
        clear.addEventListener("click", clearForm, false);
    } else if (clear.attatchEvent) {
        clear.attatchEvent("onclick", clearForm);
    }

    if (submit.addEventListener) {
        submit.addEventListener("click", validateForm, false);
    } else if (submit.attatchEvent) {
        submit.attatchEvent("onclick", validateForm);
    }

    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }

}

function setUpPage() {
    removeSelectDefaults();
    createEventListeners();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}