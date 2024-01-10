import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDTO {
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Length(1,10)
    phoneNumber: string

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    password: string
}