import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findOne(id: number): Promise<User> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    /*async create(data: { name: string; email: string }): Promise<User> {
        return this.prisma.user.create({ data });
    }*/

    /*async delete(id: number): Promise<User> {
        return this.prisma.user.delete({ where: { id } });
    }*/
}