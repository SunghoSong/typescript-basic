// src/user/user.controller.ts
import { Controller, Get, Post, Param, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    /*@Post()
    createUser(@Body() body: { name: string; email: string }) {
        return this.userService.create(body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(+id);
    }*/
}