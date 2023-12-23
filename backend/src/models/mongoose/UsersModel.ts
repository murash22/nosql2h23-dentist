import { Schema, model, Document, Model, Types } from "mongoose";

const UserSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    login: { type: String, required: true },
    password: { type: String, required: true},
    role: { type: String, required: true }
})

export const UsersMongoCollection = model(
    "Users", 
    UserSchema
)