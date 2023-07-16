import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { HttpCourse } from '../interfaces/http-course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  idCounter = 3;
  private quanityOfVisibleCourses = 3;
  private apiUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  // courses: Course[] = [{
  //   id: 1,
  //   title: 'Some Title 1',
  //   creationDate: new Date(2023, 5, 1),
  //   duration: 200,
  //   description: "Some description 1",
  //   topRated: false
  // },
  // {
  //   id: 2,
  //   title: 'Some Title 2',
  //   creationDate: new Date(2023, 5, 30),
  //   duration: 100,
  //   description: "Some description 2",
  //   topRated: false
  // },
  // {
  //   id: 3,
  //   title: 'Some Title 3',
  //   creationDate: new Date(2023, 2, 1),
  //   duration: 50,
  //   description: "Some description 3",
  //   topRated: true
  // }]

  // getListCourses(): Course[] {
  //   return this.courses;
  // }

  onFetchCourses(): Observable<HttpCourse[]> {
    return this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?start=0&count=${this.quanityOfVisibleCourses}`)
  }

  onFetchCoursesWithFilter(textFragment: string): Observable<HttpCourse[]> {
    return this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?textFragment=${textFragment}`)
  }

  onLoadAdditionalCourses() {
    this.quanityOfVisibleCourses += 3;
    this.onFetchCourses();
  }

  createCourse(course: HttpCourse) {
    this.http.post<HttpCourse>(`${this.apiUrl}/courses`, course)
      .subscribe(response => {
        console.log('response is ' + response);
      })
  }

  getCourseById(id: number): Observable<HttpCourse> {
    return this.http.get<HttpCourse>(`${this.apiUrl}/courses/${id}`);
  }

  updateCourse(courseForUpdate: HttpCourse): void {
    // this.courses = this.courses.map(course => {
    //   if (course.id === courseForUpdate.id) {
    //     return {...course, ...courseForUpdate}
    //   }
    //   return course;
    // });
  }
  
  removeCourse(id: number) {
    this.http.delete<HttpCourse>(`${this.apiUrl}/courses/${id}`)
      .subscribe(response => {
        console.log('response is ' + response);
      })
  }
  
}
