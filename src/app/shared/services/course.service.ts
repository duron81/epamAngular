import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { HttpCourse } from '../interfaces/http-course.interface';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  idCounter = 3;
  inputSubject = new BehaviorSubject<string>('');
  coursesSubject = new Subject<HttpCourse[]>();
  private apiUrl = 'http://localhost:3004';
  private quanityOfVisibleCourses = 3;

  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  onFetchCourses() {
    this.loadingService.loadingSubject.next(true);
    this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?start=0&count=${this.quanityOfVisibleCourses}`)
      .subscribe(response => {
        this.coursesSubject.next(response);
      })
    this.loadingService.loadingSubject.next(false);
  }

  onFetchCoursesWithFilter(textFragment: string): Observable<HttpCourse[]> {
    this.loadingService.loadingSubject.next(true);
    let obs = this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?textFragment=${textFragment}`)
    if (obs) {
      this.loadingService.loadingSubject.next(false);
    }
    return obs;
  }

  onLoadAdditionalCourses() {
    this.quanityOfVisibleCourses += 3;
    this.onFetchCourses();
  }

  createCourse(course: HttpCourse) {
    return this.http.post<HttpCourse>(`${this.apiUrl}/courses`, course)
  }

  getCourseById(id: number): Observable<HttpCourse> {
    return this.http.get<HttpCourse>(`${this.apiUrl}/courses/${id}`);
  }

  updateCourse(courseForUpdate: HttpCourse): void {

  }
  
  removeCourse(id: number) {
    this.loadingService.loadingSubject.next(true);
    this.http.delete<HttpCourse>(`${this.apiUrl}/courses/${id}`)
      .subscribe(response => {
      })
      this.loadingService.loadingSubject.next(false);
  }
  
}
