import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './service/common-service.service';
import { UrlService } from './service/url.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { config } from './service/config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  isSmallScreen!:boolean;
  isUrlPresent!:boolean;
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
  // ngOnDestroy(): void {
  //   this.urlSubscription.unsubscribe();
  // }
}
