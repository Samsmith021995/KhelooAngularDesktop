"use strict";(self.webpackChunkKhelooAngularDesktop=self.webpackChunkKhelooAngularDesktop||[]).push([[235],{8235:(y,l,r)=>{r.r(l),r.d(l,{WithdrawModule:()=>S});var _=r(6814),p=r(4828),a=r(6223),d=r(9301),h=r(6306),t=r(9212),u=r(23),m=r(2032),w=r(9101);const f=["bankDetailShow"];function C(e,c){1&e&&(t.ynx(0),t._UZ(1,"i-feather",27),t.BQk())}function b(e,c){1&e&&t._uU(0," Submit ")}function x(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",13)(1,"div",14)(2,"h4"),t._uU(3,"Bank Details"),t.qZA(),t.TgZ(4,"form",15)(5,"div",16),t._UZ(6,"input",17),t.qZA(),t.TgZ(7,"div",16),t._UZ(8,"input",18),t.qZA(),t.TgZ(9,"div",16),t._UZ(10,"input",19),t.qZA(),t.TgZ(11,"div",16),t._UZ(12,"input",20),t.qZA(),t.TgZ(13,"div",16),t._UZ(14,"input",21),t.qZA(),t.TgZ(15,"div",16),t._UZ(16,"input",22),t.qZA(),t.TgZ(17,"div",23)(18,"button",24),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.SubmitWithdrawRequest())}),t.YNc(19,C,2,0,"ng-container",25)(20,b,1,0,"ng-template",null,26,t.W1O),t.qZA()()()()()}if(2&e){const n=t.MAs(21),i=t.oxw();t.xp6(4),t.Q6J("formGroup",i.withdrawForm),t.xp6(15),t.Q6J("ngIf",i.isLoading)("ngIfElse",n)}}function v(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",63),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,s=t.oxw(3);return t.KtG(s.reverseWithdraw(o))}),t._uU(2,"Reverse"),t.qZA(),t.BQk()}}const O=e=>({view:e});function M(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",31)(2,"div",32)(3,"p",33)(4,"span"),t._uU(5,"\u20b9"),t.qZA(),t._uU(6),t.qZA()(),t.TgZ(7,"div",34)(8,"div",35)(9,"div",36)(10,"div",37)(11,"p",38),t._uU(12,"Status"),t.qZA(),t.TgZ(13,"p",39),t._uU(14),t.qZA()(),t.TgZ(15,"div",40),t.YNc(16,v,3,0,"ng-container",12),t.qZA(),t.TgZ(17,"div",41)(18,"p",42),t._uU(19,"Date & Time"),t.qZA(),t.TgZ(20,"p",43)(21,"span",44),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"span",45),t._uU(25),t.ALo(26,"date"),t.qZA()()()()(),t.TgZ(27,"div",46)(28,"div",47)(29,"p",48),t._uU(30,"Comments"),t.qZA(),t.TgZ(31,"p",49),t._uU(32),t.qZA()()()(),t.TgZ(33,"div",50)(34,"div",51)(35,"a",52),t.NdJ("click",function(){const s=t.CHM(n).index,U=t.oxw(3);return t.KtG(U.viewDetail(s))}),t._uU(36," View Bank Details"),t.qZA()(),t._UZ(37,"div",53),t.qZA(),t.TgZ(38,"div",54,55)(40,"div",56)(41,"div",57)(42,"p",38),t._uU(43,"Account Holder Name"),t.qZA(),t.TgZ(44,"p",58),t._uU(45),t.qZA()(),t.TgZ(46,"div",59)(47,"p",38),t._uU(48,"Account Number"),t.qZA(),t.TgZ(49,"p",58),t._uU(50),t.qZA()()(),t.TgZ(51,"div",60)(52,"div",61)(53,"p",42),t._uU(54,"IFSC Code"),t.qZA(),t.TgZ(55,"p",43)(56,"span",44),t._uU(57),t.qZA()()(),t.TgZ(58,"div",62)(59,"p",42),t._uU(60,"Bank Name"),t.qZA(),t.TgZ(61,"p",43)(62,"span",44),t._uU(63),t.qZA()()()()()(),t.BQk()}if(2&e){const n=c.$implicit,i=t.oxw(3);t.xp6(6),t.Oqu(n.Amount),t.xp6(8),t.Oqu(n.StatusName),t.xp6(2),t.Q6J("ngIf","P"==n.StatusCode),t.xp6(6),t.hij(" ",t.xi3(23,11,n.CreatedDate,"mediumDate"),""),t.xp6(3),t.Oqu(t.xi3(26,14,n.CreatedDate,"shortTime")),t.xp6(7),t.Oqu(n.Description),t.xp6(6),t.Q6J("ngClass",t.VKq(17,O,i.viewDetails)),t.xp6(7),t.Oqu(n.AccountHolderName),t.xp6(5),t.Oqu(n.AccountNumber),t.xp6(7),t.Oqu(n.IfscCode),t.xp6(6),t.Oqu(n.BankName)}}function P(e,c){if(1&e&&t.YNc(0,M,64,19,"ng-container",30),2&e){const n=t.oxw(2);t.Q6J("ngForOf",n.withdrawStatement)}}function Z(e,c){1&e&&(t.TgZ(0,"div",64)(1,"div",32)(2,"p"),t._UZ(3,"span"),t._uU(4,"No withdraw request found."),t.qZA()()())}function k(e,c){if(1&e&&(t.TgZ(0,"div")(1,"h4",28),t._uU(2,"WithDraw Details"),t.qZA(),t.TgZ(3,"div",29),t.YNc(4,P,1,1,"ng-container")(5,Z,5,0),t.qZA()()),2&e){const n=t.oxw();t.xp6(4),t.um2(4,n.withdrawStatement.length>0?4:5)}}const g=e=>({active:e}),A=[{path:"",component:(()=>{class e{constructor(n,i,o){this.fb=n,this.apiSer=i,this.renderer=o,this.apiSubscriber=[],this.showsubmitbtn=!1,this.isLoading=!1,this.isStatusLoading=!1,this.withdrawState=!1,this.viewDetails=!1}ngOnInit(){this.loaderSubscriber=this.apiSer.loaderService.loading$.subscribe((n={})=>{this.isLoading="withdrawReq"in n,this.isStatusLoading="withdrawState"in n}),this.withdrawForm=this.fb.group({AccountHolderName:["",a.kI.required],AccountNumber:["",a.kI.required],BankName:["",a.kI.required],BranchName:["",a.kI.required],Amount:["",a.kI.required],IfscCode:["",a.kI.required]})}SubmitWithdrawRequest(){this.showsubmitbtn=!0,this.withdrawForm.controls.AccountHolderName.value?this.withdrawForm.controls.AccountNumber.value?this.withdrawForm.controls.BankName.value?this.withdrawForm.controls.BranchName.value?this.withdrawForm.controls.Amount.value<100?this.apiSer.showAlert("Amount should be more than 100","","error"):this.withdrawForm.controls.IfscCode.value?this.apiSer.apiRequest(d.v.withdrawReq,this.withdrawForm.getRawValue()).subscribe({next:n=>{"1"==n.ErrorCode?(this.apiSer.showAlert(n.Result,n.ErrorMessage,"success"),this.withdrawForm.reset()):this.apiSer.showAlert("",n.ErrorMessage,"error"),this.showsubmitbtn=!1},error:n=>{this.apiSer.showAlert("Something Went Wrong","Please check your internet Connection","error"),this.showsubmitbtn=!1}}):this.apiSer.showAlert("Please Fill the IFSC Code","","error"):this.apiSer.showAlert("Please Fill the Branch Name","","error"):this.apiSer.showAlert("Please Fill the Bank Name","","error"):this.apiSer.showAlert("Please Fill the Account Number","","error"):this.apiSer.showAlert("Please Fill the Account Holder Name","","error")}withdrawStatus(){this.withdrawState=!0,this.apiSer.apiRequest(d.v.withdrawState).subscribe({next:n=>{this.withdrawStatement=n},error:n=>{this.apiSer.showAlert("Something Went Wrong","Please check your internet Connection","error")}})}reverseWithdraw(n){this.apiSer.apiRequest(d.v.cancelReq,n).pipe((0,h.K)(o=>{throw o})).subscribe(o=>{"1"==o.ErrorCode?(this.apiSer.showAlert(o.ErrorMessage,"","success"),this.withdrawStatus()):this.apiSer.showAlert(o.ErrorMessage,"","error")})}bankStatus(){this.withdrawState=!1}viewDetail(n){let i=this.bankshow.toArray()[n].nativeElement;if(i){if(i.classList.contains("view"))return void this.renderer.removeClass(i,"view");this.renderer.addClass(i,"view")}}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.qu),t.Y36(u.s),t.Y36(t.Qsj))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-withdraw"]],viewQuery:function(i,o){if(1&i&&t.Gf(f,5),2&i){let s;t.iGM(s=t.CRH())&&(o.bankshow=s)}},decls:19,vars:8,consts:[["ng-controller","WithdrawConroller",1,"with_container"],[1,"heading"],[1,"help-text","text-lg-right"],["href","/m-withdraw/withdraw-info",1,"withPlay"],["name","help-circle"],["role","tabpanel",1,"tab"],["role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"active"],[3,"ngClass","click"],["role","presentation"],[1,""],["class","","id","Section1",4,"ngIf"],[4,"ngIf"],["id","Section1",1,""],[1,"bank_form_container"],["action","",3,"formGroup"],[1,"bank_input_container"],["matInput","","type","text","formControlName","AccountHolderName","placeholder","Bank Account Holder Name",1,"form-control"],["matInput","","type","text","formControlName","AccountNumber","placeholder","Bank Account Number",1,"form-control"],["matInput","","type","text","formControlName","BankName","placeholder","Bank Name",1,"form-control"],["matInput","","type","text","formControlName","BranchName","placeholder","Branch Name",1,"form-control"],["matInput","","type","number","formControlName","Amount","placeholder","Amount",1,"form-control"],["matInput","","type","text","formControlName","IfscCode","placeholder","IFSC Code",1,"form-control"],[1,"dep_btn_container"],[1,"loginBtn",3,"click"],[4,"ngIf","ngIfElse"],["content",""],["name","loader"],[1,"wheading"],[1,"with_details_main_container",2,"margin-top","20px"],[4,"ngFor","ngForOf"],[1,"with_detail_ind_container"],[1,"with_amount_container"],[1,"ng-binding"],[1,"with_details_sub_container"],[1,"row"],[1,"with_first_line_container","col-sm-12"],[1,"with_status_container","col-xs-4"],[1,"status_title_text"],[1,"status_text","pending_text"],[1,"with_reverse_container","col-xs-4"],[1,"with_date_container","col-xs-4"],[1,"date_title_text"],[1,"date_text"],[1,"date_span_with"],[1,"time_span_with"],[1,"with_second_line_container"],[1,"with_comments_container"],[1,"comments_title_text"],[1,"comments_text"],[1,"with_bank_container_link"],[1,"bank_link_container"],[1,"author_bio_wrap_tog",3,"click"],[1,"download_with_container"],[1,"author_bio_wrap",3,"ngClass"],["bankDetailShow",""],[1,"with_first_col_container"],[1,"with_account_container"],[1,"account_name_with"],[1,"with_status_container"],[1,"with_second_col_container"],[1,"with_bank_container"],[1,"with_bank_detail_container"],[1,"reversebtn",3,"click"],["ng-show","NoWithdrawalFound",1,"with_detail_ind_container","ng-hide"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"WithDraw Details"),t.qZA()(),t.TgZ(4,"p",2)(5,"a",3),t._uU(6," How to Withdraw "),t._UZ(7,"i-feather",4),t.qZA()(),t.TgZ(8,"div",5)(9,"ul",6)(10,"li",7)(11,"a",8),t.NdJ("click",function(){return o.bankStatus()}),t._uU(12,"Bank Details"),t.qZA()(),t.TgZ(13,"li",9)(14,"a",8),t.NdJ("click",function(){return o.withdrawStatus()}),t._uU(15,"Withdrawal Status"),t.qZA()()(),t.TgZ(16,"div",10),t.YNc(17,x,22,3,"div",11)(18,k,6,1,"div",12),t.qZA()()()),2&i&&(t.xp6(11),t.Q6J("ngClass",t.VKq(4,g,!o.withdrawState)),t.xp6(3),t.Q6J("ngClass",t.VKq(6,g,o.withdrawState)),t.xp6(3),t.Q6J("ngIf",!o.withdrawState),t.xp6(1),t.Q6J("ngIf",o.withdrawState))},dependencies:[_.mk,_.sg,_.O5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,m.Nt,w.u,_.uU],styles:['.with_container[_ngcontent-%COMP%]{background:#000;margin-top:60px;min-height:90vh;padding-top:30px}.with_container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:20px;padding-bottom:20px;text-transform:uppercase;position:relative;margin-bottom:15px}.bank_input_container[_ngcontent-%COMP%]{background:#1c0048;margin-bottom:20px}.bank_input_container[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{max-width:none;background:transparent;height:40px;border:2px solid #f4ad09;border-radius:8px;color:#fff!important;font-size:12px}.dep_btn_container[_ngcontent-%COMP%]   .loginBtn[_ngcontent-%COMP%]{border:1px solid #f4ad09;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);color:#fff;padding:10px 25px;border-radius:8px;font-weight:700;width:100%;font-size:18px}.dep_btn_container[_ngcontent-%COMP%]{text-align:center;margin-top:30px;margin-bottom:20px}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-bottom:0 none;justify-content:space-around}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:none;padding:10px;color:#fff;background:#1d0048;border-radius:0;margin:0}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px;display:block;text-align:center;margin-bottom:5px}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border:none;color:#fff;margin:0;transition:background .2s linear}.tab[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{line-height:25px;padding:30px 0 0}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;width:50%}.tab[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center}.bank_form_container[_ngcontent-%COMP%]{padding:15px}.with_amount_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f4b52d;font-size:20px!important;font-weight:700;padding:0 15px;display:inline-block}.with_details_sub_container[_ngcontent-%COMP%]{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.3)}.with_status_container[_ngcontent-%COMP%], .with_date_container[_ngcontent-%COMP%], .bank_link_container[_ngcontent-%COMP%], .download_with_container[_ngcontent-%COMP%]{display:inline-block}.with_status_container[_ngcontent-%COMP%]{float:left}.with_date_container[_ngcontent-%COMP%], .download_with_container[_ngcontent-%COMP%]{float:right}p.status_title_text[_ngcontent-%COMP%], p.date_title_text[_ngcontent-%COMP%], p.comments_title_text[_ngcontent-%COMP%]{opacity:.5;font-size:12px!important}p.status_text[_ngcontent-%COMP%]{color:#84d823;font-weight:700}.with_comments_container[_ngcontent-%COMP%]{padding:0 15px}.with_bank_container_link[_ngcontent-%COMP%]{padding:5px 15px 0}.bank_link_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;text-decoration:underline;color:#f5bc3c}.author_bio_wrap[_ngcontent-%COMP%]{margin-top:0;width:100%;padding:10px 15px 0}.author_bio_wrap[_ngcontent-%COMP%]   .with_first_line_container[_ngcontent-%COMP%]{padding-top:10px}.with_first_col_container[_ngcontent-%COMP%]{width:65%;float:left}.with_second_col_container[_ngcontent-%COMP%]{width:35%;display:inline-block}.with_account_container[_ngcontent-%COMP%], .with_bank_container[_ngcontent-%COMP%]{padding-bottom:15px}p.status_text.failed_text[_ngcontent-%COMP%]{color:#f44336}p.status_text.pending_text[_ngcontent-%COMP%]{color:#ffeb3b}.with_amount_container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding-right:5px}.with_amount_container[_ngcontent-%COMP%]   p.with_duration[_ngcontent-%COMP%]{float:right;font-size:16px!important;color:red;line-height:15px}.with_amount_container[_ngcontent-%COMP%]   p.with_duration[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:400;font-size:11px!important;color:#fff;opacity:.5}.author_bio_wrap_toggle[_ngcontent-%COMP%]{position:relative;display:block}.author_bio_wrap_toggle[_ngcontent-%COMP%]:after{position:absolute;content:"\\f078";top:0;font-family:FontAwesome;right:-15px}.author_bio_wrap_toggle.arrow_class[_ngcontent-%COMP%]:after{content:"\\f077"}.with_container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;width:20%;bottom:11px;height:3px;background:#fdc600;border-radius:3px;transform:translate(-50%)}.with_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{display:none}.with_details_main_container[_ngcontent-%COMP%]{padding:15px}.with_details_main_container[_ngcontent-%COMP%]   .with_detail_ind_container[_ngcontent-%COMP%]:last-child{margin-bottom:0}.with_date_container[_ngcontent-%COMP%]{padding:0}.with_date_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px!important}.with_rev_btn[_ngcontent-%COMP%]{background:transparent;border:1px solid #f4ad09;padding:5px 13px;font-size:12px;text-transform:uppercase;color:#f4ad0e;border-radius:5px;font-weight:700;box-shadow:0 0 20px #c4a300}.with_details_sub_container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.with_reverse_container.col-xs-3[_ngcontent-%COMP%]{padding:0}.with_detail_ind_container[_ngcontent-%COMP%]{padding:15px 0 10px;background:#1e0048;margin-bottom:15px;border-radius:8px}.author_bio_wrap[_ngcontent-%COMP%]{display:none}.view[_ngcontent-%COMP%]{display:block!important}p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:400;font-family:nunito,sans-serif}.active[_ngcontent-%COMP%]{background-color:#f4ad09!important}.withPlay[_ngcontent-%COMP%]{color:#f4ad09;text-align:center;display:block;font-size:14px}.tab[_ngcontent-%COMP%]{margin-top:20px}.heading[_ngcontent-%COMP%]{margin-bottom:0}.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{line-height:24px;font-weight:700;font-family:anton,sans-serif;background:-webkit-linear-gradient(#ffd370 0%,#f7ad07 50%);text-transform:uppercase;z-index:0;padding-top:5px;padding-bottom:0;cursor:auto;letter-spacing:-1px;font-size:28px;letter-spacing:0;color:#d07909;position:relative;-webkit-text-fill-color:initial;text-align:center;background:-webkit-linear-gradient(#f08f0f 0%,#fff 50%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}h4.wheading[_ngcontent-%COMP%]{line-height:25px;padding:30px 0 0}.mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.reversebtn[_ngcontent-%COMP%]{background:transparent;border:1px solid #f4ad09;padding:5px 13px;font-size:12px;text-transform:uppercase;color:#f4ad0e;border-radius:5px;font-weight:700;box-shadow:0 0 20px #c4a300}.with_first_line_container[_ngcontent-%COMP%]{padding:0 2px!important}.withPlay[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%]{width:14px!important}a.active[_ngcontent-%COMP%]:after{content:"";position:absolute;top:18px;left:40%;border:12px solid transparent;border-top-color:#000;transform:rotate(180deg)}.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:anton,sans-serif!important}']})}return e})()},{path:"withdraw-info",component:(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-withdrawinfo"]],decls:47,vars:0,consts:[[1,"aboutUs_main_container"],[1,""],[1,"aboutus_heading_container"],[2,"color","#ffb100"],[1,"container"],[1,"row"],[1,"col-lg-4"],["src","/assets/images//step1w.png","alt","",1,"img-fluid","mb-3","wd-40"],[1,"col-lg-8"],[1,"testimonial-item","mx-auto","mb-5","mb-lg-0"],[2,"color","#ffb100","font-size","14px"],[1,"font-weight-light","mb-0"],["src","/assets/images//step2w.png","alt","",1,"img-fluid","mb-3","wd-40"],["src","/assets/images//step3w.png","alt","",1,"img-fluid","mb-3","wd-40"],["src","/assets/images//step4w.png","alt","",1,"img-fluid","mb-3","wd-40"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4,"How To "),t.TgZ(5,"span",3),t._uU(6,"Withdraw?"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6),t._UZ(10,"img",7),t.qZA(),t.TgZ(11,"div",8)(12,"div",9)(13,"h5",10),t._uU(14,"Step 1:"),t.qZA(),t.TgZ(15,"p",11),t._uU(16,"Login to your kheloo account and click to profile button and click on 'WITHDRAWS'."),t.qZA()()()(),t._UZ(17,"hr"),t.TgZ(18,"div",5)(19,"div",6),t._UZ(20,"img",12),t.qZA(),t.TgZ(21,"div",8)(22,"div",9)(23,"h5",10),t._uU(24,"Step 2:"),t.qZA(),t.TgZ(25,"p",11),t._uU(26,"Enter your bank account details and amount you want to withdraw and click to 'SUBMIT'."),t.qZA()()()(),t._UZ(27,"hr"),t.TgZ(28,"div",5)(29,"div",6),t._UZ(30,"img",13),t.qZA(),t.TgZ(31,"div",8)(32,"div",9)(33,"h5",10),t._uU(34,"Step 3:"),t.qZA(),t.TgZ(35,"p",11),t._uU(36,"Then It's show success message then click to 'OKay'"),t.qZA()()()(),t._UZ(37,"hr"),t.TgZ(38,"div",5)(39,"div",6),t._UZ(40,"img",14),t.qZA(),t.TgZ(41,"div",8)(42,"div",9)(43,"h5",10),t._uU(44,"Step 4:"),t.qZA(),t.TgZ(45,"p",11),t._uU(46," Now select 'Withdrawal Status' tab and check your Withdrawal status. "),t.qZA()()()()()()())},styles:[".aboutUs_main_container[_ngcontent-%COMP%]{text-align:center}.img-fluid[_ngcontent-%COMP%]{width:37%}.testimonial-item[_ngcontent-%COMP%]{text-align:left}"]})}return e})()}];let T=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(A),p.Bz]})}return e})();var q=r(8079);let S=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[_.ez,T,q.m]})}return e})()}}]);