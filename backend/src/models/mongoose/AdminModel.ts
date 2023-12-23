import { Schema, model, Document, Model, Types } from "mongoose";

const AdminSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
})

export const AdminsMongoCollection = model(
    "Admins", 
    AdminSchema
)