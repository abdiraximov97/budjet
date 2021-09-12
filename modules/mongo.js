
const { MongoClient } = require("mongodb");
const mongoUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);

async function mongo() {
    try {
        await client.connect();
        const db = await client.db("usersdb");
        const users = await db.collection("users");

        return {
            users,
        }
    }
     catch (error) {
        console.log(error);
     }
}

module.exports = mongo;