import { Injectable } from '@nestjs/common';
import prisma from '../config/client';

@Injectable()
export class ProvincesService {

  async findAll() {
    const result =await prisma.provinces.findMany();
    return {
      result: result,
      message: 'Success',
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  async findDistrict(id: string) {
    const result =await prisma.districts.findMany({
      where: {
        province_code: id
      }
    });
    return {
      result: result,
      message: 'Success',
    }
    }

    async findWard(id: string) {
      const result =await prisma.wards.findMany({
        where: {
          district_code: id
        }
      });
      return {
        result: result,
        message: 'Success',
      }
    }

}
