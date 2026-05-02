function power(x: number, n: number): number {
    let result = 1;
    let base = x;
    let power = n;

   
    if (power < 0) {
        base = 1 / base;
        power = -power;
    }

    
    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;
}


console.log(power(2.0, 10)); 
console.log(power(2.1, 3));  
console.log(power(2.0, -2)); 
console.log(power(5, 0));   