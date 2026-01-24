function reverseString(str) {
    if(!str) {
        return '';
    }

    if(str.length <= 1) {
        return str[str.length - 1];
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString('Hello'))
