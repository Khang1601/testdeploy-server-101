import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDTO) {
        try {
            let newUser = await this.prisma.user.create({
                data: {
                    ...data,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVnsLhjbXRN_F--iLPPJ-ED7WP3qqfwhiAkNtgKsONg&s"
                }
            })
            return {
                data: newUser
            }
        }catch(err) {
            return {err}
        }
    }

    async findAll() {
        try {
            let result = await this.prisma.user.findMany();
            return {
                data: result
            }
        }catch(err) {
            return {err}
        }
    }

}
