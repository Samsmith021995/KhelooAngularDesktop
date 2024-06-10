import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map, tap } from "rxjs";
import { ComFunService } from "src/app/main/service/com-fun.service";
import { CommonServiceService } from "src/app/main/service/common-service.service";
import { ApiService } from "src/app/main/service/api.service";
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private comFun: ComFunService,private comSer:CommonServiceService,private apiSer:ApiService,private dialog:MatDialog) { }
    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.comFun.login({ Mobile: action.Mobile, Password: action.Password }).pipe(
                    tap((data) => {
                        if(data.ErrorCode == '1'){
                            // Save data to local storage
                            localStorage.setItem('userData', JSON.stringify(data));
                            this.comSer.saveData('UserId',data.UserId);
                            this.comSer.saveData('LoginToken',data.LoginToken);
                            this.comSer.saveData('name',data.UserName);
                            this.dialog.closeAll();
                            this.apiSer.showAlert(data.ErrorMessage,'','success');
                            this.apiSer.updateLoginStatus(true);
                            
                        }else{
                            this.apiSer.showAlert(data.ErrorMessage,'Login Failed','error');
                            this.dialog.closeAll();
                        }

                    }),
                    map((data) => {
                        return loginSuccess(data);
                    })
                );
            })
    )});
}
