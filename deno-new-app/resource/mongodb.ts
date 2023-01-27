import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts"
//

const client = new MongoClient()
client.connectWithUri(
    "mongodb+srv://marloncori:Mc0489921@cluster0.kgg7k.mongodb.net/?retryWrites=true&w=majority")

const db = client.database("notes")

/*const users = db.collection("users")
const insertId = await users.insertOne({
    username: "user1",
    password: "tespassword"
})*/
export { db }

// run it like this: deno run --allow-net --allow-write --allow-read
//                    --allow-plugin --unstable mongodb.ts

