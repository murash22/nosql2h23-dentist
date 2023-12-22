export class UserDto {
    constructor(
        readonly _id: string,
        readonly login: string,
        readonly password: string,
        readonly role: string
    ) {}
}