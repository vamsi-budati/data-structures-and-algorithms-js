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
                    return currentAddressData[i][1]
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
console.log(JSON.stringify(myHashTable))
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(JSON.stringify(myHashTable))
console.log(myHashTable.get('apples'))