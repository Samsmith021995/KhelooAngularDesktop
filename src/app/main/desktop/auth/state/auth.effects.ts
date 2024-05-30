import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";
import { ComFunService } from "src/app/main/service/com-fun.service";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private comFun: ComFunService) { }
    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.comFun.login({ Mobile: action.Mobile, Password: action.Password }).pipe(map((data) => {
                    return loginSuccess(data);
                }));
            }))
        });
}