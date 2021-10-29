import HashTableRepo from './src/SymbolTableRepository/HashTableRepo.js';
import scanner from './src/scanner/index.js';
const repo = new HashTableRepo();

const mockedProgram = `function p2IsPrime(num) { 
for(let i = 2; i < num; i++) {
   if(num % i === 0) return false; return num > 1;
}`;

scanner(mockedProgram, []);

// repo.set("key1", 1);
// repo.set("key2", 2);
// repo.set("key3", 3);
// repo.set("key3", 3);
// repo.set("key3", 3);
// repo.set("key4", 4);
//
// console.log(repo.get("key1"));
// console.log(repo.get("key2"));
// console.log(repo.get("key3"));
// console.log(repo.get("key4"));
// console.log('does contain key1', repo.contains("key1"));
// console.log('does contain key10', repo.contains("key10"));
// console.log('SIZE', repo.getSize());
