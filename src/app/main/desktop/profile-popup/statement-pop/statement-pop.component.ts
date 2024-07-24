import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzSkeletonButtonShape, NzSkeletonButtonSize, NzSkeletonInputSize } from 'ng-zorro-antd/skeleton';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-statement-pop',
  templateUrl: './statement-pop.component.html',
  styleUrl: './statement-pop.component.css'
})
export class StatementPopComponent implements OnInit {
  @ViewChild('loadMoreTrigger') loadMoreTrigger!: ElementRef;
  buttonActive = false;
  avatarActive = false;
  inputActive = false;
  imageActive = false;
  buttonSize: NzSkeletonButtonSize = 'default';
  elementActive = false;
  buttonShape: NzSkeletonButtonShape = 'default';


  elementSize: NzSkeletonInputSize = 'default';

  items: any[] = [];
  observer: IntersectionObserver | null = null;
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
    "RecordCount": 10
  };
  private loaderSubscriber !: Subscription;
  constructor(private apiservice: ApiService, private router: Router,private comFun:ComFunService) { }
  cdn = this.comFun.cdn;
  ngOnInit(): void {
    this.loaderSubscriber = this.apiservice.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('fetchStatement' in loading) ? true : false;
      // this.isStatusLoading = ('withdrawState' in loading) ? true : false;
    });
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
        this.details = data;
        this.ttl = data?.[0]?.TotalCount || 0;
      }
    });
  }


  loadData() {
    if (this.isLoading) return;
    this.isLoading = true;
    setTimeout(() => {
      this.pages.PageNumber = this.pages.PageNumber + 1;
      this.moredata();
      this.isLoading = false;
    }, 1000);
  }

  @HostListener('scroll', ['$event'])
  onPage(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight && this.details.length < this.ttl) {
      this.loadData();
    }
  }

  moredata() {
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
        data.forEach((item: any) => {
          this.details.push(item);
        });
      }
    });
  }
}
