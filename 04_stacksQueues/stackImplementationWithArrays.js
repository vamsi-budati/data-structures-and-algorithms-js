class Stack {
    constructor() {
        this.data = new Array();
        this.size = 0;
    }

    push(data) {
        this.data.push(data);
        this.size++;
    }

    pop() {
        this.data.pop();
        this.size--;
    }

    peek() {
        return this.data[this.size - 1];
    }

    lookUp(element) {
        for(let i = 0; i < this.size; i++) {
            if(this.data[i] == element) {
                return this.data[i];
            }
        }
    }
}

let stack = new Stack();

stack.push('Vamsi')
stack.push('Krishna')
console.log(JSON.stringify(stack))
stack.push('Krishna')
console.log(JSON.stringify(stack))
stack.pop()
console.log(JSON.stringify(stack))
stack.push('Budati')
console.log(JSON.stringify(stack))
console.log(stack.peek())