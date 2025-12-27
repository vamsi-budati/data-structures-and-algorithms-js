// Array data structure implementation

class MyArray {
    constructor() {
        this.data = {};
        this.index = 0;
    }

    // Get - O(1)
    get(index) {
        return this.data[index];
    }

    // Pop - O(1)
    pop() {
        const lastItem = this.data[this.index - 1];
        delete this.data[this.index - 1];
        this.index--;
        return lastItem;
    }

    // Push - O(1)
    push(element) {
        this.data[this.index] = element;
        this.index++;
    }

    // Insert - O(n)
    insert(index, element) {
        /* First move the elements starting the index given
         ['a', 'b', 'd', 'e'] - insert(2, 'c') - ['a', 'b', 'd', 'd', 'e']
        */
        let currentElem = this.data[index];
        let nextElem = this.data[index + 1];
        for (let i = index; i < this.index; i++) { // Though it could be n/2 or n in terms of time complexity, while we remove constants in BigO calculaiton, it will be O(n)
            this.data[i + 1] = currentElem;
            currentElem = nextElem;
            nextElem = this.data[i + 1];
        }
        /* Override the given element in the given index
         ['a', 'b', 'c', 'd', 'e']
        */
        this.data[index] = element;
        this.index++;
        return element;
    }

    // Delete - O(n)
    delete(index) {
        const deletedElement = this.data[index];
        for (let i = index; i < this.index - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.index - 1];
        this.index--;
        return deletedElement;
    }
}

const newArr = new MyArray();
newArr.push('Hello')
newArr.push('!')
newArr.push('How')
newArr.push('Are')
newArr.push('You')
newArr.push('?')
console.log(newArr.get(0))
console.log(newArr)
newArr.pop()
console.log(newArr)
console.log(newArr.delete(2))
console.log(newArr.delete(3))
console.log(newArr)
newArr.insert(2, 'How')
console.log(newArr)
newArr.insert(4, 'You')
console.log(newArr)