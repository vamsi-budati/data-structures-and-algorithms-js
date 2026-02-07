const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    let arrayLength = array.length;
    let smallest = array[0];
    let smallestElemIndex = 0;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = i; j < arrayLength; j++) {
            if(smallest && smallest > array[j]) {
                smallestElemIndex = j;
                smallest = array[j];
            }
        }
        if(i !== (arrayLength - 1)) {
            array.splice(smallestElemIndex, 1)
            array.splice(i, 0, smallest)
            array[i] = array[smallest];
            smallest = array[i+1];
        }
    }
}


function selectionSortOne(array) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let smallestElemIndex = i;
        let temp = array[i];
        for (let j = i; j < arrayLength; j++) {
            if(array[smallestElemIndex] > array[j]) {
                smallestElemIndex = j;
            }
        }
        if(i !== (arrayLength - 1)) {
            array[i] = array[smallestElemIndex];
            array[smallestElemIndex] = temp;
        }
    }
}
selectionSortOne(numbers);

console.log(numbers);
