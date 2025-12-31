/* 
Google Question
Given an array = [2,5,1,2,3,5,1,2,4]:
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4]:
It should return 1

Given an array = [2,3,4,5]:
It should return undefined
*/

/*
1. Create map
2. Iterate through list of elements
4. Set the element as key to the map
5. If key not exists in map, add the key with value as count(1)
6. If key exists in the map, return the key
7. By end of the iteration return undefined(i.e. no recurring element identified)

Time complexity - O(n) - As it iterates through number of elements in the list
*/

function findFirstRecurringCharacter(arr) {
    if (!arr || !arr?.length) {
        return undefined;
    }

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i];
        } else {
            map[arr[i]] = 1;
        }
    }

    return undefined;
}

console.log(findFirstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(findFirstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(findFirstRecurringCharacter([2,3,4,5]));
console.log(findFirstRecurringCharacter([2,5,5,2,3,5,1,2,4]));