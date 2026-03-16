// LINEAR RECURSSION

function walk(steps) {
    // Base case goes first.
    if (steps == 0){
        return;
    }

    // Common expression
    walk(steps - 1);
    
    console.log("Step number:", steps);
}

// walk(100);

function power (val, pow){
    // console.log("Power:", pow);
    // Base case
    if (pow == 0) {
        return 1;
    }

    // Recursive case
    return val * power (val, pow - 1);
}

//console.log(power(2,5));

// Factorial
function factorial(n) {
    if (n == 1) {
        return 1;
    };

    return n * factorial(n - 1);
};

//console.log(factorial(6));

// Sum of digits
function sumOfDigits(n) {
    // Base case
    if (n == 1) {
        return 1;
    }
    // Recursive case
    return n + sumOfDigits(n - 1);
};

// console.log(sumOfDigits(6))

// Creating Nodes through Recursion
 
