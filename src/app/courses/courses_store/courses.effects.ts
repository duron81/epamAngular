import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs";

import * as CoursesActions from './course.actions'
import { HttpCourse } from "src/app/shared/interfaces/http-course.interface";
import * as fromApp from '../../store/app.reducer'

export interface CourseResponseData {
    courses: HttpCourse[]
}


@Injectable()
export class CourseEffects {
    private apiUrl = 'http://localhost:3004';

    setCourses$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesActions.FetchCourses),
            withLatestFrom(this.store.select('courses')),
            switchMap(([actionData, state]) => {
                return this.http.get<HttpCourse[]>(
                    `${this.apiUrl}/courses?start=0&count=${state.quantityOfVisibleCourses}`
                )
            }),
            map(response => {
                return CoursesActions.SetCourses({courses: response})
            })
        )
    )

    setCoursesWithFilter$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesActions.FetchCoursesWithFilter),
            switchMap(filterValue => {
                return this.http.get<HttpCourse[]>(`${this.apiUrl}/courses?textFragment=${filterValue.filter}`)
            }),
            map(response => {
                return CoursesActions.SetCourses({courses: response})
            })
        )
    )

    createCourse$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesActions.CreateCourse),
            switchMap(course => {
                return this.http.post<HttpCourse>(`${this.apiUrl}/courses`, course.course)
            }),
            tap(() => {
                this.router.navigate(['courses']); 
            })
        ),
        {dispatch:false}
    )

    updateCourse$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesActions.UpdateCourse),
            switchMap(course => {
                return this.http.patch<HttpCourse>(`${this.apiUrl}/courses/${course.course.id}`, course.course)
            }),
            tap(() => {
                this.router.navigate(['courses']); 
            })
        ),
        {dispatch: false}
    )

    constructor(
        private actions$: Actions, 
        private http: HttpClient, 
        private router: Router,
        private store: Store<fromApp.AppState>
    ) {}
}