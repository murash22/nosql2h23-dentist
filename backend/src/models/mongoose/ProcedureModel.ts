import { Schema, model, Document, Model, Types } from "mongoose";

const ProcedureSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    name: { type: String, required: true },
    price: { type: String, required: true},
})

export const ProceduresMongoCollection = model(
    "Procedures", 
    ProcedureSchema
)