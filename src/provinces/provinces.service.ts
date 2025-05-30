import { Injectable } from '@nestjs/common';
import prisma from '../config/client';

@Injectable()
export class ProvincesService {
  async findAll() {
    const result = await prisma.provinces.findMany();
    return {
      result: result,
      message: 'Success',
    };
  }

  async findOne(id: number) {
    const code = id < 10 ? `0${id}` : id;
    const result = await prisma.provinces.findFirst({
      where: {
        code: code.toString(),
      },
    });
    return {
      result: result,
      message: 'Success',
    };
  }

  async findDistrict(id: string) {
    const result = await prisma.districts.findMany({
      where: {
        province_code: id,
      },
    });
    return {
      result: result,
      message: 'Success',
    };
  }

  async findWard(id: string) {
    const result = await prisma.wards.findMany({
      where: {
        district_code: id,
      },
    });
    return {
      result: result,
      message: 'Success',
    };
  }
}
