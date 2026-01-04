/*
A doubly linked list is a more complex data structure than a singly linked list, but it offers several advantages.
The main advantage of a doubly linked list is that it allows for efficient traversal of the list in both directions. 
This is because each node in the list contains a pointer to the previous node and a pointer to the next node. 
This allows for quick and easy insertion and deletion of nodes from the list, as well as efficient traversal of the list in both directions.
*/
class DoublyLinkedList {
    constructor(data) {
        this.head = new DoublyListNode(data);
        this.tail = this.head;
        this.size = 1;
    }

    // O(1)
    append(data) {
        const newNode = new DoublyListNode(data);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    // O(1)
    prepend(data) {
        const newNode = new DoublyListNode(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
        return this;
    }

    /* 
    1. Create current, prev and do current = this.head
    2. Iterate through the index and do prev = current, current = current.next 
    3. Once it reaches the index make newNode.next = current and prev.next = newNode
    4. Increment length

    Time complexity - O(n)
    */
    insert(index, data) {
        if(index > this.size - 1) {
            this.append(data);
            this.size++;
            return;
        }

        if(index == 0) {
            this.prepend(data);
            this.size++;
            return;
        }

        let i = 0;
        let newNode = new DoublyListNode(data);
        let current = this.head;
        let prev;
        while(i < index) {
            prev = current;
            current = current.next;
            i++;
        }
        newNode.next = current;
        newNode.prev = prev;
        prev.next = newNode;
        this.size++;
    }

    /*
    1. Create prev, current and current = this.head
    2. If index == 0, just do this.head = this.head.next and decrement length
    3. Iterate i < index, and assign prev = current & current = current.next
    4. Make prev.next = current.next
    5. If index == this.size - 1 then this.tail = prev;
    6. Decrement length
    */
    delete(index) {
        if(index > this.size - 1) {
            return;
        }

        if(index == 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let i = 0;
        let current = this.head;
        let prev;
        while(i < index) {
            prev = current;
            current = current.next;
            i++;
        }

        prev.next = current.next;
        prev.prev = current.prev;
        if(index == this.size - 1) {
            this.tail = prev;
        }
        this.size--;
    }

    /*
    1. Create and array
    2. Do assign currentNode = this.head
    3. Iterate until currentNode becomes null, while iterating, push currentNode.data into an array and do currentNode = currentNode.next
    4. Retrun the array

    Time complexity - O(n)
    */
    printList() {
        let listOfItems = [];
        let currentNode = this.head;
        while(currentNode != null) {
            listOfItems.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return listOfItems;
    }

    length() {
        return this.size;
    }
}

class DoublyListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

const linkedList = new DoublyLinkedList(10)
linkedList.append(20)
linkedList.append(40)
console.dir(linkedList)

linkedList.prepend(30)

console.dir(linkedList)
// // console.log(JSON.stringify(linkedList))
linkedList.insert(1, 5)
console.log(linkedList.printList())
// console.log(JSON.stringify(linkedList))
linkedList.delete(1)
// console.log(JSON.stringify(linkedList))
console.log(linkedList.printList())