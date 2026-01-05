## Stacks & Queues

- Both of these are called linear data strctures. 
- Meaning, traversal happens sequentially in which one data element can only be reached.
- They can be implemented in similar way but only difference is the way data elements are removed out of it.
- Can be implemented using Arrays or Linked Lists
- Operations like push pop are majorly performed on this data structures

### Stacks:
- Elements are stacked on top of each other, only way to access the elements is one after another from the last item.
- When function gets called ususally they follow this stacks data strcuture for execution context
- Examples like 
  - Google history

**LIFO - Last In First Out**

**Operations:**
- lookup - O(n)
- pop - O(1)
- push - O(1)
- peek - O(1)

**Implementation:**
- In this case, both arrays and link lists are going to work fairly well.
- In the end, it depends on what you prefer and what your priorities are.
- And by this point, you should understand the pros and cons of arrays and pros and cons of linked lists.
- But one major thing is that arrays allow something called cache locality, which makes them technically faster when accessing its items in memory because they're right next to each other versus a linked list that has them scattered all over memory.
- And also link lists have extra memory associated with them because we have to hold on to those pointers.
- But on the other hand, they have more dynamic memory, right?
- And we can keep adding things to the list versus an array where you have either a static array or dynamic array that has certain amount of memory.
- And as soon as it it's about to reach its limit, it's going to have to double up that memory and create new space for it somewhere in memory.
- So you have to think about what sort of operations you're going to do and why your priorities are to decide which one you want.

### Queues:
- It's opposite to the stacks.
- Examples like 
  - People coming to the restraunt adding in a waitlist for the table, 
  - Printer job scheduling

**FIFO: First In First Out**

**Operations:**
- lookup - O(n)
- enqueue - O(1)
- dequeue - O(1)
- peek - O(1)

**Implementation:**
- You would never want to build it with an array, or if you do well, that's not necessarily a good idea.
- And ideally you want to implement them with linked lists.
- Why is that?
- Well, if you remember, arrays have indexes associated with them.
- So if we had Matt here, then we have joy, then we have Samir, then we have Pavel that are in queue.
- If this was in an array data structure and Matt was the first in line and we need to remove Matt from the queue.
- Well once we remove Matt.
- We now need to shift the indexes over.
- So we have to go one by one and say, all right, Joy is now here.
- At Index of zero.
- Samier is at the index of one and Pavel is at index of two and there's nothing at index of three.
- We just shifted those arrays.
- It's an O(n) operation, a linear type versus something like a linked list where all we have is a pointer to the head and then perhaps we have a pointer to the tail.
- And all we need to do is say head well is Matt.
- We want to remove Matt and joy is going to be the head and nothing else changes.
- And that operation is going to be constant time O(1).