import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './service/common-service.service';
import { UrlService } from './service/url.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { config } from './service/config';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  isSmallScreen!:boolean;
  isUrlPresent!:boolean;
  custom_drawer:string = '';
  private urlSubscription!: Subscription;
  constructor(private commonSer:CommonServiceService,private urlSer:UrlService,private router:ActivatedRoute,private routing:Router,private apiSer:ApiService){}
  ngOnInit(): void {
    this.commonSer.myVariable$.subscribe((width)=>{
      this.isSmallScreen = width === "true";
    });
    
    this.urlSubscription = this.urlSer
      .getIsUrlPresent().
      subscribe((isUrlPresent1) => {
        this.isUrlPresent = isUrlPresent1 === 'true';
      });
       
      this.router.queryParams.subscribe(params => {
        if(params['ref']){
          let refCode = params['ref'];
            this.commonSer.saveData('Ref',refCode);
            let code = {RefId:refCode};
            this.apiSer.apiRequest(config['affiliateTrack'],code).subscribe({
              next: data => {
                this.routing.navigate(['/signup']);      
              },
              error: err => {
                this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
                console.error(err);
              }
            });
        }
      });
      
  }
  recheck(){
    // var Tawk_API:any=Tawk_API||{}, Tawk_LoadStart=new Date();
    // (function(){
    // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    // s1.async=false;
    // s1.src='https://embed.tawk.to/60a22370185beb22b30ddc1d/1f5slks90';
    // s1.charset='UTF-8';
    // s1.setAttribute('crossorigin','*');
    // s0.parentNode?.insertBefore(s1,s0);
    // })();
  }

     visible = false;
  placement: NzDrawerPlacement = 'top';
  open(): void {
    this.custom_drawer = 'custom-drawer';
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.custom_drawer = '';
  }
  callSupport(val:any){
    let param = {type:val}
    this.apiSer.apiRequest(config['supportCallback'],param).subscribe({
      next:(data)=>{
        if(data.ErrorCode == '1'){
          if(val == 'TL'){
            window.open( 'https://t.me/+'+data.Result,'_blank');
          }else{
            window.open(  'https://api.whatsapp.com/send/?phone='+data.Result+'&amp;text&amp;app_absent=0','_blank');
          }
        }else{
          this.apiSer.showAlert('',data.ErrorMessage,'error');
        }
      },
      error:(err)=>{

      }
    })
  }
  // ngOnDestroy(): void {
  //   this.urlSubscription.unsubscribe();
  // }
}
