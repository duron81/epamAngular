import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable, Subject, debounceTime, tap } from 'rxjs';

import { HttpCourse } from '../interfaces/http-course.interface';
import { LoadingService } from './loading.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { HttpAuthor } from '../interfaces/http-author.interface';

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
    this.loadingService.setLoadingSubject(true);
    return this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?start=0&count=${this.quanityOfVisibleCourses}`)
      .pipe(response => {
        if (response) {
          this.loadingService.setLoadingSubject(false);
        }
        return response;
      })
  }

  onFetchCoursesWithFilter(textFragment: string): Observable<HttpCourse[]> {
    this.loadingService.setLoadingSubject(true);
    let obs = this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?textFragment=${textFragment}`)
    if (obs) {
      this.loadingService.setLoadingSubject(false);
    }
    return obs;
  }

  onLoadAdditionalCourses() {
    this.quanityOfVisibleCourses += 3;
  }

  createCourse(course: HttpCourse) {
    return this.http.post<HttpCourse>(`${this.apiUrl}/courses`, course)
  }

  getCourseById(id: number): Observable<HttpCourse> {
    return this.http.get<HttpCourse>(`${this.apiUrl}/courses/${id}`);
  }

  getAuthors() {
    return this.http.get<HttpAuthor[]>(`${this.apiUrl}/authors`)
  }


  updateCourse(courseForUpdate: HttpCourse): void {

  }
  
  removeCourse(id: number) {
    this.loadingService.setLoadingSubject(true);
    let obs = this.http.delete<HttpCourse>(`${this.apiUrl}/courses/${id}`);
    if (obs) {
      this.loadingService.setLoadingSubject(false);
    }
    return obs;
  }
  
}
