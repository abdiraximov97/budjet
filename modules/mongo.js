
const { MongoClient } = require("mongodb");
const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);
// const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
// const client = new MongoClient(MONGO_CONNECTION_STRING);

async function mongo() {
    try {
        await client.connect();
        const db = await client.db("usersTodoList");
        const users = await db.collection("users");

        return {
            users,
        };
    }
     catch (error) {
        console.log("MongoDb error:", error);
     }
}

module.exports = mongo;