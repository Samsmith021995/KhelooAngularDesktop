"use strict";(self.webpackChunkKhelooAngularDesktop=self.webpackChunkKhelooAngularDesktop||[]).push([[162],{2162:(T,_,r)=>{r.r(_),r.d(_,{WithdrawlModule:()=>A});var d=r(6814),l=r(4828),a=r(6223),g=r(9301),u=r(6306),t=r(9212),h=r(23),m=r(9101);const w=["bankDeskDetailShow"];function f(e,s){1&e&&(t.TgZ(0,"span"),t._uU(1,"Submit"),t.qZA())}function b(e,s){1&e&&(t.TgZ(0,"span"),t._UZ(1,"i-feather",27),t.qZA())}function C(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",15)(1,"h3",16),t._uU(2,"Bank Details"),t.qZA(),t.TgZ(3,"form",17)(4,"div",18),t._UZ(5,"input",19),t.qZA(),t.TgZ(6,"div",18),t._UZ(7,"input",20),t.qZA(),t.TgZ(8,"div",18),t._UZ(9,"input",21),t.qZA(),t.TgZ(10,"div",18),t._UZ(11,"input",22),t.qZA(),t.TgZ(12,"div",18),t._UZ(13,"input",23),t.qZA(),t.TgZ(14,"div",18),t._UZ(15,"input",24),t.qZA(),t.TgZ(16,"button",25),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.withdraw())}),t.YNc(17,f,2,0,"span",26)(18,b,2,0,"span",26),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("formGroup",n.withdrawform),t.xp6(13),t.Q6J("disabled",n.withdrawform.invalid),t.xp6(1),t.Q6J("ngIf",!n.showsubmitbtn),t.xp6(1),t.Q6J("ngIf",n.showsubmitbtn)}}function x(e,s){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",60),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.cancelWithdraw(i))}),t._uU(2,"Reverse WithDraw"),t.qZA(),t.BQk()}}const M=e=>({viewDesk:e});function O(e,s){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",30)(2,"div",31)(3,"p",32)(4,"span"),t._uU(5,"\u20b9"),t.qZA(),t._uU(6),t.qZA()(),t.TgZ(7,"div",33)(8,"div",9)(9,"div",34)(10,"div",35)(11,"p",36),t._uU(12,"Status"),t.qZA(),t.TgZ(13,"p",37),t._uU(14),t.qZA()(),t.TgZ(15,"div",38),t.YNc(16,x,3,0,"ng-container",26),t.qZA(),t.TgZ(17,"div",39)(18,"p",40),t._uU(19,"Date & Time"),t.qZA(),t.TgZ(20,"p",41)(21,"span",42),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"span",43),t._uU(25),t.ALo(26,"date"),t.qZA()()()()(),t.TgZ(27,"div",44)(28,"div",45)(29,"p",46),t._uU(30,"Comments"),t.qZA(),t.TgZ(31,"p",47),t._uU(32),t.qZA()()()(),t.TgZ(33,"div",48)(34,"div",49)(35,"a",50),t.NdJ("click",function(){const c=t.CHM(n).index,q=t.oxw(2);return t.KtG(q.viewDeskDetail(c))}),t._uU(36,"View Bank Details"),t.qZA()()(),t.TgZ(37,"div",51,52)(39,"div",53)(40,"div",54)(41,"p",36),t._uU(42,"Account Holder Name"),t.qZA(),t.TgZ(43,"p",55),t._uU(44),t.qZA()(),t.TgZ(45,"div",56)(46,"p",36),t._uU(47,"Account Number"),t.qZA(),t.TgZ(48,"p",55),t._uU(49),t.qZA()()(),t.TgZ(50,"div",57)(51,"div",58)(52,"p",40),t._uU(53,"IFSC Code"),t.qZA(),t.TgZ(54,"p",41)(55,"span",42),t._uU(56),t.qZA()()(),t.TgZ(57,"div",59)(58,"p",40),t._uU(59,"Bank Name"),t.qZA(),t.TgZ(60,"p",41)(61,"span",42),t._uU(62),t.qZA()()()()()(),t.BQk()}if(2&e){const n=s.$implicit,o=t.oxw(2);t.xp6(6),t.Oqu(n.Amount),t.xp6(8),t.Oqu(n.StatusName),t.xp6(2),t.Q6J("ngIf","P"==n.StatusCode),t.xp6(6),t.hij(" ",t.xi3(23,11,n.CreatedDate,"mediumDate"),""),t.xp6(3),t.Oqu(t.xi3(26,14,n.CreatedDate,"shortTime")),t.xp6(7),t.Oqu(n.Description),t.xp6(5),t.Q6J("ngClass",t.VKq(17,M,o.viewDeskDetails)),t.xp6(7),t.Oqu(n.AccountHolderName),t.xp6(5),t.Oqu(n.AccountNumber),t.xp6(7),t.Oqu(n.IfscCode),t.xp6(6),t.Oqu(n.BankName)}}function P(e,s){if(1&e&&(t.TgZ(0,"div",28)(1,"h3",16),t._uU(2,"WithDrawStatus Details"),t.qZA(),t.YNc(3,O,63,19,"ng-container",29),t.qZA()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngForOf",n.withdrawStatement)}}const p=e=>({active:e}),v=[{path:"",component:(()=>{class e{constructor(n,o,i){this.fb=n,this.apiSer=o,this.renderer=i,this.apiSubscriber=[],this.viewDeskDetails=!1,this.isLoading=!1,this.isStatusLoading=!1,this.showsubmitbtn=!1,this.withdrawState=!1,this.withdrawform=this.fb.group({AccountHolderName:["",a.kI.required],AccountNumber:["",a.kI.required],BankName:["",a.kI.required],BranchName:["",a.kI.required],Amount:["",a.kI.required],IfscCode:["",a.kI.required]})}ngOnInit(){this.loaderSubscriber=this.apiSer.loaderService.loading$.subscribe((n={})=>{this.isLoading="withdrawReq"in n,this.isStatusLoading="withdrawState"in n})}withdraw(){this.showsubmitbtn=!0,this.apiSer.apiRequest(g.v.withdrawReq,this.withdrawform.getRawValue()).subscribe({next:n=>{"1"==n.ErrorCode?this.apiSer.showAlert(n.Result,n.ErrorMessage,"success"):this.apiSer.showAlert("",n.ErrorMessage,"error"),this.showsubmitbtn=!1,this.withdrawform.reset()},error:n=>{this.apiSer.showAlert("Something Went Wrong","Please check your internet Connection","error"),this.showsubmitbtn=!1}})}withdrawStatus(){this.apiSer.apiRequest(g.v.withdrawState).subscribe({next:n=>{this.withdrawStatement=n,this.withdrawState=!0},error:n=>{this.apiSer.showAlert("Something Went Wrong","Please check your internet Connection","error")}})}bankStatus(){this.withdrawState=!1}viewDeskDetail(n){let o=this.bankshow.toArray()[n].nativeElement;if(o){if(o.classList.contains("viewDesk"))return void this.renderer.removeClass(o,"viewDesk");this.renderer.addClass(o,"viewDesk")}}cancelWithdraw(n){this.apiSer.apiRequest(g.v.cancelReq,n).pipe((0,u.K)(i=>{throw i})).subscribe(i=>{"1"==i.ErrorCode?(this.apiSer.showAlert(i.ErrorMessage,"","success"),this.withdrawStatus()):this.apiSer.showAlert(i.ErrorMessage,"","error")})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(h.s),t.Y36(t.Qsj))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-withdrawl"]],viewQuery:function(o,i){if(1&o&&t.Gf(w,5),2&o){let c;t.iGM(c=t.CRH())&&(i.bankshow=c)}},decls:22,vars:8,consts:[[1,"container-fluid"],[1,"row","no-gutter"],[1,"col-md-7","d-none","d-md-flex","bg-image"],[1,"col-md-5","bg-light"],[1,"login","d-flex","align-items-center","py-4"],[1,"container"],["href","/",1,"navbar-brand","fw-bold"],["src","/assets/images/logo.gif","width","200px",1,"logo",2,"margin","auto","text-align","center","display","block"],["routerLink","withdraw-info",1,"withlink"],[1,"row"],[1,"col-lg-10","col-xl-7","mx-auto","col-md-8","d-md-flex"],[1,"col-md-6"],["type","button",1,"btn","btn-primary","btn-lg",3,"ngClass","click"],["class","col-lg-10 mx-auto",4,"ngIf"],["class","col-lg-10 col-xl-7 mx-auto with-scroll",4,"ngIf"],[1,"col-lg-10","mx-auto"],[1,"display-4","logintitle"],[3,"formGroup"],[1,"form-group","mb-3"],["id","AccountHolderName","type","text","placeholder","Bank Holder Name","required","","autofocus","","formControlName","AccountHolderName",1,"form-control","rounded-pill","border-0","shadow-sm","px-4"],["id","AccountNumber","type","number","placeholder","Account Number","required","","autofocus","","formControlName","AccountNumber",1,"form-control","rounded-pill","border-0","shadow-sm","px-4"],["id","BankName","type","text","placeholder","Bank Name","required","","autofocus","","formControlName","BankName",1,"form-control","rounded-pill","border-0","shadow-sm","px-4"],["id","BranchName","type","text","placeholder","Branch Name","required","","autofocus","","formControlName","BranchName",1,"form-control","rounded-pill","border-0","shadow-sm","px-4"],["id","Amount","type","number","placeholder","Amount","required","","autofocus","","formControlName","Amount",1,"form-control","rounded-pill","border-0","shadow-sm","px-4"],["id","IfscCode","type","text","placeholder","IFSC Code","required","","autofocus","","formControlName","IfscCode",1,"form-control","rounded-pill","border-0","shadow-sm","px-4"],["_ngcontent-ng-c1731079979","","type","button",1,"btn","btn-primary","btn-lg",3,"disabled","click"],[4,"ngIf"],["name","loader"],[1,"col-lg-10","col-xl-7","mx-auto","with-scroll"],[4,"ngFor","ngForOf"],["ng-repeat","wd in WithdrwalStateMent",1,"with_detail_ind_container","ng-scope"],[1,"with_amount_container"],[1,"ng-binding"],[1,"with_details_sub_container"],[1,"with_first_line_container","col-sm-12"],[1,"with_status_container","col-xs-4"],[1,"status_title_text"],["ng-class","wd.StatusCode == 'P'?'pending_text':''",1,"status_text","pending_text","ng-binding"],[1,"with_reverse_container","col-xs-4"],[1,"with_date_container","col-xs-4"],[1,"date_title_text"],[1,"date_text"],[1,"date_span_with","ng-binding"],[1,"time_span_with","ng-binding"],[1,"with_second_line_container"],[1,"with_comments_container"],[1,"comments_title_text"],[1,"comments_text","ng-binding"],[1,"with_bank_container_link"],[1,"bank_link_container"],[1,"author_bio_wrap_toggle",3,"click"],[1,"author_bio_wrap",3,"ngClass"],["bankDeskDetailShow",""],[1,"with_first_col_container"],[1,"with_account_container"],[1,"account_name_with","ng-binding"],[1,"with_status_container"],[1,"with_second_col_container"],[1,"with_bank_container"],[1,"with_bank_detail_container"],[1,"reversebtn",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6),t._UZ(7,"img",7),t.qZA(),t.TgZ(8,"a",8),t._uU(9,"How to withdraw ?"),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"div",9)(12,"div",10)(13,"div",11)(14,"button",12),t.NdJ("click",function(){return i.bankStatus()}),t._uU(15,"Bank Details"),t.qZA()(),t.TgZ(16,"div",11)(17,"button",12),t.NdJ("click",function(){return i.withdrawStatus()}),t._uU(18,"Withdraw Status"),t.qZA()()()(),t.TgZ(19,"div",9),t.YNc(20,C,19,4,"div",13)(21,P,4,1,"div",14),t.qZA()()()()()()),2&o&&(t.xp6(14),t.Q6J("ngClass",t.VKq(4,p,!i.withdrawState)),t.xp6(3),t.Q6J("ngClass",t.VKq(6,p,i.withdrawState)),t.xp6(3),t.Q6J("ngIf",!i.withdrawState),t.xp6(1),t.Q6J("ngIf",i.withdrawState))},dependencies:[d.mk,d.sg,d.O5,l.rH,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.Q7,a.sg,a.u,m.u,d.uU],styles:['.with_container[_ngcontent-%COMP%]{background:#000;margin-top:60px;min-height:90vh;padding-top:30px}.with_container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:20px;padding-bottom:20px;text-transform:uppercase;position:relative;margin-bottom:15px}.bank_input_container[_ngcontent-%COMP%]{background:#1c0048;margin-bottom:20px}.bank_input_container[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{max-width:none;background:transparent;height:40px;border:2px solid #f4ad09;border-radius:8px;color:#f4ad09;font-size:12px}.dep_btn_container[_ngcontent-%COMP%]   .loginBtn[_ngcontent-%COMP%]{border:1px solid #f4ad09;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);color:#fff;padding:10px 25px;border-radius:8px;font-weight:700;width:100%;font-size:18px}.dep_btn_container[_ngcontent-%COMP%]{text-align:center;margin-top:30px;margin-bottom:20px}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-bottom:0 none}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:none;padding:10px;color:#fff;background:#1d0048;border-radius:0;margin:0}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#000}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px;display:block;text-align:center;margin-bottom:5px}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border:none;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);color:#fff;margin:0;transition:background .2s linear}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after{content:"";position:absolute;top:18px;left:40%;border:12px solid transparent;border-top-color:#000;transform:rotate(180deg)}.tab[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{line-height:25px;padding:30px 0 0}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;display:inline-block}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center}.bank_form_container[_ngcontent-%COMP%]{padding:0 15px}.with_detail_ind_container[_ngcontent-%COMP%]{padding:15px 0 10px;background:#1e0048;margin-bottom:15px;border-radius:8px}.with_amount_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f4b52d;font-size:25px!important;font-weight:700;padding:0 15px;display:inline-block}.with_details_sub_container[_ngcontent-%COMP%]{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.3)}.with_status_container[_ngcontent-%COMP%], .with_date_container[_ngcontent-%COMP%], .bank_link_container[_ngcontent-%COMP%], .download_with_container[_ngcontent-%COMP%]{display:inline-block}.with_status_container[_ngcontent-%COMP%]{float:left}.with_date_container[_ngcontent-%COMP%], .download_with_container[_ngcontent-%COMP%]{float:right}p.status_title_text[_ngcontent-%COMP%], p.date_title_text[_ngcontent-%COMP%], p.comments_title_text[_ngcontent-%COMP%]{opacity:.5;font-size:12px!important}p.status_text[_ngcontent-%COMP%]{color:#84d823;font-weight:700}.with_comments_container[_ngcontent-%COMP%]{padding:0 15px}.with_bank_container_link[_ngcontent-%COMP%]{padding:5px 15px 0}.bank_link_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;text-decoration:underline;color:#f5bc3c}.author_bio_wrap[_ngcontent-%COMP%]{margin-top:0;width:100%;padding:10px 15px 0}.author_bio_wrap[_ngcontent-%COMP%]   .with_first_line_container[_ngcontent-%COMP%]{padding-top:10px}.with_first_col_container[_ngcontent-%COMP%]{width:65%;display:inline-block;padding-right:15px}.with_second_col_container[_ngcontent-%COMP%]{width:35%;display:inline-block}.with_account_container[_ngcontent-%COMP%], .with_bank_container[_ngcontent-%COMP%]{padding-bottom:15px}p.status_text.failed_text[_ngcontent-%COMP%]{color:#f44336}p.status_text.pending_text[_ngcontent-%COMP%]{color:#ffeb3b}.with_amount_container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding-right:5px}.with_amount_container[_ngcontent-%COMP%]   p.with_duration[_ngcontent-%COMP%]{float:right;font-size:16px!important;color:red;line-height:15px}.with_amount_container[_ngcontent-%COMP%]   p.with_duration[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:400;font-size:11px!important;color:#fff;opacity:.5}.author_bio_wrap_toggle[_ngcontent-%COMP%]{position:relative;display:block}.author_bio_wrap_toggle[_ngcontent-%COMP%]:after{position:absolute;content:"\\276f";top:0;font-family:FontAwesome;right:-15px}.author_bio_wrap_toggle.arrow_class[_ngcontent-%COMP%]:after{content:"\\2304"}.with_container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;width:20%;bottom:11px;height:3px;background:#fdc600;border-radius:3px;transform:translate(-50%)}.with_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{display:none}.with_details_main_container[_ngcontent-%COMP%]{padding:15px}.with_details_main_container[_ngcontent-%COMP%]   .with_detail_ind_container[_ngcontent-%COMP%]:last-child{margin-bottom:0}.with_date_container[_ngcontent-%COMP%]{padding:0}.with_date_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px!important}.with_rev_btn[_ngcontent-%COMP%]{background:transparent;border:1px solid #f4ad09;padding:5px 13px;font-size:12px;text-transform:uppercase;color:#f4ad0e;border-radius:5px;font-weight:700;box-shadow:0 0 20px #c4a300}.with_details_sub_container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.with_reverse_container.col-xs-3[_ngcontent-%COMP%]{padding:0}.login[_ngcontent-%COMP%], .image[_ngcontent-%COMP%]{min-height:100vh}.bg-light[_ngcontent-%COMP%]{background-image:linear-gradient(#6612a5,#2c003a)}p.text-muted.mb-4.loginsubtitle[_ngcontent-%COMP%]{font-size:14px;color:#fff!important}h3.display-4.logintitle[_ngcontent-%COMP%]{color:#fff;font-weight:600}.rounded-pill[_ngcontent-%COMP%]{border-radius:4px!important;padding:16px;border:1px solid white!important;width:100%;background:transparent;color:#fff!important;max-width:none}[_ngcontent-%COMP%]::placeholder{color:#fff;opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#2b2b2b}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#2b2b2b}h3.display-4.logintitle[_ngcontent-%COMP%]{color:#fff;margin:16px 0}.bg-image[_ngcontent-%COMP%]{background-image:url(/assets/images/login-bg2.jpg);background-size:cover;background-position:center center}button.btn.btn-primary.btn-lg[_ngcontent-ng-c1731079979][_ngcontent-%COMP%]{width:100%;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);padding:16px 0;border:none;font-size:14px}#showeye[_ngcontent-%COMP%]{float:right;margin-top:-35px}#showeye[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:large}.author_bio_wrap[_ngcontent-%COMP%]{display:none}.viewDesk[_ngcontent-%COMP%]{display:block!important}p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:400;font-family:nunito,sans-serif}button.btn.btn-primary.btn-lg[_ngcontent-%COMP%]{border:1px solid #3e0763;font-size:18px;font-weight:300;background:#7800AC;width:170px}.with-scroll[_ngcontent-%COMP%]{height:800px;overflow-y:auto}.reversebtn[_ngcontent-%COMP%]{color:#fff;background:#612ba7;border:1px solid #6c41a5;border-radius:5px;float:right}.active[_ngcontent-%COMP%]{background:#e8aa0d!important}.withlink[_ngcontent-%COMP%]{text-decoration:none;text-align:center;display:block;color:#f4ad09;font-size:14px}']})}return e})()},{path:"withdraw-info",component:(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-withdrawl-info"]],decls:46,vars:0,consts:[[1,""],[1,"aboutus_heading_container"],[2,"color","#ffb100"],[1,"container"],[1,"row"],[1,"col-lg-4"],["src","/assets/images/step1w.png","alt","",1,"img-fluid","mb-3","wd-40"],[1,"col-lg-8"],[1,"testimonial-item","mx-auto","mb-5","mb-lg-0"],[1,"font-weight-light","mb-0"],["src","/assets/images/step2w.png","alt","",1,"img-fluid","mb-3","wd-40"],["src","/assets/images/step3w.png","alt","",1,"img-fluid","mb-3","wd-40"],["src","/assets/images/step4w.png","alt","",1,"img-fluid","mb-3","wd-40"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"How To "),t.TgZ(4,"span",2),t._uU(5,"Withdraw?"),t.qZA()()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t._UZ(9,"img",6),t.qZA(),t.TgZ(10,"div",7)(11,"div",8)(12,"h5",2),t._uU(13,"Step 1:"),t.qZA(),t.TgZ(14,"p",9),t._uU(15,"Login to your kheloo account and click to profile button and click on 'WITHDRAWS'."),t.qZA()()()(),t._UZ(16,"hr"),t.TgZ(17,"div",4)(18,"div",5),t._UZ(19,"img",10),t.qZA(),t.TgZ(20,"div",7)(21,"div",8)(22,"h5",2),t._uU(23,"Step 2:"),t.qZA(),t.TgZ(24,"p",9),t._uU(25,"Enter your bank account details and amount you want to withdraw and click to 'SUBMIT'."),t.qZA()()()(),t._UZ(26,"hr"),t.TgZ(27,"div",4)(28,"div",5),t._UZ(29,"img",11),t.qZA(),t.TgZ(30,"div",7)(31,"div",8)(32,"h5",2),t._uU(33,"Step 3:"),t.qZA(),t.TgZ(34,"p",9),t._uU(35,"Then It's show success message then click to 'OKay'"),t.qZA()()()(),t._UZ(36,"hr"),t.TgZ(37,"div",4)(38,"div",5),t._UZ(39,"img",12),t.qZA(),t.TgZ(40,"div",7)(41,"div",8)(42,"h5",2),t._uU(43,"Step 4:"),t.qZA(),t.TgZ(44,"p",9),t._uU(45," Now select 'Withdrawal Status' tab and check your Withdrawal status. "),t.qZA()()()()()())},styles:[".aboutus_heading_container[_ngcontent-%COMP%]{text-align:center;color:#fff}.testimonial-item[_ngcontent-%COMP%]{color:#fff;color:#000!important}"]})}return e})()}];let Z=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(v),l.Bz]})}return e})();var k=r(8079);let A=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[d.ez,Z,k.m]})}return e})()}}]);