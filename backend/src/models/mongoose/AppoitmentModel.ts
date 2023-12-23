import { Schema, model, Document, Model, Types } from "mongoose";

const AppoitmentSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    date: { type: String, required: true},
    procedure_id: { type: String, required: true},
    patient_id: { type: String, required: true},
    doctor_id: { type: String, required: true},
})

export const AppoitmentMongoCollection = model(
    "Appoitments",
    AppoitmentSchema
)