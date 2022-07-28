// variables
let first = '';
let second = '';
let currOperation = null;
let toResetScreen = false;

// document variables
const prevScreen = document.getElementById("prevScreen");
const currScreen = document.getElementById("currScreen");
const numBtn = document.querySelectorAll("[number]");
const operatorBtn = document.querySelector("[operator]");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const decimalBtn = document.getElementById("decimalBtn");
const equalsBtn = document.getElementById("equalsBtn");

// event listeners













// mathematical functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a , b) {
    return a % b;
}

function negate(a, b) {
    return 0;
}