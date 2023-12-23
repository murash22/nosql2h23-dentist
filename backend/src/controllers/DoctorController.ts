// @ts-ignore
import express from "express";
import { doctorsService } from "../services/DoctorsService";

export class DoctorController {
    static async getDoctorById(req: express.Request, res: express.Response) {
        try {
            const doctor = await doctorsService.getDoctorById(req.params.id)

            res.json(doctor)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
        }
    }
}