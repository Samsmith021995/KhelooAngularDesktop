import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzSkeletonButtonShape, NzSkeletonButtonSize, NzSkeletonInputSize } from 'ng-zorro-antd/skeleton';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-statement-pop',
  templateUrl: './statement-pop.component.html',
  styleUrl: './statement-pop.component.css'
})
export class StatementPopComponent implements OnInit {
  buttonActive = false;
  avatarActive = false;
  inputActive = false;
  imageActive = false;
  buttonSize: NzSkeletonButtonSize = 'default';
  elementActive = false;
  buttonShape: NzSkeletonButtonShape = 'default';


  elementSize: NzSkeletonInputSize = 'default';


  isLoading: boolean = false;
  details: any = [];
   ttl: number = 0;
   ttlpage: number = 0;
   datacount: number = 10;
   pagecnt: number[] = [];
   paginatorBlock: any = [];
   selectedOption: any;
   showspinner: boolean = false;
   pages = {
     "PageNumber": 1,
     "RecordCount": 100
   }; 
  constructor(private apiservice:ApiService,private router:Router){}
  ngOnInit(): void {
    this.getall();
  }
  getall() {
    this.apiservice.apiRequest(config['fetchStatement'], this.pages).pipe(catchError((error) => {
      throw error;
    })).subscribe((data) => {
      if (data.ErrorCode == '0') {
        this.apiservice.showAlert('', data.ErrorMessage, 'error');
        this.apiservice.logout();
        this.router.navigate(['/']);
        return;
      }
      if (data) {
        console.log(data);
        this.details = data;
        this.ttl = data?.[0]?.TotalCount || 0;
      }
    });
  }
}
