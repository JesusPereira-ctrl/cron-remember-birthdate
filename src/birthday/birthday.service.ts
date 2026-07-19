import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBirthdayDto } from './dto/create-birthday.dto';
import { UpdateBirthdayDto } from './dto/update-birthday.dto';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class BirthdayService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBirthdayDto: CreateBirthdayDto) {
    return await this.prismaService.birthdays.create({
      data: createBirthdayDto,
    });
  }

  async findAll() {
    return await this.prismaService.birthdays.findMany();
  }

  async findOne(id: number) {
    const birthDate = await this.prismaService.birthdays.findFirst({
      where: { id },
    });

    if (!birthDate) {
      throw new NotFoundException();
    }

    return birthDate;
  }

  async update(id: number, updateBirthdayDto: UpdateBirthdayDto) {
    await this.findOne(id);

    return await this.prismaService.birthdays.update({
      where: { id },
      data: updateBirthdayDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prismaService.birthdays.delete({ where: { id } });

    return {
      message: 'Deleted',
    };
  }
}
