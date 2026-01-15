// Edge list
const graph = [
    [0, 2], [2, 3], [2, 1], [1, 3]
];

// Adjacent list
// index is Node
// value is node neighbor
const graphWithAdjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent Matrix
// Simply going to have 0 & 1
const graphWithAdjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]