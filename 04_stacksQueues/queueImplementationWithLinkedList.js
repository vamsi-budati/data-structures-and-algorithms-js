class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    peek() {
        return this.first?.value;
    }

    /*
    1. Create a new node.
    2. If it is first element, assign same to first and last of the queue
    3. Append the newNode to the existing linkedlist
    4. Assign the newNode to the last
    5. Increment the size of list
    */
    enqueue(value) {
        let newNode = new QueueListNode(value);
        if(this.size === 0) {
            this.first = newNode;
            this.last = this.first?.next || newNode;
        }

        this.last.next = newNode;
        this.last = newNode;
        
        this.size++;
    }

    /*
    1. Get the first element from the list
    2. Move the pointer to next element as a first one
    3. If size is one make last element as null since it is the last element going to be dequeued
    4. Decrement size as element gets removes out of the queue
    */
    dequeue() {
        const dequeuedElement = this.first;
        this.first = this.first.next;
        this.last = (this.size == 1) ? null : this.last;
        this.size--;
        return dequeuedElement.value;
    }
}

class QueueListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const queue = new Queue();

queue.enqueue('Hello');

console.log(queue)

queue.enqueue('How');

// console.log(queue)

queue.enqueue('Are');

console.log(queue)

queue.enqueue('You');

console.log(JSON.stringify(queue))

console.log('Peek Element', queue.peek());

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(JSON.stringify(queue))
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(JSON.stringify(queue))