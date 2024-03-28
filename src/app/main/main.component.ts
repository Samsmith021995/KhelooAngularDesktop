import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './service/common-service.service';
import { UrlService } from './service/url.service';
import { Subscription, catchError } from 'rxjs';
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
            let code = {Ref:params['ref']};
            this.apiSer.apiRequest(config['affiliate'], code).pipe(
              catchError((error) => {
                this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
                console.error('An error occurred:', error);
                throw error
              })
            ).subscribe(
              data => {
                // if (data.ErrorCode != '1') {
                //   this.apiSer.showAlert(data.ErrorMessage, '', 'error');
                //   return;
                // }
                this.routing.navigate(['/signup']);      
                // this.formDetails = true;
              });
            // if(this.isSmallScreen){
            //   this.routing.navigate(['/signup']);      
            // }else{
            //   this.routing.navigate(['/register']);
            // }
        }
      });
  }
  // ngOnDestroy(): void {
  //   this.urlSubscription.unsubscribe();
  // }
}
