import { Calculator } from "calculator-ts-agustina-fernandez";

const calculator = new Calculator();

let input = require('prompt-sync')();
let userOption : number;
let finished : boolean = false;
let number1: number;
let number2: number;
let operator: string;


do{
    console.log("welcome to my calculator app, please choose one calculation:");
    console.log("Please enter an operator to do the math calculation: +,  - , * ,  /,  "); 
    

    // userOption = input();
    operator = input();
    // switch(Number(userOption)) {
        switch(operator) {
        case "+":
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.addition(Number(number1), Number(number2)));
            break;

        case "-":
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.substraction(Number(number1), Number(number2)));
            break;

        case "*":
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.multiplication(Number(number1), Number(number2)));
            break;

        case "/":
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.division(Number(number1), Number(number2)));
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
}while (!finished);