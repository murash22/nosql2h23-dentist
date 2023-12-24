// @ts-ignore
import express from "express";
import {adminService} from "../services/AdminService";

export class AdminController {
    static async getAppointments(req: express.Request, res: express.Response) {
        try {
            const admin = await adminService.getAppointments(req.params.id)

            res.json(admin)
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
        }
    }
}