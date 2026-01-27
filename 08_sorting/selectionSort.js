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
            smallest = array[i+1];
        }
    }
}

selectionSort(numbers);

console.log(numbers);