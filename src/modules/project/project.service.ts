import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async getProjectsWithPagination() {
    const data = await this.prisma.project.findMany();
    return [data];
  }

  async createProject(data: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({ data });
  }
}
