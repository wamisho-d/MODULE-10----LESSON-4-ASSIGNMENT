/**
 * Constructor function for Account object
 * Represents a bank account with account number, owner's name, and balance.
 */
function Account(accountNumber, owner) {
    this.accountNumber = accountNumber; // Unique account number
    this.owner = owner; // Account owner's name
    this.balance = 0; // Initial balance starts at 0
}

/**
 * Deposit method to add funds to the account balance.
 * @param {number} amount - The amount to deposit.
 * @returns {boolean} - Returns true if deposit is successful, false otherwise.
 */
Account.prototype.deposit = function (amount) {
    if (amount <= 0) {
        console.log("Deposit amount must be greater than zero.");
        return false;
    }
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
    return true;
};

/**
 * Withdraw method to remove funds from the account balance.
 * @param {number} amount - The amount to withdraw.
 * @returns {boolean} - Returns true if withdrawal is successful, false otherwise.
 */
Account.prototype.withdraw = function (amount) {
    if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
        return false;
    }
    if (amount > this.balance) {
        console.log("Insufficient funds.");
        return false;
    }
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance is $${this.balance}.`);
    return true;
};

/**
 * Calculate interest based on compound interest formula.
 * @param {number} rate - The annual interest rate (percentage).
 * @param {number} years - The number of years to calculate interest for.
 * @returns {number|null} - The compounded balance or null if input is invalid.
 */
Account.prototype.calculateInterest = function (rate, years) {
    if (rate <= 0 || years <= 0) {
        console.log("Interest rate and years must be greater than zero.");
        return null;
    }
    const compoundInterest = this.balance * Math.pow((1 + rate / 100), years);
    console.log(`Compound interest after ${years} years at ${rate}%: $${compoundInterest.toFixed(2)}`);
    return compoundInterest;
};

// Example usage
(function () {
    // Create an account for John Doe
    const myAccount = new Account(12345, "John Doe");

    // Deposit funds
    myAccount.deposit(1000);

    // Withdraw funds
    myAccount.withdraw(200);

    // Calculate compound interest for 5% rate over 2 years
    myAccount.calculateInterest(5, 2);
})();
