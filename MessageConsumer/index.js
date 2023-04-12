// const ip = require("ip");

const { default: axios } = require("axios");
const { Kafka, logLevel } = require("kafkajs");

const host = "localhost";

const kafka = new Kafka({
  logLevel: logLevel.INFO,
  brokers: [`${host}:9092`],
});

const topics = ["low-inventory", "item-stored", "item-deleted"];
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topics,
    fromBeginning: true,
    clientId: "notif-consumer",
  });
  await consumer.run({
    eachMessage: async (messagePayload) => {
      const { topic, partition, message } = messagePayload;
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      console.log(`- ${prefix} ${message.key}#${message.value}`);
      switch (topic) {
        case "low-inventory":
          await sendSingleOwnerMessage(
            createLowInventoryMessage(message.key, message.value)
          );
          break;
        case "item-stored":
          await sendSingleOwnerMessage(
            createItemStoredMessage(message.key, message.value)
          );
          break;
        case "item-deleted":
          await sendMultipleOwnerMessage(
            createItemDeletedMessage(message.key, message.value)
          );
          break;
      }
    },
  });
};

const sendSingleOwnerMessage = async (message) => {
  await fetch("http://127.0.0.1:8000/api/notify/", {
    method: "post",
    body: message,
    headers: new Headers({
      Authorization: "Basic cGhpbGlwcGU6MTIzNDU2",
      "Content-Type": "application/json",
    }),
  }).catch((e) => console.log(e.message));
};

const sendMultipleOwnerMessage = async (message) => {
  await fetch("http://127.0.0.1:8000/api/notify/set/", {
    method: "post",
    body: message,
    headers: new Headers({
      Authorization: "Basic cGhpbGlwcGU6MTIzNDU2",
      "Content-Type": "application/json",
    }),
  }).catch((e) => console.log(e.message));
};

const createLowInventoryMessage = (ownerId, message) => {
  const inventory = JSON.parse(message);
  return JSON.stringify({
    type: "NewProduct",
    owner: `${ownerId}`,
    subject: `Product ${inventory.sku} - Low inventory`,
    message: `Hi Mr Owner, Product ${inventory.sku} has ${inventory.available} unit left.`,
  });
};

const createItemStoredMessage = (ownerId, message) => {
  const inventory = JSON.parse(message);
  return JSON.stringify({
    type: "NewProduct",
    owner: `${ownerId}`,
    subject: `Product ${inventory.sku} - In storage`,
    message: `Hi Mr Owner, ${inventory.quantity} unit${
      inventory.quantity == 1 ? "" : "s"
    } of product ${inventory.sku} ${
      inventory.quantity == 1 ? "has" : "have"
    } arrived at the warehouse and ${
      inventory.quantity == 1 ? "is" : "are"
    } ready to sell.`,
  });
};

const createItemDeletedMessage = (sku, message) => {
  const ownerIds = JSON.parse(message);
  return JSON.stringify({
    type: "NewProduct",
    owner_ids: ownerIds,
    subject: `Product ${sku} - Removed`,
    message: `Hi, Mr Owner! Product ${sku} will be discontinued please pickup your inventory left.`,
  });
};

run().catch((e) => console.error(`[example/consumer] ${e.message}`, e));

const errorTypes = ["unhandledRejection", "uncaughtException"];
const signalTraps = ["SIGTERM", "SIGINT", "SIGUSR2"];

errorTypes.forEach((type) => {
  process.on(type, async (e) => {
    try {
      console.log(`process.on ${type}`);
      console.error(e);
      await consumer.disconnect();
      process.exit(0);
    } catch (_) {
      process.exit(1);
    }
  });
});

signalTraps.forEach((type) => {
  process.once(type, async () => {
    try {
      await consumer.disconnect();
    } finally {
      process.kill(process.pid, type);
    }
  });
});
