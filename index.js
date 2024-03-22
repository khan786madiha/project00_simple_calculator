#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.bgGreen("Enter your first number"), type: "number", name: "firstNumber" },
    { message: chalk.bgGreen("Enter your second number"), type: "number", name: "secondNumber" },
    {
        message: chalk.bgGreen("select one of the operators to perform operation"),
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication",
            "division", "modulus", "Exponent"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(chalk.bgBlue(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "subtraction") {
    console.log(chalk.bgBlue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "multiplication") {
    console.log(chalk.bgBlue(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "division") {
    console.log(chalk.bgBlue(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "modulus") {
    console.log(chalk.bgBlue(answer.firstNumber % answer.secondNumber));
}
else if (answer.operator === "Exponent") {
    console.log(chalk.bgBlue(answer.firstNumber ** answer.secondNumber));
}
else {
    console.log(chalk.bgRedBright("please select valid operator"));
}
