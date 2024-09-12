const { Kafka } = require("kafkajs");

exports.kafkaConfig = new Kafka({
  clientId: "my-app",
  brokers: ["<Private ip>"],
});