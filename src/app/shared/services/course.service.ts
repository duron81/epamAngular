import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { HttpCourse } from '../interfaces/http-course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  idCounter = 3;
  private quanityOfVisibleCourses = 3;
  private apiUrl = 'http://localhost:3004';
  inputSubject = new Subject<string>();
  loadingSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.inputSubject = new BehaviorSubject<string>('');
   }

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

  }
  
  removeCourse(id: number) {
    this.http.delete<HttpCourse>(`${this.apiUrl}/courses/${id}`)
      .subscribe(response => {
      })
  }
  
}
