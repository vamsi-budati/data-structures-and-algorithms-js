class BubbleSort {
    constructor(list) {
        this.data = list ?? [];
    }

    sort() {
        let arrayLength = this.data.length
        for(let i = 0; i < arrayLength; i++) {
            for(let j = 0; j < arrayLength; j++) {
                if(this.data[i] < this.data[j]) {
                    let temp = this.data[i];
                    let temp2 = this.data[j];
                    this.data[j] = temp;
                    this.data[i] = temp2;
                }
            }
        }
        return this.data;
    }
}

const array = new BubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])

console.log(array.sort());
