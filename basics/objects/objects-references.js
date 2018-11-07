let myAccount = {
    name: 'Robert Sidzinka',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses += amount;
}

let addIncome = function (account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.income = 0;
    account.expenses = 0;
}

let getAccountSummary = function(account) {
    return `Account for ${account.name} has ${account.income - account.expenses}. ${account.income} in income. ${account.expenses} in expenses`;
}

addIncome(myAccount, 1000);
addExpense(myAccount, 100);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));