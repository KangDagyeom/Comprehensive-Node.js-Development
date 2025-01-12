
const fs = require('fs');
const crypto = require('crypto');

console.log("1.Script task");
setTimeout(() => {
    console.log("2. settimeout 0s callback (macrotask)")
}, 0);

setTimeout(() => {
    console.log("3. settimeout 0s callback (macrotask)")
}, 0);

setImmediate(() => {
    console.log("4. setImmediate callback (check)")
})

Promise.resolve().then(() => {
    console.log("5. promise callback (microtask)")
})

process.nextTick(() => {
    console.log("6. process.nextTick callback (microtask)")
})

fs.readFile(__filename, () => {
    console.log("7. File read operation (I/O callback)")
})

crypto.pbkdf2('secret', 'salt', 100000, 32, 'sha512', (err, derivedKey) => {
    if (err) throw err
    console.log("8. pbkdf2 operation completed (CPU intensive task)")


})
console.log("9. Script end")