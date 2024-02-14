const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017"
const database = "ecomerce"
const client = new MongoClient(url)

async function dbconnect(){
    let result = await client.connect(database)
    let db = result.db(database)
    return db.collection("products")
}

module.exports = dbconnect;