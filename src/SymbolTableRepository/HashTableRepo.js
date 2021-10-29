import { typesToExclude } from "../scanner/utils/classification.js";

class HashTableRepo {
    constructor() {
        this.identifierSymbolTable = new Array(512);
        this.constantsSymbolTable = new Array(512);
        this.identifierTableSize = 0;
        this.constantTableSize = 0;
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
        return hash % this.identifierSymbolTable.length;
    }

    /**
     * set - sets a new entry in the hash table, only if it not already exists.
     * uses the hash function to generate the index.
     * @param {string | number} key - key for the given value
     * @param {string | number} value - value to be stored
     */

    keyExists = (key) => {
        return !!(this.identifierSymbolTable.findIndex(index => index !== -1) && this.constantsSymbolTable.findIndex(index => index !== -1));
    }

    set = (key, type) => {
        const index = this.hash(key);
            if (!this.keyExists(index) && !typesToExclude.includes(type)) {
                if (type === 'constant') {
                    this.constantsSymbolTable[index] = key;
                    this.constantTableSize++;
                }
                if (type === 'identifier') {
                    if (this.getConstant(key)){
                        this.identifierSymbolTable[index] = key;
                        this.identifierTableSize++;
                    } else {
                        throw new Error(`invalid key ${key}`);
                    }
                }
            }
    }


    isAvailable = (key) => {
        const index = this.hash(key);
        return !!(this.identifierSymbolTable[index] || this.constantsSymbolTable[index]);

    }
    /**
     * get - returns the value by key
     * @param {string | number} key - key to check for
     * @returns {string | number} - the value for the given key
     */
    getConstant = (key) => {
        const index = this.hash(key);
        const data = this.constantsSymbolTable[index];
        return data;
    }

    toString = () => {
        let identifies = `identifies: `
        this.identifierSymbolTable.forEach(entry => {
            identifies += `${entry}=${this.hash(entry)} `;
        })
        let constants = `constants: `
        this.constantsSymbolTable.forEach(entry => {
            constants += `${entry}=${this.hash(entry)} `;
        })
        return `${identifies} \n ${constants}`
    }
}


export default HashTableRepo;


