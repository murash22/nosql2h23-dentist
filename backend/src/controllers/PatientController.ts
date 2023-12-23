import express from "express";
import { patientService } from "../services/PatientsService";

export class PatientController {
    static async getPatientById(req: express.Request, res: express.Response) {
        try {
            const patient = await patientService.getPatientById(req.params.id)

            res.json(patient)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
        }
    }

    static async getAllPatients(req: express.Request, res: express.Response) {
        try {
            const patient = await patientService.getAllPatients()

            res.json(patient)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
        }
    }
}