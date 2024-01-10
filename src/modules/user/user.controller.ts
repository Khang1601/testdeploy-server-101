import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() body: CreateUserDTO, @Res() res: Response) {
    try {
      let {err, data} = await this.userService.create(body);
      if(err) {
        console.log("err", err)
        if(err?.meta?.target == "User_email_key") throw ["Email đã tồn tại!"]
        throw ["Lỗi gì đó!"]
      }
      return res.status(201).json({
        message: "Đăng ký thành công!",
        data
      })
    }catch(err) {
      return res.status(500).json({
        message: err
      })
    }
  }

  @Get()
  async findAll(@Res() res: Response){
    try {
      let result = await this.userService.findAll();

      return res.status(201).json({
        message: "Lay danh sach user thanh cong",
        data: result
      })

    } catch (error) {
      return res.status(500).json({
        message: error
      })
    }
  }
}
