// Arrays organizes elements sequentially and could be access using indices

const strings = ['a', 'b', 'c', 'd'];

//TO store a, if we were on 32bit system, 4*4=16 bytes are consumed

strings[2] // c

// Push
strings.push('e'); // O(1) all we are doing is adding one item in the end
console.log(strings) // ['a', 'b', 'c', 'd', 'e']

//pop, removes last element
strings.pop(); // O(1)
console.log(strings) // ['a', 'b', 'c', 'd']

//unshift, adds element in the start of the array
strings.unshift('x'); // O(n), since indices are to be shifted its O(n) based on number of elements in the array
console.log(strings) // ['x', 'a', 'b', 'c', 'd']


//splice, adds element in the middle of the array
strings.splice(2, 0, 'y'); // O(n)
console.log(strings) //['x', 'a', 'y', 'b', 'c', 'd']




/*
Static vs Dynamic Array

Static: Fixed in size, you need to specify number of elements your array will hold

Dynamic: Allows us to copy and rebuilt an array with new items in new location

In JS, the default behaviour of arrays is dynamic, they automatically manage memory for the items as we add

There are times we need to manage and need not to manage memory
*/

/*
Time complexity
---------------
lookup O(1)
push O(1)
append O(1) could be O(n)
insert O(n)
delete O(n)
*/
