import { createReducer, on } from "@ngrx/store";

import { HttpCourse } from "src/app/shared/interfaces/http-course.interface";
import * as CoursesActions from './course.actions'



export interface State {
    courses: HttpCourse[];
    shownCoursesQuantity: number;
};

const initialState: State = {
    courses: [],
    shownCoursesQuantity: 3,
};

export const courseReducer = createReducer(
    initialState,
    on(CoursesActions.SetCourses, (state, action) => {
        return {
            ...state,
            courses: [...action.courses]
        }
    }),
    on(CoursesActions.LoadMoreCourses, (state, action) => {
        return {
            ...state,
            shownCoursesQuantity: state.shownCoursesQuantity+3
        }
    }),
    on(CoursesActions.CreateCourse, (state, action) => {
        return {
            ...state,
            courses: [...state.courses, action.course]
        }
    }),
    on(CoursesActions.UpdateCourse, (state, action) => {
        const initCourses = state.courses;
        const cnangedCourses = initCourses.map(course => {
            if (course.id === action.course.id) {
                return action.course
            } else {
                return course;
            }
        })
        return {
            ...state,
            courses: cnangedCourses
        }
    }),
    on(CoursesActions.DeleteCourse, (state, action) => {
        const changedCourses = state.courses.filter(course => course.id !== action.id);
        return {
            ...state,
            courses: changedCourses
        }
    })
)