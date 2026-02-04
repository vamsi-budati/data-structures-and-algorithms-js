# Sorting

1. Bubble Sort
2. Insertion Sort
3. Selection Sort
4. Merge Sort
5. Quick Sort

```
const letters = ['a', 'd', 'c', 'b']
letters.sort(); // ['a', 'b', 'c', 'd']

const numbers = [2, 65, 34, 2, 1, 7]
numbers.sort() // [1, 2, 2, 34, 65, 7]
```

In JS while sorting, it actually converts to the string under the hood.

```
'65'.charCodeAt(); // 54
'34'.charCodeAt(); // 51
'7'.charCodeAt(); // 55
```

**Time and space complexity of the sot cannot be guaranteed as it's implementation is dependent.**

There are a lot of sorting alogrithms.

## Bubble Sort

- One of the Simplest and least efficient sorting algorithm
- Time Complexity: O(n^2)
- Space complexity: O(1)

## Selection Sort

- One of the simplest and lease efficient sorting alogrithms
- It runs on selecting the smallest elements of one against each other and swaps to the top/next in the list
- Time Complexity: O(n^2)
- Space complexity: O(1)


