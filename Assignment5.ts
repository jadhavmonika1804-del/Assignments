function isPrime(n: number): boolean {
    // Step 1: Handle edge case
    if (n <= 1) {
        return false;
    }

    // Step 2: Check divisibility
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // Not prime
        }
    }

    return true; // Prime
}

// Test cases
console.log(isPrime(7));   // true
console.log(isPrime(25));  // false
console.log(isPrime(1));   // false