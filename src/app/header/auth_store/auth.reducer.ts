import { createReducer, on } from "@ngrx/store";

import * as AuthActions from '../auth_store/auth.actions'
import { HttpUser } from "src/app/shared/interfaces/http-user.interface";


export interface State {
    name: string,
    token: string,
    isLoading: boolean,
    isAuth: boolean
}

const initialState: State = {
    name: '',
    token: '',
    isLoading: false,
    isAuth: false,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.UpdateUser, (state, action) => {
        // console.log('updating' + action.name);
        return {
            ...state,
            name: action.name,
            token: action.token,
            isLoading: true,
            isAuth: true,
        }
    }),
    on(AuthActions.Logout, (state) => {
        return {
            ...state,
            name: '',
            isLoading: false,
            isAuth: false,
        }
    }),
    
)