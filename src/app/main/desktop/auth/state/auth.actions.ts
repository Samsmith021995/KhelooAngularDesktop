import { createAction, props } from "@ngrx/store";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS= '[auth page] login success';
export const LOGIN_FAIL  = '[auth page] login fail';

export const loginStart = createAction(
    LOGIN_START,
    props<{ Mobile:any; Password:any }>()
);
export const loginSuccess = createAction(LOGIN_SUCCESS,props<{user:any}>());
export const loginfail = createAction(LOGIN_FAIL,props<{user:any}>());