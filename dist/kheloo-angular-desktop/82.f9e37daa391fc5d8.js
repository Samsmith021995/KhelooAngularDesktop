"use strict";(self.webpackChunkKhelooAngularDesktop=self.webpackChunkKhelooAngularDesktop||[]).push([[82],{6082:(A,u,r)=>{r.r(u),r.d(u,{MSettingModule:()=>P});var c=r(6814),d=r(4828),g=r(6306),p=r(9301),e=r(9212),m=r(23),h=r(7700),n=r(6223);let v=(()=>{class i{constructor(t,s,o){this.fb=t,this.apiService=s,this.router=o,this.onCancel=new e.vpe,this.btnLoading=!1}ngOnInit(){this.resetForm=this.fb.group({Password:["",[n.kI.required]],NewPassword:["",[n.kI.required]],ConfrimPassword:["",[n.kI.required]]}),this.loaderSubscriber=this.apiService.loaderService.loading$.subscribe((t={})=>{this.btnLoading="changePassword"in t})}ChangePassword(){let t=this.resetForm.getRawValue(),o=this.resetForm.controls.NewPassword.value,a=this.resetForm.controls.ConfrimPassword.value;this.resetForm.controls.Password.value.trim()?o.trim()?a.trim()?o==a?this.apiService.apiRequest(p.v.changePassword,t).pipe((0,g.K)(l=>{throw this.apiService.showAlert("Something Went Wrong","Check your Internet Connection","error"),this.btnLoading=!1,console.error("An error occurred:",l),l})).subscribe(l=>{"1"==l.ErrorCode?(this.apiService.showAlert("",l.ErrorMessage,"success"),this.onCancel.emit(),this.router.navigate(["/"])):this.apiService.showAlert("",l.ErrorMessage,"error")}):this.apiService.showAlert("","New password and confirm Password should be match","warning"):this.apiService.showAlert("","Confirm Password Should not be Blank","warning"):this.apiService.showAlert("","New Password Should not be Blank","warning"):this.apiService.showAlert("","Password Should not be Blank","warning")}onClose(){this.onCancel.emit()}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(n.qu),e.Y36(m.s),e.Y36(d.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-m-reset-password"]],outputs:{onCancel:"onCancel"},decls:19,vars:1,consts:[[1,"reset-sec"],[1,"dialog-close",3,"click"],[1,"wizard"],[1,"login_logo_container"],["src","/assets/images/logo.gif","alt","logo",1,"img-fluid","logo-color"],[1,"RegisterFormComponent-form-title"],[3,"formGroup"],[1,"form_container"],[1,"col-md-12","p-l-0","crossbar-contact-input-container"],["type","password","formControlName","Password","required","","placeholder","Current Password"],["type","password","required","","formControlName","NewPassword","placeholder","New Password"],["type","password","required","","formControlName","ConfrimPassword","placeholder","Confirm Password"],[1,"col-md-12"],[1,"sign_up_container","loginBtn",3,"click"]],template:function(s,o){1&s&&(e.TgZ(0,"section",0)(1,"div",1),e.NdJ("click",function(){return o.onClose()}),e._uU(2,"X"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.TgZ(6,"h3",5),e._uU(7,"Reset Password"),e.qZA(),e.TgZ(8,"form",6)(9,"div",7)(10,"div",8),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"input",10),e.qZA(),e.TgZ(14,"div",8),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"div",12)(17,"button",13),e.NdJ("click",function(){return o.ChangePassword()}),e._uU(18," Reset "),e.qZA()()()()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",o.resetForm))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:[".forgot-section[_ngcontent-%COMP%]{width:285px;background-color:#0b001c;max-height:85vh;top:50%;left:50%;background-size:cover;height:100%;background-position:50%;border-radius:10px}.wizard[_ngcontent-%COMP%]{background-color:#0b001c;border:2px solid #f3a432;padding:15px}.reset-sec[_ngcontent-%COMP%]{width:289px}"]})}return i})();const f=["changePass"];function w(i,b){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8),e._uU(6,"Username"),e.qZA(),e.TgZ(7,"div",9),e._uU(8),e.qZA()()()()(),e.TgZ(9,"div",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),e._uU(14,"Full Name"),e.qZA(),e.TgZ(15,"div",10),e._uU(16),e.qZA()()()()(),e.TgZ(17,"div",4)(18,"div",5)(19,"div",6)(20,"div",7)(21,"div",8),e._uU(22,"Mobile"),e.qZA(),e.TgZ(23,"div",9),e._uU(24),e.qZA()()()()(),e.TgZ(25,"div",4)(26,"div",5)(27,"div",6)(28,"div",7)(29,"div",8),e._uU(30,"DOB"),e.qZA(),e.TgZ(31,"div",10),e._uU(32),e.ALo(33,"date"),e.qZA()()()()(),e.TgZ(34,"div",4)(35,"div",5)(36,"div",6)(37,"div",7)(38,"div",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.resetDialog())}),e._uU(39,"Reset Login Password"),e.qZA()()()()()()}if(2&i){const t=e.oxw();e.xp6(8),e.Oqu(t.userDetails.UserName),e.xp6(8),e.Oqu(t.userDetails.FName+" "+t.userDetails.LName),e.xp6(8),e.Oqu(t.userDetails.Mobile),e.xp6(8),e.Oqu(e.xi3(33,4,t.userDetails.DOB,"mediumDate"))}}function C(i,b){if(1&i){const t=e.EpF();e.TgZ(0,"app-m-reset-password",12),e.NdJ("onCancel",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.closePopup())}),e.qZA()}}const _=[{path:"",component:(()=>{class i{constructor(t,s){this.apiSer=t,this.dialog=s,this.apiSubscriber=[],this.isLoading=!1}ngOnInit(){this.loaderSubscriber=this.apiSer.loaderService.loading$.subscribe((t={})=>{this.isLoading="getUserProfile"in t}),this.getUserDetails()}getUserDetails(){this.apiSer.apiRequest(p.v.getUserProfile).pipe((0,g.K)(t=>{throw t})).subscribe(t=>{this.userDetails=t})}resetDialog(){this.dialog.open(this.resetForm).afterClosed().subscribe(s=>{})}closePopup(){this.dialog.closeAll()}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(m.s),e.Y36(h.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-m-setting"]],viewQuery:function(s,o){if(1&s&&e.Gf(f,5),2&s){let a;e.iGM(a=e.CRH())&&(o.resetForm=a.first)}},decls:6,vars:1,consts:[["ng-controller","SettingController",1,"settings_container","ng-scope"],["class","bank_form_container",4,"ngIf"],["changePass",""],[1,"bank_form_container"],[1,"setting_list"],[1,"setting_list_body"],[1,"setting_list_item"],[1,"setting_list_line"],[1,"setting_list_content"],[1,"setting_list_extra"],[1,"setting_list_extra","ng-binding"],[1,"setting_list_content",3,"click"],[3,"onCancel"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"h4"),e._uU(2,"Settings"),e.qZA(),e.YNc(3,w,40,7,"div",1),e.qZA(),e.YNc(4,C,1,0,"ng-template",null,2,e.W1O)),2&s&&(e.xp6(3),e.Q6J("ngIf",o.userDetails))},dependencies:[c.O5,v,c.uU],styles:['@import"https://kheloo.com/Content/OurAssest/PageCss/SettingsCss.css";']})}return i})()}];let Z=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#s=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]})}return i})();var S=r(8079);let P=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#s=this.\u0275inj=e.cJS({imports:[c.ez,Z,S.m]})}return i})()}}]);