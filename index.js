const dbconnect = require("./connect")

const main = async()=>{
    let collection = await dbconnect();
    let response = await collection.find().toArray()
    console.warn("res",response);
}

main();