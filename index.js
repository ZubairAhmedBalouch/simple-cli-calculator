#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Please Enter your first Number", type: "number", name: "firstNumber" },
    { message: "Please Enter your Second Number", type: "number", name: "secondNumber" },
    { message: "Select One of the Operator to perform Operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtration", "Multiplication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "Subtration") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid Operator");
}
//I am very happy to share that, this is my 1st Simple Project titled "simple-cli-calculator", which i have published on GitHub.
