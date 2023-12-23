import mongoose from "mongoose"
import { PatientsMongoCollection } from "../models/mongoose/PatientModel"
import { AppoitmentMongoCollection } from "../models/mongoose/AppoitmentModel"
import { ProceduresMongoCollection } from "../models/mongoose/ProcedureModel"
import { DoctorMongoCollection } from "../models/mongoose/DoctorModel"

class PatientService { 
    public async getPatientById(id: string) {
        const objId = new mongoose.Types.ObjectId(id)
        const patient = await PatientsMongoCollection.findById(objId)

        const appoitments = await AppoitmentMongoCollection.find({patient_id: objId})

        let myAppoitments: { [key: string]: any }[] = [];

        for(const appoitment of appoitments) {
            const procedure = await ProceduresMongoCollection.findOne({_id: appoitment?.procedure_id})
            const doctor = await DoctorMongoCollection.findOne({_id: appoitment?.doctor_id})
            const date = appoitment?.date
            const appointmentDetails = {
                "date": date,
                "procedure": procedure?.name,
                "doctor": doctor?.name + " " + doctor?.surname
            };
            console.log(appointmentDetails);
            
            myAppoitments.push(appointmentDetails);
        }
        console.log({ "name": patient?.name, "surname": patient?.surname,  "appoitments": myAppoitments});
        
        return { "name": patient?.name, "surname": patient?.surname,  "appoitments": myAppoitments}
    }
}

export const patientService = new PatientService()