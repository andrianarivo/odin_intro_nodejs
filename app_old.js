require("dotenv").config();
const fs = require("fs/promises")

const axios = require("axios")

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Event emitter emitted start!")
});

console.log("hello, world!");
console.log(`user id is: ${process.env.USER_ID}!`);

axios.get('https://example.com/todos')
    .then(res => { console.log(res.status); })
    .catch(error => { console.log(error.response.status); });

async function example() {
  const filename = "test.txt"
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
    const content = "New content in the file";
    await fs.writeFile(filename, content);
    console.log("Wrote some content");
    const newData = await fs.readFile(filename, 'utf8');
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
}

example();

const url = new URL('/api', 'ws://12.32.03.90:9567');
console.log(url.href);

eventEmitter.emit("start");
