#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
console.log(chalk.magenta(`Your current balance is ${chalk.green(myBalance)}`));
let pinAns = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }]);
let myPin = 1234;
if (myPin === pinAns.pin) {
    console.log(chalk.green("Correct pin code."));
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: chalk.yellow("What you want to do?"),
            choices: ["Cash Withdrawal", "Fast Cash", "Check Balance", "Cash Deposit"]
        }]);
    if (operationAns.operation == "Cash Withdrawal") {
        let withdrawalAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: chalk.yellow("Enter amount:"),
        });
        if (withdrawalAmount.amount > myBalance) {
            console.log(chalk.bold.red("Insufficient Balance"));
        }
        else {
            console.log(chalk.blue(`Your remaining amount is ${myBalance -= withdrawalAmount.amount}`));
        }
    }
    else if (operationAns.operation == "Fast Cash") {
        let fastCashAns = await inquirer.prompt([{
                name: "fastCash",
                type: "list",
                message: chalk.yellow("Select your amount"),
                choices: [1000, 2000, 5000, 10000]
            }]);
        console.log(chalk.blue(`Your remaining balance is ${myBalance -= fastCashAns.fastCash}`));
    }
    else if (operationAns.operation == "Cash Deposit") {
        let cashDepositAns = await inquirer.prompt([{
                name: "cashDeposit",
                type: "list",
                message: chalk.yellow("Select your amount to deposit"),
                choices: [1000, 2000, 5000, 10000]
            }]);
        console.log(chalk.blue(`Successfully deposit your cash. Now your current balance is ${myBalance += cashDepositAns.cashDeposit}`));
    }
    else {
        console.log(chalk.cyanBright(`Your current balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.bold.red("Incorrect pin code."));
}
