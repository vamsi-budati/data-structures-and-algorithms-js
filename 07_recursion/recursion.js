function recurstionFn(exec) {
    let execute = exec;
    while(execute) {
        execute = !execute;
        recurstionFn(execute);
    }
}

recurstionFn(true)

/* 
Write two functions that finds the factorial of any number. 
One should use recursive, the other should just use a for loop

5! = 5 * 4 * 3 * 2 * 1
*/

// O(n)
function factorialRecursive(number) {
    if(!(number > 0)) {
        return number || 1;
    }
    return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(0))

// O(n)
function factorialIterative(number) {
    let result = 1;
    while(number > 0) {
        result = result * number;
        number--;
    }
    return result;
}

console.log(factorialIterative(5))
