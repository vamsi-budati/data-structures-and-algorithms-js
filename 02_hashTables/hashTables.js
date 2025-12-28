/* 
Hash tables:
------------
Objects in JS
Maps in Java
Dictonarioes in Python

Stored in key-value pairs

Consider there is a basket and grapes within that, basket.grapes = 100

Hash function creates a hash with fixed length for the object key and allocates memory address to store the value

Hash function takes time to generate a hash and place key value in the memory.

In a way Hash tables are better than arrays, let's see

insert - O(1)
lookup - O(1)
delete - O(1)
search - O(1)
*/

let user = {
    age: 30,
    name: 'Vamsi',
    introduce: true,
}

user.age; // O(1)
user.introduce = false; // O(1)
delete user.age; //O(1)

/*
With hash tables we may end up with the hash collisions where hash function allocates the same memory address to multiple key value pairs with linking the address(linked lists)
When this happens it slows down reading and writing hash table O(n/k) k is size of hash table
Collision will happen in any kind of Hash table implementation

Hashing visualization: https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

Common ways to deal with collision: https://en.wikipedia.org/wiki/Hash_table

insert - O(1)
lookup - O(1) occasionally it could be O(n)
delete - O(1)
search - O(1)
*/