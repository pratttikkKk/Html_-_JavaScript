class BankAccount {
    constructor(accountHolderName, accountNo, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNo = accountNo;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. Updated balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. Updated balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }

    displayDetails() {
        console.log(`Account Holder: ${this.accountHolderName}`);
        console.log(`Account Number: ${this.accountNo}`);
        console.log(`Balance: ${this.balance}`);
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount("John Doe", "123456789", 1000);
account.displayDetails();
account.deposit(500);
account.withdraw(200);
account.displayDetails();
