class TreeNode {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /*
    1. If no root node, create new tree node and assign to the root
    2. Assign root to currentNode and traverse
    3. Check value against root value
    4. If it is less then traverse left of the tree, else right of the tree
    4. Create new tree node and assign accordingly
    */
    insert(value) {
        const newTreeNode = new TreeNode(value)
        if (!this.root) {
            this.root = newTreeNode;
        } else {
            let currentNode = this.root;
            let isNodeAssigned = false;
            while (!isNodeAssigned) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newTreeNode;
                        isNodeAssigned = true;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newTreeNode;
                        isNodeAssigned = true;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    /*
    1. Assign root to the currentNode
    2. Check value against root value
    3. If it is less then traverse left of the tree, else right of the tree and assign currentNode accordingly
    4. Do above until you find the node that you're looking for
    5. Return the currentNode
    */
    lookup(value) {
        let currentNode = this.root;
        if (currentNode.value == value) {
            return currentNode;
        }
        let didFindNode = false;
        while (!didFindNode) {
            if (currentNode.value == value) {
                didFindNode = true;
                return currentNode;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

    // Quite a bit complex
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value == currentNode.value) {
                // We have a match, get to work!

                //option 1: No right child
                if (currentNode.right == null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        }

                        //if parent < current.value, make left child a right child of parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                //option 2: Right child, which doesn't have a left child
                else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        }

                        //if parent < current, make right child a right child of the parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                //Option 3: Right child that has a left child
                else {
                    // find the right childs left most child
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;

                    while (leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree

                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftMost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftMost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftMost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(tree))

console.log(JSON.stringify(tree.lookup(20)))