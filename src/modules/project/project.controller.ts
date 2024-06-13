import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from '@prisma/client';

@Controller('/project')
export class ProjectController {
  // ...
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  async getProjects() {
    const [projects] = await this.projectService.getProjectsWithPagination();

    return {
      data: projects,
    };
  }

  @Post()
  async createProject(@Body() body: CreateProjectDto): Promise<Project> {
    const { ...data } = body;
    return await this.projectService.createProject({ ...data });
  }
}
