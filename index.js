import HashTableRepo from './src/SymbolTableRepository/HashTableRepo.js';

const repo = new HashTableRepo();

repo.set("key1", 300);
repo.set("key2", 300);
repo.set("key3", 300);
repo.set("key4", 300);

console.log(repo.get("key1"));
console.log(repo.get("key2"));
console.log(repo.get("key3"));
console.log(repo.get("key4"));
// console.log('does contain', repo.contains("key1"));
// console.log('does contain', repo.contains("key10"));
// console.log('does contain', repo.remove("key1"));
console.log('SIZE', repo.getSize());
console.log('KEYS', repo.keys());
