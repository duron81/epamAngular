import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface.';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  idCounter = 3;

  constructor() { }

  courses: Course[] = [{
    id: 1,
    title: 'Some Title 1',
    creationDate: new Date(2023, 5, 1),
    duration: 200,
    description: "Some description 1",
    topRated: false
  },
  {
    id: 2,
    title: 'Some Title 2',
    creationDate: new Date(2023, 5, 30),
    duration: 100,
    description: "Some description 2",
    topRated: false
  },
  {
    id: 3,
    title: 'Some Title 3',
    creationDate: new Date(2023, 2, 1),
    duration: 50,
    description: "Some description 3",
    topRated: true
  }]

  getListCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Course): void {
    course.id = ++this.idCounter;
    this.courses.push(course);
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  updateCourse(courseForUpdate: Course): void {
    this.courses = this.courses.map(course => {
      if (course.id === courseForUpdate.id) {
        return {...course, ...courseForUpdate}
      }
      return course;
    });
  }
  
  removeCourse(id: number) {
    const updatedArray = this.courses.filter(course => course.id !== id);
    this.courses = [...updatedArray];
  }
  
}
