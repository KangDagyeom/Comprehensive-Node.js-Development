const buffOne = Buffer.alloc(10);
console.log(buffOne)

const buffFromString = Buffer.from('Hello, World!');
console.log(buffFromString);

const buffFromArrayOfInteger = Buffer.from([1, 2, 3, 4, 5, 0]);
console.log(buffFromArrayOfInteger)

buffOne.write("Nodejs")
console.log('After writing Nodejs to buffOne', buffOne.toString);
