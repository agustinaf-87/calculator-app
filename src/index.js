"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_ts_agustina_fernandez_1 = require("calculator-ts-agustina-fernandez");
const calculator = new calculator_ts_agustina_fernandez_1.Calculator();
let input = require('prompt-sync')();
let finished = false;
let number1;
let number2;
let operator;
do {
    console.log("welcome to my calculator app, please choose one calculation:");
    console.log("Please enter an operator to do the math calculation: +,  - , * ,  /,  ");
    operator = input();
    switch (operator) {
        case "+":
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.addition(Number(number1), Number(number2)));
            break;
        case "-":
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.substraction(Number(number1), Number(number2)));
            break;
        case "*":
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.multiplication(Number(number1), Number(number2)));
            break;
        case "/":
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.division(Number(number1), Number(number2)));
            break;
        case " ":
            console.log("Tanhk you for using my calculator app!");
            finished = true;
            break;
        default:
            console.log("...");
            finished = true;
            break;
    }
} while (!finished);
