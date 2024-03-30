#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: (chalk.greenBright("Enter your first number"))
    },
    {
        name: "secondNumber",
        type: "number",
        message: (chalk.greenBright("Enter your second number"))
    },
    {
        name: "operator",
        type: "list",
        message: (chalk.yellow("Select one of the operator to perform operations")),
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumbernumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
