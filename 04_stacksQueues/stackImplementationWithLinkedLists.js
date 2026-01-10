class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    // O(1)
    peek() {
        return this.top?.value || null;
    }

    // O(1)
    push(value) {
        let newNode = new ListNode(value);
        newNode.next = this.top;
        this.top = newNode;
        this.bottom = this.top?.next || newNode;
        this.size++;
    }

    // O(1)
    pop() {
        const poppedElement = this.top.value;
        this.top = this.top.next;
        this.bottom = this.bottom?.next || null;
        this.size--;
        return poppedElement;
    }
}

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const stack = new Stack();

stack.push('Google');
stack.push('Udemy');
stack.push('Discord');

console.log('Before pop', stack)
console.log(stack.pop())
console.log('Peek', stack.peek())
console.log('After pop', stack)
console.log(stack.pop())
console.log('After pop', stack)
console.log(stack.pop())
console.log('After pop', stack)