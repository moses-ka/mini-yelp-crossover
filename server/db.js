import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()
const uri=process.env.MONGODB_URI
const client = new MongoClient(uri)
client.connect().then(()=>{
    console.log("database connected")
   
})
.catch(err => console.log(err))
//http://localhost:3012/api/restaurants
const db=client.db("yelp")

export default db
