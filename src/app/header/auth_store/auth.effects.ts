import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";

import * as AuthActions from './auth.actions'
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

export interface AuthResponseData {
    token: string;
}

@Injectable()
export class AuthEffects {
    private apiUrl = 'http://localhost:3004';

    authLogin$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthActions.Login), 
            switchMap(authData => {
                let login = authData.login;
                let password = authData.password;
                let tokenOfUSer = '';
                return this.http.post<AuthResponseData>(
                    `${this.apiUrl}/auth/login`,
                    {login, password}
                )
                .pipe(
                    map(data => {
                        const token = JSON.parse(JSON.stringify(data)).token;
                        localStorage.setItem("token", token);
                        tokenOfUSer = token;
                        return token;
                    }),
                    switchMap(token => {
                        return this.http.post(
                            `${this.apiUrl}/auth/userinfo`,
                            {token}
                        )
                        .pipe(
                            tap(data => {
                                this.router.navigate(['/courses']);
                            }),
                            map(response => {
                                const userName = JSON.parse(JSON.stringify(response)).name.first;
                                localStorage.setItem("name", userName);
                                return AuthActions.UpdateUser({name: userName, token: tokenOfUSer})
                            })
                        )
                    })
                )
            })
        )
    )

    authLogout$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthActions.Logout),
            tap(() => {
                localStorage.removeItem('name');
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
            })
        ),
        {dispatch:false}
    )

    constructor(
        private actions$: Actions, 
        private http: HttpClient, 
        private router: Router
    ) {}
}