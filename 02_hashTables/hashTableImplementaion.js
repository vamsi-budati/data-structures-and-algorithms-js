class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    //O(1)
    set(key, value) {
        const address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }

    // If collision happens - O(n) otherwise O(1)
    get(key) {
        const address = this._hash(key);
        let currentAddressData = this.data[address];

        if(currentAddressData.length) {
            for(let i = 0; i < currentAddressData.length; i++) {
                if(currentAddressData[i][0] == key) {
                    return currentAddressData[i][1];
                }
            }
        }
        return undefined;
    }

    // O(n^2) this includes hash collsion prevention
    // keys method in JS object prototype is down side since it's time complexity is O(n^2). Due to collision, multiple elements may get stored in same address, it will end up in O(n^2)
    keysPreventingHashCollision() {
        let listOfKeys = [];
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data[i]?.length; j ++) {
                listOfKeys.push(this.data[i][j][0]);
            }
        }
        return listOfKeys;
    }

    // O(n^2) this includes hash collsion prevention
    valuesPreventingHashCollision() {
        let listOfValues = [];
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data[i]?.length; j ++) {
                listOfValues.push(this.data[i][j][1]);
            }
        }
        return listOfValues;
    }

    // O(n) this doesn't includes hash collsion prevention
    keys() {
        let listOfKeys = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                listOfKeys.push(this.data[i][0][0]);
            }
        }
        return listOfKeys;
    }

    // O(n) this doesn't includes hash collsion prevention
    values() {
        let listOfValues = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                listOfValues.push(this.data[i][0][1]);
            }
        }
        return listOfValues;
    }
}

const myHashTable = new HashTable(20);
myHashTable.set('grapes', 10000)
console.log(JSON.stringify(myHashTable))
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(JSON.stringify(myHashTable))
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
console.log(myHashTable.values())

/* Arrays:     vs   Hash Tables:
search - O(n)       search - O(1)
lookup - O(1)       insert - O(1)
push - O(1)         lookup - O(1)
insert - O(n)       delete - O(1)
delete - O(n)
*/