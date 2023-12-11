import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError ,Subscription} from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {
  userDetails:any;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  isLoading:boolean = false;
  constructor( private apiSer:ApiService){}
ngOnInit(): void {
  this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
    this.isLoading = ('getUserProfile' in loading) ? true : false;
  });
  this.getUserDetails();
}
getUserDetails(){
  this.apiSer.apiRequest(config['getUserProfile']).pipe(catchError((Error)=>{
    throw Error;
  })).subscribe((data)=>{ 
    this.userDetails = data;
  });
}
}
