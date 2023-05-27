const mongoose = require('mongoose');

let cachedDb = null;
let client = null;

async function connectToDatabase(uri) {
    if (cachedDb) {
        return cachedDb;
    }

    if (!client) {
        client = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
    }

    const db = client.connection.db;

    cachedDb = db;

    return db;
}

module.exports = { connectToDatabase };
