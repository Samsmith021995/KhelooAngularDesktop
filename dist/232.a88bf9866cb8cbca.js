"use strict";(self.webpackChunkKhelooAngularDesktop=self.webpackChunkKhelooAngularDesktop||[]).push([[232],{8232:(M,p,n)=>{n.r(p),n.d(p,{ChangePasswordModule:()=>S});var l=n(6814),c=n(4828),s=n(6223),h=n(6306),g=n(9301),t=n(9212),f=n(23),u=n(9157),m=n(2032),w=n(9101);function b(o,A){1&o&&(t.ynx(0),t._UZ(1,"i-feather",13),t.BQk())}function C(o,A){1&o&&t._uU(0," Submit ")}const P=[{path:"",component:(()=>{class o{constructor(e,r,a){this.fb=e,this.apiService=r,this.router=a,this.apiSubscriber=[],this.btnLoading=!1,this.typepass="password",this.typepass1="password"}ngOnInit(){this.loaderSubscriber=this.apiService.loaderService.loading$.subscribe((e={})=>{this.btnLoading="changePassword"in e}),this.forgotform=this.fb.group({Password:["",[s.kI.required]],NewPassword:["",[s.kI.required]],ConfrimPassword:["",[s.kI.required]]})}onSubmit(){let e=this.forgotform.getRawValue(),a=this.forgotform.controls.NewPassword.value,d=this.forgotform.controls.ConfrimPassword.value;this.forgotform.controls.Password.value.trim()?a.trim()?d.trim()?a==d?this.apiService.apiRequest(g.v.changePassword,e).pipe((0,h.K)(i=>{throw this.apiService.showAlert("Something Went Wrong","Check your Internet Connection","error"),this.btnLoading=!1,console.error("An error occurred:",i),i})).subscribe(i=>{"1"==i.ErrorCode?(this.apiService.showAlert("",i.ErrorMessage,"success"),this.router.navigate(["/"])):this.apiService.showAlert("",i.ErrorMessage,"error")}):this.apiService.showAlert("","New password and confirm Password should be match","warning"):this.apiService.showAlert("","Confirm Password Should not be Blank","warning"):this.apiService.showAlert("","New Password Should not be Blank","warning"):this.apiService.showAlert("","Password Should not be Blank","warning")}showPass(e){this.typepass="password"===e?"text":"password"}ngOnDestroy(){this.loaderSubscriber&&this.loaderSubscriber.unsubscribe(),this.apiSubscriber[0]&&this.apiSubscriber[0].unsubscribe()}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(s.qu),t.Y36(f.s),t.Y36(c.F0))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-password"]],decls:18,vars:3,consts:[[1,"container"],[1,"row"],["id","m-main"],[1,"col","changepass"],[1,"custom"],["action","",3,"formGroup"],[2,"width","100%"],["matInput","","type","text","placeholder","Current Password","formControlName","Password"],["matInput","","type","text","placeholder","New Password","formControlName","NewPassword"],["matInput","","type","text","placeholder","Confirm Password","formControlName","ConfrimPassword"],["expand","block",3,"click"],[4,"ngIf","ngIfElse"],["content",""],["name","loader"]],template:function(r,a){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Change Password"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"form",5)(7,"mat-form-field",6),t._UZ(8,"input",7),t.qZA(),t.TgZ(9,"mat-form-field",6),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"mat-form-field",6),t._UZ(12,"input",9),t.qZA(),t.TgZ(13,"button",10),t.NdJ("click",function(){return a.onSubmit()}),t.TgZ(14,"div"),t.YNc(15,b,2,0,"ng-container",11)(16,C,1,0,"ng-template",null,12,t.W1O),t.qZA()()()()()()()),2&r){const d=t.MAs(17);t.xp6(6),t.Q6J("formGroup",a.forgotform),t.xp6(9),t.Q6J("ngIf",a.btnLoading)("ngIfElse",d)}},dependencies:[l.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.KE,m.Nt,w.u],styles:['.input[_ngcontent-%COMP%]{height:50px;width:80%;font-size:14px;border:none;background:transparent;margin:4px;border:1px solid #710e65;border-radius:4px;padding:10px;color:#fff}.btn-sub[_ngcontent-%COMP%]{width:auto;height:auto;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);color:#fff;border:1px solid #ffd370;border-radius:4px;padding:10px 23px;box-shadow:0 0 8px #f7ad07;font-size:14px;text-transform:uppercase;margin:10px 0}.changepass[_ngcontent-%COMP%]{margin:auto;width:50%}#m-main[_ngcontent-%COMP%]{color:#bd08c6;font-size:25px;font-weight:700;margin-bottom:1em;text-align:center}#m-main[_ngcontent-%COMP%]:after{content:"";width:190px;height:10px;background:url(https://opt-v3-files.raksahb.com/static/cashsite/brand/6/image/tittleLine.png) center center / cover no-repeat;display:block;margin:5px auto}.custom[_ngcontent-%COMP%]{margin:auto;width:60%}.btn[_ngcontent-%COMP%]{margin-left:-53px}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:large}.danger[_ngcontent-%COMP%]{color:red;font-size:12pxs}button[_ngcontent-%COMP%]{width:100%;text-decoration:none;color:#000;font-size:18px;padding:10px 15px;text-align:center;background-color:#fc0;border:none;border-radius:8px;font-weight:500;margin-bottom:1rem}.submit[_ngcontent-%COMP%]{width:100%;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);padding:16px;border:none;margin:0!important}']})}return o})()}];let v=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]})}return o})();var x=n(8079);let S=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[l.ez,v,x.m]})}return o})()}}]);