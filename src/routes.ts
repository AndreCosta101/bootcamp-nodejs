import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  console.log('OI')
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Dani"
  });

  return response.send();
}