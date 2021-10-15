class HashTableRepo {
    constructor() {
        this.table = new Array(512);
        this.size = 0;
    }

    /**
     * hash - simple hash function
     * @param {string | number} key - key for which to generate the hash
     * @returns {number} position of the key in the hash table
     */
    hash = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    /**
     * set - sets a new entry in the hash table, only if it not already exists.
     * uses the hash function to generate the index.
     * @param {string | number} key - key for the given value
     * @param {string | number} value - value to be stored
     */
    set = (key, value) => {
        if (!this.contains(key)){
            const index = this.hash(key);
            this.table[index] = value;
            this.size++;
        }

    }

    /**
     * get - returns the value by key
     * @param {string | number} key - key to check for
     * @returns {string | number} - the value for the given key
     */
    get = (key) => {
        const index = this.hash(key);
        return this.table[index];
    }
    /**
     * contains - checks if a given key exists in the hash table
     * @param {string | number} key - key to check for
     * @returns {boolean} - true if exists, false otherwise
     */
    contains = (key) => {
        const index = this.hash(key);
        return !!this.table[index];
    }
    /**
     * getSize - returns the number of entries in the table
     * @returns {number} - number of entries in the hash table
     */
    getSize = () => {
        return this.size;
    }
}


export default HashTableRepo;


