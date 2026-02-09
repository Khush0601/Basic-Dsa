function printPrimes(start, end) {
    for (let num = start; num <= end; num++) {
        if (num <= 1) continue;

        let isPrime = true;

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}

// Example calls
console.log("Primes from 1 to 20:");
printPrimes(1, 20);

console.log("Primes from 3 to 40:");
printPrimes(3, 40);
