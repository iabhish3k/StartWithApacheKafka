
## Kafka Node.js Application
This is a Kafka-based Node.js application consisting of three components: 
- **Producer**: Sends messages (rider updates) to Kafka.
- **Consumer**: Receives and processes messages from Kafka.
- **Admin**: Manages Kafka topics and configurations.

## Prerequisites
Ensure the following tools are installed on your machine:

- **Node.js** (v14+): [Download Node.js](https://nodejs.org/)
- **Docker**: [Download Docker](https://www.docker.com/get-started)
- **Kafka**: Can be set up locally or via Docker (steps provided below).

## Kafka Setup Using Docker
If Kafka and Zookeeper are not installed locally, you can run them using Docker.

**Step 1**: Start Zookeper Container and expose PORT ```2181```
```
docker run -d --name zookeeper -p 2181:2181 zookeeper
```

**Step 2**: Start Kafka Container, expose PORT ```9092``` and setup ENV variables.
```
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```
    
## Running Locally
```
node admin.js
node consumer.js <GROUP_NAME>
node producer.js
````
>input for producer
`>` deadpool south\
`>` deadpool south
    