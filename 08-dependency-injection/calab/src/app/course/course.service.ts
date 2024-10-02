import { Injectable } from '@angular/core';
import COURSES from './MOCK_COURSE_DATA.json';
import { LoggerService } from '../logger/logger.service';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private logger: LoggerService) { }

  getCourses() {
    this.logger.log('Fetching courses');
    return COURSES;
  }
}
