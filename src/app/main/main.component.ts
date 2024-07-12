import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonServiceService } from './service/common-service.service';
import { UrlService } from './service/url.service';
import { Subscription, debounceTime, filter, map } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from './service/api.service';
import { config } from './service/config';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { ComFunService } from './service/com-fun.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement') inputElement!: ElementRef;
  searchGames: any[] = [];
  isSmallScreen!: boolean;
  isUrlPresent!: boolean;
  iconOpen: boolean = false;
  chatOp: boolean = false;
  custom_drawer: string = '';
  visible = false;
  searchForm!: FormGroup;
  loopArray: number[] = [];
  private urlSubscription!: Subscription;
  elementActive: boolean = true;
  startLoading: boolean = false;
  breadcrumbs: Array<{ label: string, url: string }> = [];
  private routerSubscription!: Subscription;
  constructor(private commonSer: CommonServiceService, private urlSer: UrlService, private router: ActivatedRoute, private routing: Router, private apiSer: ApiService, private comFun: ComFunService, private fb: FormBuilder, private routers: Router, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.routerSubscription = this.routers.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.comFun.closeDrawer();
      });
    this.searchForm = this.fb.group({
      search: [""],
    });
    this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
    this.searchForm.controls['search'].valueChanges.pipe(
      debounceTime(3000)
    ).subscribe((data) => {
      if (data.length > 0) {
        this.comFun.filterGames(data)?.subscribe(filteredGames => {
          this.searchGames = [...filteredGames];
          debounceTime(3000);
          this.startLoading = false;
        });
      } else {
        this.searchGames = [];
      }
    });
    this.commonSer.myVariable$.subscribe((width) => {
      this.isSmallScreen = width === "true";
    });
    this.comFun.drawerVisible$.subscribe(visible => {
      this.visible = visible;
      if (this.visible) {
        setTimeout(() => {
          this.inputElement.nativeElement.focus();
        });
      }

    });
    this.urlSubscription = this.urlSer
      .getIsUrlPresent().
      subscribe((isUrlPresent1) => {
        this.isUrlPresent = isUrlPresent1 === 'true';
      });

    this.router.queryParams.subscribe(params => {
      if (params['ref']) {
        let refCode = params['ref'];
        this.commonSer.saveData('Ref', refCode);
        let code = { RefId: refCode };
        this.apiSer.apiRequest(config['affiliateTrack'], code).subscribe({
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
    this.routing.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.router.root))
    ).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
    this.breadcrumbs = this.buildBreadcrumbs(this.router.root);

  }
  searchIn() {
    this.startLoading = true;
  }
  gameStart(param: any) {
    this.comFun.checkLoginRedirect(param);
  }
  placement: NzDrawerPlacement = 'top';
  open(): void {
    this.custom_drawer = 'custom-drawer';
    this.comFun.openDrawer();
  }

  ChatBoxOpen() {
    this.chatOp = !this.chatOp;
  }
  LiveChatOpen() {
    this.iconOpen = !this.iconOpen;
    this.chatOp = false;
  }

  close(): void {
    this.comFun.closeDrawer();
    this.custom_drawer = '';
  }
  
  callSupport(val: any) {
    let param = { type: val }
    this.apiSer.apiRequest(config['supportCallback'], param).subscribe({
      next: (data) => {
        if (data.ErrorCode == '1') {
          if (val == 'TL') {
            window.open('https://t.me/+' + data.Result, '_blank');
          } else {
            window.open('https://api.whatsapp.com/send/?phone=' + data.Result + '&amp;text&amp;app_absent=0', '_blank');
          }
        } else {
          this.apiSer.showAlert('', data.ErrorMessage, 'error');
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    const child = children[0];
    const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }
    if (child.snapshot.data['breadcrumb']) {
      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url });
    }
    return this.buildBreadcrumbs(child, url, breadcrumbs);
  }

  ngAfterViewInit() {
    if (this.visible) {
      setTimeout(() => {
        this.inputElement.nativeElement.focus();
      });
    }
  }

}
