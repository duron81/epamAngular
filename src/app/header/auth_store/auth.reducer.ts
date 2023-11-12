import { createReducer, on } from "@ngrx/store";

import * as AuthActions from '../auth_store/auth.actions'


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
            token: '',
            isLoading: false,
            isAuth: false,
        }
    }),
    
)