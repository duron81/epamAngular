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
                    tap(data => {
                        localStorage.setItem("token", JSON.parse(JSON.stringify(data)).token);
                        tokenOfUSer = JSON.parse(JSON.stringify(data)).token;;
                    }),
                    map(data => {
                        return JSON.parse(JSON.stringify(data)).token;
                    }),
                    switchMap(token => {
                        return this.http.post(
                            `${this.apiUrl}/auth/userinfo`,
                            {token}
                        )
                        .pipe(
                            tap(data => {
                                localStorage.setItem("name", JSON.parse(JSON.stringify(data)).name.first);
                                this.router.navigate(['/courses']);
                            }),
                            map(response => {
                                let name = JSON.parse(JSON.stringify(response)).name.first;
                                return AuthActions.UpdateUser({name: name, token: tokenOfUSer})
                            })
                        )
                    })
                )
            })
        )
    )

    constructor(
        private actions$: Actions, 
        private http: HttpClient, 
        private router: Router
    ) {}
}