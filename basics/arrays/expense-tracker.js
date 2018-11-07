const account = {
    name: 'Robert Sidzinka',
    expenses: [],
    income: [],
    addExpense: function(desc, amount) {
        const newObject = {
            description: desc,
            amount: amount
        }
        this.expenses.push(newObject);
    },
    addIncome: function(desc, amount) {
        const newObject = {
            description: desc,
            amount: amount
        }
        this.income.push(newObject);
    },
    getAccountSummary: function() {
        let incomeTotal = 0;
        let expensesTotal = 0;
        this.expenses.forEach(function(expense) {
            expensesTotal += expense.amount;
        });
        this.income.forEach(function(income) {
            incomeTotal += income.amount;
        })
        return `${this.name} has $${incomeTotal - expensesTotal}. $${incomeTotal} in income. $${expensesTotal} in expenses.`
    }
};

account.addExpense('Rent', 950);
account.addExpense('Rent', 950);
account.addIncome('rent', 5000);
account.addIncome('rent', 5000);
console.log(account.getAccountSummary());
