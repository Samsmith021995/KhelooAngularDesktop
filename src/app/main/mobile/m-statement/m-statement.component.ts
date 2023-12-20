import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Subscription, catchError } from 'rxjs';
import { config } from '../../service/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-statement',
  templateUrl: './m-statement.component.html',
  styleUrl: './m-statement.component.css'
})
export class MStatementComponent implements OnInit {
  @ViewChildren('description') myElementRef !: QueryList<ElementRef<any>>;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  isLoading: boolean = false;
  details: any = 0;
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
  constructor(private apiservice: ApiService, private router: Router, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.loaderSubscriber = this.apiservice.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('fetchStatement' in loading) ? true : false;
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
        this.ttl = data[0].TotalCount ? data[0].TotalCount : 0;
      }
    });
  }
  CallMore() {
    this.pages.RecordCount += 10;
    this.getall();

  }

  showDescription(item: any) {
    let nativeElement = this.myElementRef.toArray()[item].nativeElement;
    if (nativeElement) {
      if (nativeElement.classList.contains('showMore')) {
        this.renderer.removeClass(nativeElement, 'showMore');
        return;
      }
      this.renderer.addClass(nativeElement, 'showMore');
    }
  }
}
