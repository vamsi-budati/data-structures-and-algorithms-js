/*
Two types of linkedin lists:
Single linked lists
Doubly linked lists

With Arrays we have couple of downsides:

1. Static arrays have fixed amount of memory space allocated
2. Dynamic arrays will have the memory allocation as elements keeps growing,
while this happens it creates a new memory space doubling it and copying the elements to the new address, which will end up O(n)

With Hash tables, we may end with memory collision, to prevent it, linked lists are the best alternate data strucutres
*/

/* 
What is linked list?

As name suggests a list which is linked

A list has a node
Node contains value and pointer to link the next node.
Each node is linked with a pointer

For example:
const names = ['a', 'b', 'c']

Linked list representation of names:
------------------------------------
a
a-pointer   ->  b
                b-pointer   ->  c
                                c-pointer   ->  null
*/

/*
Visual Algo: https://visualgo.net/en/list

JS doesn't actually come with linkedin list built-in
*/

/*
Why linked lists are best than Arrays and Hash Tables?

Have a sort of loose strcutre that allows you to insert a value to the middle of the list by simply resetting few pointers

Compared to arrays, operations like insert and delete in linked list is way better since array indices have to be changed to all the elements
Compared to hashtables, data in linked list can be ordered using pointers

Prepend - O(1)
append - O(1)
lookup - O(n)
insert - O(n)
delete - O(n)
*/