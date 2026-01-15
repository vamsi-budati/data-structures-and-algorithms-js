/*
Given a number N return the index value of the Fibonacci sequence, where the sequence is

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

The pattern of the sequence is that each value is the sume of the 2 previous values, that means for N = 5 -> 2+3
*/

let index = 2;
let indexValue;
let previous = 0;
let currentValue = 1;
// O(n) linear time
function fibonacciRecursive(n) {
    if(n == 0 || n == 1) {
        return n;
    }

    if(index > n) {
        return indexValue;
    }
    
    indexValue = previous + currentValue;
    previous = currentValue;
    currentValue = indexValue;
    
    index = index + 1;
    return fibonacciRecursive(n)
}
console.log(fibonacciRecursive(9));

// O(2^n) exponential time
function fibonacciRecursiveOne(n) {
    if(n < 2) {
        return n;
    }
    return fibonacciRecursiveOne(n - 1) + fibonacciRecursiveOne(n - 2);
}

console.log(fibonacciRecursiveOne(9));


// O(n) linear time
function fibonacciIterative(n) {
    if(n == 0 || n == 1) {
        return n;
    }

    let prevValue = 0;
    let currentValue = 1;
    let seriesValue;
    let index = 2;
    let seriesStr = `${prevValue} ${currentValue} `
    
    while(index <= n) {
        seriesValue = prevValue + currentValue;
        seriesStr += `${seriesValue} `;
        prevValue = currentValue;
        currentValue = seriesValue;
        index++;
    }

    return { seriesValue, seriesStr: seriesStr.trim() };
}

console.log(fibonacciIterative(5))