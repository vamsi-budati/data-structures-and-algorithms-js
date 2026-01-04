class LinkedList {
    constructor(data) {
        this.head = new ListNode(data);
        this.tail = this.head;
        this.size = 1;
    }

    // O(1)
    append(data) {
        const newNode = new ListNode(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    // O(1)
    prepend(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head
        this.head = newNode;
        this.size++;
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
        let newNode = new ListNode(data);
        let current = this.head;
        let prev;
        while(i < index) {
            prev = current;
            current = current.next;
            i++;
        }
        newNode.next = current;
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

    /*
    1. Create a new linkedlist with the head element
    2. Traverse through nodes in the list and prepend
    */
    reverse() {
        const linkedList = new LinkedList(this.head.data);
        let current = this.head.next;
        while(current != null) {
            linkedList.prepend(current.data);
            current = current.next;
        }
        return linkedList;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const linkedList = new LinkedList(10)
linkedList.append(20)
linkedList.append(40)


linkedList.prepend(30)
// console.log(JSON.stringify(linkedList))
linkedList.insert(1, 5)
console.log(JSON.stringify(linkedList))
linkedList.delete(1)
console.log(JSON.stringify(linkedList))
console.log(linkedList.printList())

console.log(linkedList.reverse().printList())