import { Schema, model, Document, Model, Types } from "mongoose";

const PatientSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    name: { type: String, required: true },
    surname: { type: String, required: true},
    email: { type: String, required: true },
    birthdate: { type: String, required: true},
    contact: { type: String, required: true},
    card: { type: String, required: true},
    bloodgroup: { type: String, required: true},
})

export const PatientsMongoCollection = model(
    "Patients", 
    PatientSchema
)