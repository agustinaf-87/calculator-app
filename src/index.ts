import { Calculator } from "calculator-ts-agustina-fernandez";

const calculator = new Calculator();

let input = require('prompt-sync')();
let userOption : number;
let finished : boolean = false;
let number1: number;
let number2: number;
enum Calculations {
	Addition = 1,
	Substraction,
	Multiplication,
	Division
}

do{
    console.log("welcome to my calculator app, please choose one calculation:  ")
    Calculations;

    userOption = input();
    switch(Number(userOption)) {
        case 1:
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.addition(Number(number1), Number(number2)));
            break;

        case 2:
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.substraction(Number(number1), Number(number2)));
            break;

        case 3:
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.multiplication(Number(number1), Number(number2)));
            break;

        case 4:
            
            console.log("Please Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ',calculator.division(Number(number1), Number(number2)));
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
}while (!finished);