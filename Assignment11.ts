let n: number = 5;

// Upper half
for (let i = 1; i <= n; i++) {
    let pattern = "";

   
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    
    for (let k = 1; k <= i; k++) {
        pattern += k + " ";
    }

    console.log(pattern);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let pattern = "";

   
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

   
    for (let k = 1; k <= i; k++) {
        pattern += k + " ";
    }

    console.log(pattern);
}