import mongoose from "mongoose";
import { UsersMongoCollection } from "../models/mongoose/UsersModel";
import { UserDto } from "../models/dto/UserDto";

class UsersService {

    public async login(data: Omit<UserDto, "_id">): Promise<string> {
        const {login, password} = data
        if (!login) { throw new Error("Логин не указан") }

        const user = await UsersMongoCollection.findOne({login});
        if (!user) { throw new Error("Пользователь не найден"); }

        if (user.password !== password) { throw new Error("Неверный пароль") }

        return user.role;

    }

}

export const usersService = new UsersService()