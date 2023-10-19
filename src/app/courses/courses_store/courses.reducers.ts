import { createReducer, on } from "@ngrx/store";

import { HttpCourse } from "src/app/shared/interfaces/http-course.interface";
import * as CoursesActions from './course.actions'



export interface State {
    courses: HttpCourse[];
    quantityOfVisibleCourses: number;
};

const initialState: State = {
    courses: [],
    quantityOfVisibleCourses: 3,
};

export const courseReducer = createReducer(
    initialState,
    on(CoursesActions.SetCourses, (state, action) => {
        // console.log('reducer ' + [...action.courses]);
        return {
            ...state,
            courses: [...action.courses]
        }
    }),
    on(CoursesActions.LoadMoreCourses, (state, action) => {
        return {
            ...state,
            quantityOfVisibleCourses: state.quantityOfVisibleCourses+3
        }
    }),
    // on(CoursesActions.AddCourse, (state, action) => {
    //     // console.log('course in action ' + action.course.name);
    //     console.log(state.courses.length);
    //     return {
    //         ...state,
    //         courses: [...state.courses, action.course]
    //     }
    // })
)