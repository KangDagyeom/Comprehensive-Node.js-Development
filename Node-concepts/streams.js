const fs = require("fs");
const zlib = require("zlib");
const crypto = require("crypto");
const { Transform } = require("stream");

class EncryptStream extends Transform {
  constructor(key, vector) {
    super();
    this.key = key;
    this.vector = vector;
  }
  _transform(chunk, encoding, callback) {
    const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.vector);
    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);
    this.push(encrypted);
    callback();
  }
}
const key = crypto.randomBytes(32);
const vector = crypto.randomBytes(16);

const readAbleStream = fs.createReadStream("input.txt");

const gzipStream = zlib.createGzip();

const encryptStream = new EncryptStream(key, vector);

const writeAbleStreams = fs.createWriteStream("output.txt.gz.enc");

readAbleStream.pipe(gzipStream).pipe(encryptStream).pipe(writeAbleStreams);

console.log("Streaming -> compressing -> writing data");
