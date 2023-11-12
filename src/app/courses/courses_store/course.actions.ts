import { createAction, props } from "@ngrx/store";
import { HttpCourse } from "src/app/shared/interfaces/http-course.interface";


const FETCH_COURSES = '[Courses] Fetch';
const FETCH_COURSES_WITH_FILTER = '[Courses] Fetch Courses WIth Filter';
const SET_COURSES = '[Courses] Set Courses';
const LOAD_MORE_COURSES = '[Courses] Load More Courses';
const CREATE_COURSE = '[Courses] Create Course';
const UPDATE_COURSE = '[Courses] Update Course';
const DELETE_COURSE = '[Courses] Delete Course';

export const FetchCourses = createAction(
    FETCH_COURSES
);

export const FetchCoursesWithFilter = createAction(
    FETCH_COURSES_WITH_FILTER,
    props<{filter: string}>()
);

export const SetCourses = createAction(
    SET_COURSES,
    props<{courses: HttpCourse[]}>()
);

export const LoadMoreCourses = createAction(
    LOAD_MORE_COURSES
);

export const CreateCourse = createAction(
    CREATE_COURSE,
    props<{course: HttpCourse}>()
);

export const UpdateCourse = createAction(
    UPDATE_COURSE,
    props<{course: HttpCourse}>()
);

export const DeleteCourse = createAction(
    DELETE_COURSE,
    props<{id: number}>()
);




