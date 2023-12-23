import { Schema, model, Document, Model, Types } from "mongoose";

const DoctorSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    name: { type: String, required: true },
    passurnamesword: { type: String, required: true},
    email: { type: String, required: true },
    contact: { type: String, required: true },
    experience: { type: String, required: true },
})

export const DoctorMongoCollection = model(
    "Doctors", 
    DoctorSchema
)