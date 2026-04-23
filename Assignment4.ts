// Transactions array
let transactions = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Variables
let creditCount = 0;
let debitCount = 0;

let totalCredit = 0;
let totalDebit = 0;

let balance = 0;

let suspiciousCount = 0;

// Loop through transactions
for (let i = 0; i < transactions.length; i++) {
    let amount = transactions[i];

    // Credit
    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
    } 
    // Debit
    else {
        debitCount++;
        totalDebit += amount;
    }

    // Add to balance
    balance += amount;

    // Suspicious transaction check
    if (amount > 10000 || amount < -10000) {
        console.log("Suspicious credit/debit Transaction with Amount: " + amount);
        suspiciousCount++;
    }
}

// Output
console.log("Total Credit Transactions: " + creditCount);
console.log("Total Debit Transactions: " + debitCount);

console.log("Total Credited Amount: " + totalCredit);
console.log("Total Debited Amount: " + totalDebit);

console.log("Remaining Balance: " + balance);

console.log("Total Suspicious Transactions: " + suspiciousCount);
