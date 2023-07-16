import { HttpUserName } from "./http-user-name.interface";

export interface HttpUser {
    id: number;
    token: string,
    name: HttpUserName;
    login: string;
    password: string;
}