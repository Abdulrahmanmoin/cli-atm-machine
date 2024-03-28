#!/usr/bin/env node

import inquirer from "inquirer"

let myBalance: number = 10000;
console.log(`Your current balance is ${myBalance}`);

let pinAns = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin code:"
}])

let myPin: number = 1234;

if (myPin === pinAns.pin) {
    console.log("Correct pin code.");
    let operationAns = await inquirer.prompt([{
        name: "operation",
        type: "list",
        message: "What you want to do?",
        choices: ["Cash Withdrawal", "Fast Cash", "Check Balance" , "Cash Deposit"]
    }])
    if (operationAns.operation == "Cash Withdrawal") {
        let withdrawalAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter amount:",
        })

        if (withdrawalAmount.amount > myBalance) {
            console.log("Insufficient Balance");
            
        } else {
            console.log(`Your remaining amount is ${myBalance -= withdrawalAmount.amount}`);
        }

        
    }
    
    else if(operationAns.operation == "Fast Cash"){
        let fastCashAns = await inquirer.prompt([{
            name: "fastCash",
            type: "list",
            message: "Select your amount",
            choices: [1000, 2000, 5000, 10000]
        }]);
        
        console.log(`Your remaining balance is ${myBalance -= fastCashAns.fastCash}`);
    }
    
    else if(operationAns.operation == "Cash Deposit"){
        let cashDepositAns = await inquirer.prompt([{
            name: "cashDeposit",
            type: "list",
            message: "Select your amount to deposit",
            choices: [1000, 2000, 5000, 10000]
        }])

        console.log(`Successfully deposit your cash. Now your current balance is ${myBalance += cashDepositAns.cashDeposit}`);
    }


    else {
        console.log(`Your current balance is ${myBalance}`);   
    }
} else {
    console.log("Wrong pin code.");
}