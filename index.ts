#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first Number", type: "number", name: "firstNumber" },
  { message: "Enter your Second Number", type: "number", name: "secondNumber" },
  { message: "Select One of the Operator to perform Operation",
type:"list",
name:"Operator",
choices:["Addition","Subtration", "Multiplication", "Division"],
},
]);

if(answer.Operator==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber );
} else if(answer.Operator==="Subtration"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.Operator==="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.Operator==="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("Please select a valid Operator")
}