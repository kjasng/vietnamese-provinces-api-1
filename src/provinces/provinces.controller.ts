import { Controller, Get, Param } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { ApiTags } from '@nestjs/swagger';


@Controller('provinces')
@ApiTags('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Get()
  findAll() {
    return this.provincesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provincesService.findOne(+id);
  }

  @Get('district/:id')
  findDistrict(@Param('id') id: string) {
    if(!id) return {
      result: null,
      message: 'Please provide province code',
      status: 400
    }
    return this.provincesService.findDistrict(id);
  }
  @Get('ward/:id')
  findWard(@Param('id') id: string) {
    if(!id) return {
      result: null,
      message: 'Please provide district code',
      status: 400
    }
    return this.provincesService.findWard(id);
  }
}
