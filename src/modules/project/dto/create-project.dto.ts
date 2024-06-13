import { ApiProperty } from '@nestjs/swagger';
import { Project } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProjectDto implements Partial<Project> {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsDate()
  @ApiProperty()
  timeStart: Date;

  @IsDate()
  @ApiProperty()
  timeEnd?: Date;

  @IsString()
  @ApiProperty()
  postTutorial: string;

  @IsString()
  @ApiProperty()
  videoTutorial?: string;

  @IsNumber()
  @ApiProperty()
  type: number;

  @IsBoolean()
  @ApiProperty()
  checkDaily: boolean;

  @IsArray()
  @ApiProperty()
  backer: number[];
}
