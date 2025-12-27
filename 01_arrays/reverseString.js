/* Create a function that reverses a string
'Hi My name is Vamsi' -> 'ismaV si eman yM iH'
*/

/*
1. Split str into an array
2. Reverse an array
3. Join all the items in the reversed order
*/
function reverse(str) {
    return str.split('').reverse().join('')
}

// Using spread operator
function reverse(str) {
    return [...str].reverse().join('')
}

/* 
1. Calculate number of characters in a string
2. iterate through the string in the reverse order
3. append each character through iteration in a reverse order
4. return reversed string

Time complexity - O(n)
*/
function reverse(str) {
    const totalLen = str.length - 1;
    let reversedStr = ''
    for (let i = totalLen; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr.trim();
}

/*
1. Calculate number of characters in a string
2. iterate through the string in the reverse order
3. push each character into an array in a reverse order
4. join the characters in the array with no space
5. return reversed string

Time complexity - O(n)
*/
function reverse(str) {
    const totalLen = str.length - 1;
    let reversedStrArr = []
    for (let i = totalLen; i >= 0; i--) { //O(n)
        reversedStrArr.push(str[i]) // O(1)
    }
    return reversedStrArr.join('');
}

console.log(reverse('Hi My name is Vamsi'))