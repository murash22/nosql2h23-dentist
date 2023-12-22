import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router";

dotenv.config()

const PORT = process.env.PORT || 1234

const app = express()

const start = async () => {
    try {
        // await mongoose.connect(process.env.DB_URL!)
        
        app.listen(PORT, () => console.log("Server started"))
    } catch (e) {
        console.log(e)
    }
}

start()