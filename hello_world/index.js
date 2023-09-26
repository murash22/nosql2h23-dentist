const {MongoClient} = require('mongodb')

const client = new MongoClient("mongodb://127.0.0.1:27017/")

const start = async () => {
    try {
        await client.connect()
        console.log("Connected to mongo")
        await client.db().createCollection("Tmp")
        const users = client.db().collection("Tmp")
        await users.insertOne({text: "Hello world!"})
        const user =await users.findOne({text: "Hello world!"})
        console.log(user)
        client.close()
    } catch (e) {
        console.log(e)
    }
}

start()
