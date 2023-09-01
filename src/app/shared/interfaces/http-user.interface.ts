import { HttpLogin } from "./http-login.interface";
import { HttpToken } from "./http-token.interface";
import { HttpUserName } from "./http-user-name.interface";

export interface HttpUser extends HttpToken, HttpLogin {
    id: number;
    name: HttpUserName;
}