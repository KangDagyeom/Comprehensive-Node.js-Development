const redis = require("redis");

// Create a client, default port in Redis
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

// Event listener

client.on("error", (error) =>
  console.log("Redis client error occured!", error),
);

async function testRedisConnection() {
  try {
    await client.connect();
    console.log("Connected to redis");

    await client.set("name", "Hyun");
    const extractValue = await client.get("name");
    console.log(extractValue);
    const deleteCount = await client.del("name");
    console.log(deleteCount);
    const extractUpdatedValue = await client.get("name");
    console.log(extractUpdatedValue);
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
}

testRedisConnection();
