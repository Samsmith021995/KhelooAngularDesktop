"use strict";(self.webpackChunkKhelooAngularDesktop=self.webpackChunkKhelooAngularDesktop||[]).push([[850],{7850:(Z,l,r)=>{r.r(l),r.d(l,{MDepositModule:()=>y});var s=r(6814),c=r(4828),a=r(6223),g=r(9301),t=r(9212),_=r(23),m=r(8659),u=r(9101);function b(o,p){1&o&&(t.ynx(0),t._UZ(1,"i-feather",23),t.BQk())}function x(o,p){1&o&&t._uU(0," Pay ")}function f(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"form",13)(2,"div",11)(3,"span",14),t._uU(4,"Amount"),t.qZA(),t.TgZ(5,"div",15)(6,"span",16),t._uU(7,"INR"),t.qZA(),t._UZ(8,"input",17)(9,"i",18),t.qZA(),t.TgZ(10,"button",19),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.setAmount(100))}),t._uU(11,"\u20b9 100"),t.qZA(),t.TgZ(12,"button",19),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.setAmount(2e3))}),t._uU(13,"\u20b9 2000"),t.qZA(),t.TgZ(14,"button",19),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.setAmount(1e4))}),t._uU(15,"\u20b9 10000"),t.qZA(),t.TgZ(16,"button",19),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.setAmount(25e3))}),t._uU(17,"\u20b9 25000"),t.qZA()(),t.TgZ(18,"button",20),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.MrequestDeposit())}),t.YNc(19,b,2,0,"ng-container",21)(20,x,1,0,"ng-template",null,22,t.W1O),t.qZA()()()}if(2&o){const n=t.MAs(21),i=t.oxw();t.xp6(1),t.Q6J("formGroup",i.depositForm),t.xp6(18),t.Q6J("ngIf",i.isLoading)("ngIfElse",n)}}function h(o,p){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"span",24),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.backPage())}),t._UZ(2,"i",25),t._uU(3," Back "),t.qZA(),t.TgZ(4,"div",26),t._UZ(5,"img",27),t.qZA(),t.BQk()}}function M(o,p){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"a",29),t.NdJ("click",function(){const d=t.CHM(n).$implicit,k=t.oxw(2);return t.KtG(k.finalDepositPro(d))}),t.TgZ(2,"div",30)(3,"div",31)(4,"div")(5,"div",32)(6,"div",33)(7,"span",34),t._uU(8),t.qZA()(),t.TgZ(9,"div",35)(10,"p",36)(11,"span",34),t._uU(12),t.qZA()(),t.TgZ(13,"p",37),t._uU(14),t.qZA()(),t.TgZ(15,"div",38),t._UZ(16,"img",39),t.qZA()()()()()(),t.BQk()}if(2&o){const n=p.$implicit;t.xp6(8),t.hij(" ",n.Tag,""),t.xp6(4),t.Oqu(n.Title),t.xp6(2),t.Oqu(n.SubTitle),t.xp6(2),t.MGl("src","/assets",n.ImageUrl,"",t.LSH)}}function C(o,p){if(1&o&&t.YNc(0,M,17,4,"ng-container",28),2&o){const n=t.oxw();t.Q6J("ngForOf",n.paymentGateway)}}function P(o,p){1&o&&t._UZ(0,"app-loader")}const O=[{path:"",component:(()=>{class o{constructor(n,i,e){this.fb=n,this.apiSer=i,this.router=e,this.showsubmitbtn=!1,this.paymentGateway=[],this.paymentinput=!0,this.isLoading=!1,this.apiSubscriber=[],this.mainAmount=""}ngOnInit(){this.router.params.subscribe(n=>{this.mainAmount=n.amount}),this.loaderSubscriber=this.apiSer.loaderService.loading$.subscribe((n={})=>{this.isLoading="depositReq1"in n}),this.depositForm=this.fb.group({Amount:[this.mainAmount,[a.kI.required]]})}MrequestDeposit(){this.showsubmitbtn=!0,this.paymentinput=!1,this.apiSer.apiRequest(g.v.getPaymentGateway).subscribe({next:n=>{n&&(this.paymentGateway=n,this.showsubmitbtn=!1)},error:n=>{this.apiSer.showAlert("Something Went Wrong","Please check your Internet Connection","error"),this.showsubmitbtn=!1}})}finalDepositPro(n){this.showsubmitbtn=!0,this.apiSer.apiRequest(g.v.depositReq1,{Amount:this.depositForm.controls.Amount.value,SiteName:n.SiteName}).subscribe({next:e=>{if("1"==e.ErrorCode){let d=e.Result.split("=");this.transcationId=d[1],this.paymentinput=!1,window.location.href=n.PaymentUrl+this.transcationId}else this.apiSer.showAlert(e.ErrorMessage,"","error");this.paymenting=e,this.showsubmitbtn=!1},error:e=>{this.showsubmitbtn=!1,this.apiSer.showAlert("Something Went Wrong","Please check your internet connection","error")}})}setAmount(n){this.depositForm.controls.Amount.setValue(n)}backPage(){this.paymentGateway=[],this.paymentinput=!0}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(a.qu),t.Y36(_.s),t.Y36(c.gz))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-m-deposit"]],decls:19,vars:4,consts:[[1,"deposit_container"],[1,"dep_bal_main_cont"],[1,"dep_bal_container"],[1,"wallet_container"],["src","/assets/images/wallet.png"],[1,"deposit_bal_container"],[1,"dep_bal_content"],[1,"dep_bal_text"],[1,"dep_bal_withdraw"],["href","/m-withdraw"],[1,"dep_amt_add_main_container"],[1,"dep_form_elem_container"],[4,"ngIf"],["action","",3,"formGroup"],[1,"pay_title"],[1,"input-group","dep_input_container"],[1,"input-group-addon"],["id","msg","type","number","name","msg","placeholder","0.00","formControlName","Amount",1,"form-control"],[1,"fa-solid","fa-pen-to-square"],["type","button",1,"btn",3,"click"],[1,"b-core-ui-select",2,"width","100%","margin","auto",3,"click"],[4,"ngIf","ngIfElse"],["content",""],["name","loader"],[1,"back",3,"click"],["aria-hidden","true",1,"fa","fa-arrow-left"],[1,"banner"],["src","/assets/images/deposit-banner-new.png"],[4,"ngFor","ngForOf"],[3,"click"],[1,"bl_promotion_list_main_container"],[1,"bl_promotion_list_container"],[1,"bl_ind_promotion_container","box"],[1,"ribbon","ribbon-top-left"],[1,"ng-binding"],[1,"bl_ind_prom_content_container"],[1,"bl_prom_title_container"],[1,"bl_prom_heading",2,"color","#fff !important"],[1,"bl_ind_img_container"],["alt","","width","100","height","52",1,"bl_prom_image",3,"src"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7),t._uU(8," My Balance "),t.qZA()(),t.TgZ(9,"div",8)(10,"a",9),t._uU(11," Withdraw "),t.qZA()()()()(),t.TgZ(12,"div",10),t._UZ(13,"div",11),t.YNc(14,f,22,3,"div",12),t.TgZ(15,"div"),t.YNc(16,h,6,0,"ng-container",12)(17,C,1,1,"ng-container"),t.qZA(),t.YNc(18,P,1,0,"app-loader",12),t.qZA()()),2&i&&(t.xp6(14),t.Q6J("ngIf",e.paymentinput),t.xp6(2),t.Q6J("ngIf",e.paymentGateway.length>0),t.xp6(1),t.um2(17,e.showsubmitbtn?-1:17),t.xp6(1),t.Q6J("ngIf",e.showsubmitbtn))},dependencies:[s.sg,s.O5,m.R,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,u.u],styles:['.deposit_container[_ngcontent-%COMP%]{background:#000;margin-top:60px;min-height:90vh}.dep_bal_main_cont[_ngcontent-%COMP%]{position:relative;background-color:#fff}.dep_bal_container[_ngcontent-%COMP%]{position:relative;display:flex;padding-left:15px;min-height:.88rem;background-color:#1c0048;vertical-align:middle;overflow:hidden;transition:background-color .2s;align-items:center}.wallet_container[_ngcontent-%COMP%]{margin-right:12px}.wallet_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;vertical-align:middle}.deposit_bal_container[_ngcontent-%COMP%]{position:relative;display:flex;flex:1 1;align-self:stretch;padding-right:12px;overflow:hidden;align-items:center}.dep_bal_content[_ngcontent-%COMP%]{flex:1 1;color:#f4ad09;font-size:15px;line-height:1.5;text-align:left;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:6px;padding-bottom:6px}.dep_bal_text[_ngcontent-%COMP%]{color:#fff;font-size:13px;line-height:1.5;margin-top:5px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dep_bal_withdraw[_ngcontent-%COMP%]{flex-basis:36%;color:#888;font-size:14px;line-height:1.5;text-align:right;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:6px;padding-bottom:6px}.dep_bal_withdraw[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;height:24px;line-height:24px;padding:0 12px;color:#f4ad09;background-color:transparent;border:1px solid #f4ad09;border-radius:5px;display:inline-block}.custom-select-wrapper[_ngcontent-%COMP%]{position:relative;-webkit-user-select:none;user-select:none}.custom-select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{display:none}.custom-select[_ngcontent-%COMP%]{position:relative}.custom-select-trigger[_ngcontent-%COMP%]{position:relative;display:block;font-size:15px;color:#f4ad09;line-height:40px;background:#1d0048;border-radius:8px;cursor:pointer;padding:0 15px;border:2px solid #f4ad09}.custom-select-trigger[_ngcontent-%COMP%]:after{position:absolute;display:block;content:"";width:10px;height:10px;top:50%;right:25px;margin-top:-3px;border-bottom:1px solid #f4ad09;border-right:1px solid #f4ad09;transform:rotate(45deg) translateY(-50%);transition:all .4s ease-in-out;transform-origin:50% 0}.custom-select.opened[_ngcontent-%COMP%]   .custom-select-trigger[_ngcontent-%COMP%]:after{margin-top:3px;transform:rotate(-135deg) translateY(-50%)}.custom-options[_ngcontent-%COMP%]{position:absolute;display:none;top:100%;left:0;right:0;min-width:100%;border:2px solid #f4ad09;border-top:0;border-radius:0 0 8px 8px;box-sizing:border-box;box-shadow:0 2px 1px #00000012;background:#1e0048;transition:all .4s ease-in-out;opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-15px)}.custom-select.opened[_ngcontent-%COMP%]   .custom-options[_ngcontent-%COMP%]{opacity:1;visibility:visible;pointer-events:all;display:block;transform:translateY(0);z-index:9}.custom-options[_ngcontent-%COMP%]:before{position:absolute;display:none;content:"";bottom:100%;right:25px;width:7px;height:7px;margin-bottom:-4px;border-top:1px solid #b5b5b5;border-left:1px solid #b5b5b5;background:#fff;transform:rotate(45deg);transition:all .4s ease-in-out}.option-hover[_ngcontent-%COMP%]:before{background:#f9f9f9}.custom-option[_ngcontent-%COMP%]{position:relative;display:block;padding:0 22px;border-top:1px solid #f4ad09;font-size:14px;color:#f4ad09;line-height:47px;cursor:pointer;transition:all .4s ease-in-out}.custom-option[_ngcontent-%COMP%]:first-of-type{border-top:0}.custom-option[_ngcontent-%COMP%]:last-of-type{border-bottom:0;border-radius:0 0 4px 4px}.dep_amt_add_main_container[_ngcontent-%COMP%]{padding:0 15px}.custom-select.sources.opened[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.pay_title[_ngcontent-%COMP%]{display:block;color:#fff;padding-bottom:15px}.dep_form_elem_container[_ngcontent-%COMP%]{margin:20px 0}.input-group.dep_input_container[_ngcontent-%COMP%]{background:#1e0048;border-radius:8px;flex-wrap:nowrap!important}.dep_inout_container[_ngcontent-%COMP%]   span.input-group-addon[_ngcontent-%COMP%]{background-color:#f4ad09}.dep_input_container[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #f4ad09;color:#f4ad09;font-size:12px;font-weight:700;border-right:0;border-radius:8px 0 0 8px;padding:5px}.dep_input_container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background:0 0;border:2px solid #f4ad09;width:100%;height:40px;max-width:none;color:#f4ad09}.dep_btn_container[_ngcontent-%COMP%]   .loginBtn[_ngcontent-%COMP%]{border:1px solid #f4ad09;background:#f4ad09;color:#1e0048;padding:5px 25px;border-radius:8px;font-weight:700}.dep_btn_container[_ngcontent-%COMP%]{text-align:center;margin-top:40px}.dep_input_container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-top-right-radius:8px;border-bottom-right-radius:8px}.accordion-container[_ngcontent-%COMP%]{position:relative;max-width:500px;height:auto;margin:10px auto}.accordion-container[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-bottom:20px;padding-bottom:15px;border-bottom:1px solid #ddd}.set[_ngcontent-%COMP%]{position:relative;width:100%;height:auto;background-color:#f5f5f5;border-radius:10px}.set[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;padding:15px;text-decoration:none;font-size:22px;color:#555;font-weight:600;transition:all .2s linear;margin-bottom:5px}.set[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:19%;border-radius:50%;border:2px solid #ddd}.set[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:20px}.set[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{background-color:#452275;color:#fff;border-radius:10px 10px 0 0}.content[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #ddd;display:none;padding:0 0 20px;margin-bottom:5px;border-radius:0 0 10px 10px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:10px 15px;margin:0;color:#333}.promo-code-input[_ngcontent-%COMP%]{display:block;border:2px solid #ddd;width:94%;margin:10px;padding:10px}.brdrgreen[_ngcontent-%COMP%]{border:2px solid #08860f}.b-core-ui-select[_ngcontent-%COMP%]{background:#f4ad09;color:#000;padding:12px 21px;margin:0 10px;border:none;width:94%;border-radius:10px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{max-width:none}.payment_upicopy_content[_ngcontent-%COMP%]{padding:25px 10px}.payment_upicopy_content1[_ngcontent-%COMP%]{border:1px solid #eee;padding:10px}p.help-text.text-lg-right1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], p.help-text.text-lg-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], span.copy_text_id[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right}.rd-border[_ngcontent-%COMP%]{border:1px solid red}p.help-text.text-lg-right1[_ngcontent-%COMP%]{padding:0 6px 32px;margin:0;color:#333}select#Bank[_ngcontent-%COMP%]{padding:10px 7px;width:99%;margin:0 2px}h3.coming_soon[_ngcontent-%COMP%]{padding:0 20px;color:#452275}.pd-20[_ngcontent-%COMP%]{padding:0 20px}button.btn[_ngcontent-%COMP%]{border-radius:25px;margin:20px 2px;font-size:13px;background:#f4ad09;padding:4px 17px;border:1px solid #f4ad09;cursor:pointer}.btn[_ngcontent-%COMP%]{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled){padding-bottom:5px}.bl_promotion_list_container[_ngcontent-%COMP%]{padding:15px 10px 10px}.bl_ind_promotion_container[_ngcontent-%COMP%]{display:flex;padding:15px;margin-bottom:20px;border:1px solid #f4ad09;border-radius:5px;align-items:center;justify-content:space-between;height:100px}.bl_ind_promotion_container[_ngcontent-%COMP%]{animation:fadein 2s}ribbon.ribbon-top-left[_ngcontent-%COMP%]{position:relative}p.bl_prom_title_container[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:20px!important;margin:13px 0}p.bl_prom_title_container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;color:#fff}.bl_ind_prom_content_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.bl_ind_img_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness()}body[_ngcontent-%COMP%]{background:#000}.ribbon.ribbon-top-left[_ngcontent-%COMP%]{position:relative}.ribbon.ribbon-top-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block;width:135px;left:-8px;top:-58px;border-radius:35px;border:.5px solid #f4ad09;padding:0;background-color:#1c0048;box-shadow:0 5px 10px #0000001a;color:#fccd09;text-shadow:0 1px 1px rgb(0 0 0 / 20%);text-align:center}.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.banner[_ngcontent-%COMP%]{margin-top:7px}[_ngcontent-%COMP%]:not(.btn-check) + .btn[_ngcontent-%COMP%]:active{color:#000;background:#f4ad09;padding:4px 17px;border:1px solid #f4ad09}span.back[_ngcontent-%COMP%]{color:#fff}']})}return o})()}];let w=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(O),c.Bz]})}return o})();var v=r(8079);let y=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#n=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[s.ez,w,v.m]})}return o})()}}]);