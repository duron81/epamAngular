import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../header/auth_store/auth.reducer'
import * as fromCourses from '../courses/courses_store/courses.reducers'


export interface AppState {
    auth: fromAuth.State;
    courses: fromCourses.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    courses: fromCourses.courseReducer
}