"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_ts_agustinafernandez_1 = require("calculator-ts-agustinafernandez");
const calculator = new calculator_ts_agustinafernandez_1.Calculator();
let input = require('prompt-sync')();
let userOption;
let finished = false;
let number1;
let number2;
var Calculations;
(function (Calculations) {
    Calculations[Calculations["Addition"] = 1] = "Addition";
    Calculations[Calculations["Substraction"] = 2] = "Substraction";
    Calculations[Calculations["Multiplication"] = 3] = "Multiplication";
    Calculations[Calculations["Division"] = 4] = "Division";
})(Calculations || (Calculations = {}));
do {
    console.log("welcome to my calculator app, please choose one calculation:  ");
    console.log(Calculations);
    userOption = input();
    switch (Number(userOption)) {
        case 1:
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.addition(Number(number1), Number(number2)));
            break;
        case 2:
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.substraction(Number(number1), Number(number2)));
            break;
        case 3:
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.multiplication(Number(number1), Number(number2)));
            break;
        case 4:
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.division(Number(number1), Number(number2)));
            break;
        case 0:
            console.log("Tanhk you for using my calculator app!");
            finished = true;
            break;
        default:
            console.log("...");
            finished = true;
            break;
    }
} while (!finished);
