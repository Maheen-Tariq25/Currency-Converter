#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INDR: 74.57,
    PKR: 280
};
let userName = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "EUR", "GBP", "INDR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "EUR", "GBP", "INDR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
    }
]);
let fromAmount = currency[userName.from];
let toAmount = currency[userName.to];
let amount = userName.amount;
let baseAmount = fromAmount / amount;
let convertedAmount = toAmount * amount;
console.log(convertedAmount);
