import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router";
import cors from "cors";

dotenv.config()

const PORT = process.env.PORT || 1234

const app = express()

app.use(express.json())
app.use("/api", router)
app.use(cors())

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL!)
        const db = mongoose.connection
        db.on('error', (error) => console.error(error))
        db.once('open', () => console.log("connected to db"))
    

        app.listen(PORT, () => console.log("Server started"))
    } catch (e) {
        console.log(e)
    }
}

start()