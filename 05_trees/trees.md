# Trees
Trees are a data strucutre the has hierarchial structure
Usually starts with root node, and it has child nodes and goes on

Root
Parent
Child
Leaf
Siblings

## Binary Tree
A binary tree is something you've seen before

Rules:
Each node can only have either 0, 1, or 2 nodes and each child can only have one parent. Each node represents a certain state.

```
function binaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
```

**O(log N)**

- Level 0: 2^0 = 1;
- Level 1: 2^1 = 2;
- Level 2: 2^2 = 4;
- Level 3: 2^3 = 8;

*# of nodes = 2^h - 1;*

h is height of the nodes

log nodes = steps in a tree

log 100 = 2;

10^2 = 100;

O(log n) is better than O(n)

Google uses tree search to give search results in more optimized way.

## Binary Search Tree
Binary Search Tree is a subset of Binary Tree.

A binary search tree are really good for searching, they are great for comparing things, this data strcutures maintans relationships(ex. file system).

Rules:
All child nodes in the tree to the right of the root node must be greater than current node

Advantage of binary search tree is searching and lookup

```
lookup - O(log n)
insert - O(log n)
delete - O(log n)
``` 

## Balanced vs Unbalanced binary search tree
```
Balanced
O(log n)

Unbalanced - Could become linkedlist
O(n)
```

**How do we make binary tree balanced?**

Using alogirthms like AVL Tree, Red Black Tree

Pros:
- Better than O(n)
- Ordered
- Flexible Size

Cons:
- No O(1) operations