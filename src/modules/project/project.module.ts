import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [ProjectModule, PrismaModule],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
