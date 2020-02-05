const express = require("express");
const redis = require("redis");
const process = require("process");
const keys = require('./keys');

const app = express();

const client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

client.set('visits', 0);

app.get("/visits", async (req, res) => {
    // process.exit(10);
    client.get("visits", (err, visits) => {
        res.send(visits);
        client.set('visits', parseInt(visits) + 1);
    });
});


app.listen(8080, () => {
    console.log("Listening on port 8080");
});