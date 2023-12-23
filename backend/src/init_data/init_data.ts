import mongoose from "mongoose";
import { UsersMongoCollection } from "../models/mongoose/UsersModel";
import { UserDto } from "../models/dto/UserDto";

class DataInitializer {

    public async initializeLogin(): Promise<void> {
        await mongoose.connect(process.env.DB_URL!)

        const testData: UserDto[] = [
            { _id: new mongoose.Types.ObjectId(), login: "admin", password: "admin", role: "admin" },
            { _id: new mongoose.Types.ObjectId(),  login: "doctor", password: "doctor", role: "doctor" },
            { _id: new mongoose.Types.ObjectId(), login: "patient", password: "patient", role: "patient" }
        ];

        await UsersMongoCollection.insertMany(testData);
    }

    public async initializeAllData() {
        await this.initializeLogin()
        // далее будут еще бд
    }

    public async removeAll() {
        await UsersMongoCollection.deleteMany({})
    }
}

// Пример использования
export const dataInitializer = new DataInitializer();
