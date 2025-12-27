/* Given two array that are sorted, merge them into one big one
Input 1 - [0, 3, 4, 31]
Input 2 - [4, 6, 30]

Expected output - [0, 3, 4, 4, 6, 30, 31]
*/

/*
Solution 1

1. Concat arrays
2. Sort an array

Time Complexity - O(n log n)
*/
function mergeSortedArrays(arrOne, arrTwo) {
    return arrOne.concat(arrTwo).sort((a, b) => (a - b));
}

/*
Solution 2

1. Use spread operator to merge arrays
2. Sort an array

Time Complexity - O(n log n)
*/
function mergeSortedArrays(arrOne, arrTwo) {
    return [...arrOne, ...arrTwo].sort((a, b) => (a - b));
}


/*
Solution 3

1. Figure out the an array with more elements that other one
2. Create new array named mergedArr
3. Iterate through the bigger array
4. Return arrTwo if arrOne.length == 0
5. Return arrOne if arrTwo.length == 0
6. Maintain pointers separately to the elements in arrOne & arrTwo, should not exceed (arr.length - 1)
7. Compare element in arrOne against element in arrTwo with respective to its pointers
8. If lesser or equal, push arrOne pointer element into mergedArr, increment arrOne pointer and continue iteration
9. Else push arrTwo pointer element into mergedArr, increment arrTwo pointer and iterate pointer and continue iteration
10. After iteration, if pointer is < (arr.length) then push the arr[pointer] into mergedArr
11. Return mergedArr

Time Complexity - O(n)
*/

function mergeSortedArrays(arrOne, arrTwo) {
    const arrOneLen = arrOne.length;
    const arrTwoLen = arrTwo.length;
    let numOfIterations = arrOneLen > arrTwoLen ? arrOneLen : arrTwoLen;
    let mergedArr = [];
    let arrOnePointer = 0;
    let arrTwoPointer = 0;

    if (arrOneLen == 0) {
        return arrTwo;
    }

    if (arrTwoLen == 0) {
        return arrOne;
    }

    while (arrOnePointer < numOfIterations - 1 || arrTwoPointer < numOfIterations - 1) { // O(n)
        if (arrOne[arrOnePointer] <= arrTwo[arrTwoPointer]) {
            mergedArr.push(arrOne[arrOnePointer]);
            arrOnePointer++;
        } else {
            mergedArr.push(arrTwo[arrTwoPointer]);
            arrTwoPointer++;
        }
    }

    if (arrTwoPointer < arrTwoLen) {
        mergedArr.push(arrTwo[arrTwoPointer]);
    }

    if (arrOnePointer < arrOneLen) {
        mergedArr.push(arrOne[arrOnePointer]);
    }

    return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4], [4, 6, 30]))
