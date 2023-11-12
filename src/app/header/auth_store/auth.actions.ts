import { createAction, props } from "@ngrx/store";

const LOGIN = '[Auth] Login';
const AUTO_LOGIN = '[Auth] Auto Login';
const LOGOUT = '[Auth] Logout';
const UPDATE_USER = '[Auth] Update User';

export const Login = createAction(
    LOGIN,
    props<{
        login: string,
        password: string,
    }>()
);

export const AutoLogin = createAction(
    AUTO_LOGIN,
    props<{
        name: string,
    }>()
);

export const UpdateUser = createAction(
    UPDATE_USER,
    props<{
        name: string,
        token: string
    }>()
);

export const Logout = createAction(
    LOGOUT
);