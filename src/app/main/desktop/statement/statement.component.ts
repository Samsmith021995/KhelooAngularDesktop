import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription, catchError  } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css'
})
export class StatementComponent implements OnInit {
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  isLoading:boolean=false;
  details :any = 0 ;
  ttl :number = 0;
  ttlpage :number = 0;
  datacount :number = 10;
  pagecnt :number []= [];
  paginatorBlock:any=[];
  selectedOption:any;
  showspinner :boolean = false;
pages = {
    "PageNumber": 1,
    "RecordCount": 10
  };
  constructor(private apiservice:ApiService,private router:Router){

  }

ngOnInit(): void {
  this.loaderSubscriber = this.apiservice.loaderService.loading$.subscribe((loading: any = {}) => {
    this.isLoading = ('fetchStatement' in loading) ? true : false;
  });
  this.getall();
}

getall(){
  // this.apiservice.loaderShow();
 this.apiservice.apiRequest(config['fetchStatement'], this.pages).pipe(catchError((error)=>{
  throw error;
 })).subscribe((data)=>{
  if(data.ErrorCode == '0'){
    this.apiservice.showAlert('',data.ErrorMessage,'error');
    this.router.navigate(['/']);
    return;
  }
   if(data){
        this.details = data;
        this.ttl = data[0].TotalCount?data[0].TotalCount:0;
        this.ttlpage = Math.ceil(this.ttl/this.pages.RecordCount);
          this.setPaginator();

      }
        // this.apiservice.loaderHide();
      }
  );
}

  setPaginator()
  {
    this.paginatorBlock = [];
    if (this.pages.PageNumber <= 4) {
      for (let i = 1; i <= 10 && i <= this.ttlpage; i++) {
        this.paginatorBlock.push(i);
      }
    }
    else {
      for (let i = this.pages.PageNumber - 3; i <= this.pages.PageNumber + 6 && i <= this.ttlpage; i++) {
        this.paginatorBlock.push(i);
      }
    }
   
  }
  
  onPaginatorChange(paginatorQuery:any)
  {
    this.pages.PageNumber = paginatorQuery;

    let selectedValue = (event?.target as HTMLSelectElement).value;
    this.selectedOption = selectedValue;

    if(paginatorQuery.action=='pagesize'){
      this.pages.PageNumber = 1;
      this.pages.RecordCount = this.selectedOption;
    }
    else if(paginatorQuery.action=='pagechange'){
      this.pages.PageNumber = paginatorQuery.pageno;
    }
    this.getall();
  }
}
