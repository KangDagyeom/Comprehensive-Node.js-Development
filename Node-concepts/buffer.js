const buffOne = Buffer.alloc(10);
console.log(buffOne)

const buffFromString = Buffer.from('Hello, World!');
console.log(buffFromString);

const buffFromArrayOfInteger = Buffer.from([1, 2, 3, 4, 5, 0]);
console.log(buffFromArrayOfInteger)

buffOne.write("Nodejs")
console.log('After writing Nodejs to buffOne', buffOne.toString());

console.log(buffFromString[0]);

console.log(buffFromString.slice(0,3));

const concatBuffs = Buffer.concat([buffOne,buffFromString]);
console.log(concatBuffs);

console.log(concatBuffs.toJSON());


