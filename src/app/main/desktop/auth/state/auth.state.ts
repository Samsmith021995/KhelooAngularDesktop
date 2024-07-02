// import { User } from "../model/user.model";

export interface AuthState{
    loggedIn: boolean;
    // user: User | null;
}

export const initialState:AuthState = {
    loggedIn : false
    // user: null,
};