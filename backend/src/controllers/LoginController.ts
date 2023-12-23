import { configDotenv } from "dotenv";
// @ts-ignore
import express from "express";
import { usersService } from "../services/UsersService";

export class LoginController {
    static async login(req: express.Request, res: express.Response) {
        try {
            const user = await usersService.login(req.body);
      
            res.json(user);
          } catch (err) {
            if (err instanceof Error) {
              res.status(400).send(err.message);
            }
        }
    }
}