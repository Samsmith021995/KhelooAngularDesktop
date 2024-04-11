import { Component,OnInit, Renderer2, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Subscription, catchError } from 'rxjs';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../service/common-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrl: './m-home.component.css'
})
export class MHomeComponent implements OnInit {
  slidesPerViewn:number = 1;
  images = [
    {src:'/assets/images/edibanner.jpeg'},
    {src:'/assets/images/lassback25.png'},
    {src:'/assets/images/checkban.png'},
    {src:'/assets/images/extracashbackbanner5.png'},
    {src:'/assets/images/promo7.png'},
    {src:'/assets/images/bonus300banner.png'},
    {src:'/assets/images/ezugi.png'},
    // '/assets/images/10minwith.png',
    // '/assets/images/Banner11.jpeg',
    // '/assets/images/Banner18.jpeg',
    // '/assets/images/Dil-se-kheloo_375x250.jpeg'
  ];

  gamesProvider = [
    {title:'ezugi',src:'/assets/provider/ezugi.svg'},
    {title:'red tiger',src:'/assets/provider/red-tiger.svg'},
    {title:'smartsoft',src:'/assets/provider/smartsoft.svg'},
    {title:'evolution gaming',src:'/assets/provider/evolution_gaming.svg'},
    {title:'habanero',src:'/assets/provider/habanero.svg'},
    {title:'play\'n go',src:'/assets/provider/playngo.svg'},
    {title:'playtech',src:'/assets/provider/playtech.png'},
    {title:'tvbet',src:'/assets/provider/tvbet.png'},
    {title:'Pragmatic Play',src:'/assets/provider/3oaks.svg'},
    {title:'sexy',src:'/assets/provider/ae-sexy.png'},
    {title:'Betsolutions',src:'/assets/provider/betgames.png'},
    {title:'charismatic',src:'/assets/provider/charismatic.webp'},
    {title:'fantasma games',src:'/assets/provider/fantasma-games.webp'},
    {title:'gamzix',src:'/assets/provider/gamzix.webp'},
    {title:'jili',src:'/assets/provider/jilli.png'},
    {title:'nolimit city',src:'/assets/provider/nolimit-city.svg'},
    {title:'pgsoft',src:'/assets/provider/pgsoft.svg'},
    {title:'quickspin',src:'/assets/provider/quickspin.svg'},
    {title:'Relax Gaming',src:'/assets/provider/relax-gaming.svg'},
    {title:'netent',src:'/assets/provider/netent.svg'},
  ];
  // images = [
  //   {src:'/assets/images/10minwith.png'},
  //   {src:'/assets/images/Banner11.jpeg'},
  //   {src:'/assets/images/Banner18.jpeg'},
  //   {src:'/assets/images/Dil-se-kheloo_375x250.jpeg'}
  // ];
  
  mainCategory: any[] = [];
  subCategory: any[] = [];
  subCategorybc: any[] = [];
  categoryFetch = false;
  gamelist = false;
  showMore: boolean = false;
  gamesData: { [key: string]: any[] } = {};
  backgamesData: { [key: string]: any[] } = {};
  selected: any = { mainCat: 'AllGames' };
  subSelected: string = '';
  defaultSlices: number[] = [];
  searchTerm: string = '';
  allResults: any[] = [];
  isDetailsVisible: boolean[] = [];
  filteredResults: { [key: string]: any[] } = {};
  private loaderSubscriber !: Subscription;
  isLoggedIn: boolean = false;
  private isLoggedInSubscription!: Subscription;
  
  @ViewChild('loginPop') loginPop!: TemplateRef<any>;
 
  diaRef3: any;
  isPromo:boolean = false;
  constructor(private dialog: MatDialog,private apiSer: ApiService, private renderer: Renderer2, private router: Router, private cdr: ChangeDetectorRef,private comSer:CommonServiceService,private urlSer:UrlService,private elementRef: ElementRef) { 
 

  }

  @ViewChildren('showMore') myElementRef!: QueryList<ElementRef<any>>;
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.categoryFetch = ('gameCategory' in loading) ? true : false;
      this.gamelist = ('gameList' in loading) ? true : false;
    });
    this.getAllCategory(this.selected);
    this.comSer.search$.subscribe((search: any) => {
      setTimeout(() => {
        this.scrollToElement('scrollToElement');
      }, 100);
      this.onSearch(search);
    });
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.apiSer.ispromoPage$.subscribe((value)=>{
      this.isPromo = value ===true;
      setTimeout(() => {
        this.scrollToElement('promo');
      }, 100);
      // window.scrollTo({
      //   top: 1000,
      //   left: 0,
      //   behavior: 'smooth'
      // });
    });
  }

  scrollToElement(param:any): void {
    const element = this.elementRef.nativeElement.querySelector('#'+param);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }
  gameListAll(item: any) {
    let param = { GameCategory: item };
    this.apiSer.apiRequest(config['gameList'], param).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      if (data) {
        this.gamesData[item] = data;
        this.filteredResults[item] = data;
      }
    });
  }

  gameListOne(item: any) {
    this.subSelected = item;
    this.gamesData = {};
    let param = { GameCategory: item };
    this.apiSer.apiRequest(config['gameList'], param).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      this.gamesData[item] = data;
      this.filteredResults[item] = data;
    });
  }
  getAllCategory(cat?: any) {
    this.apiSer.apiRequest(config['gameCategory']).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      let categorySet = new Set<string>();
      let subCategorySet = new Set<string>();
      categorySet.add('AllGames')
      data.forEach((item: { GameCategory: string, SubCategory: string }) => {
        categorySet.add(item.GameCategory);
        if (cat.mainCat == item.GameCategory) {
          subCategorySet.add(item.SubCategory);
        }
        if (cat.mainCat == 'AllGames') {
          subCategorySet.add(item.SubCategory);
        }
      });
      this.selected = cat.mainCat;
      this.mainCategory = Array.from(categorySet);
      this.subCategory = Array.from(subCategorySet);
      this.subCategorybc = Array.from(subCategorySet);
      this.subCategory.forEach((item: { GameCategory: string; }) => {
        this.defaultSlices.push(4);
        this.isDetailsVisible.push(false);
        this.gameListAll(item);
      })
    });
  }

  gameStart(param: any) {
    if(!this.isLoggedIn){
      this.diaRef3 = this.dialog.open(this.loginPop);
      this.diaRef3.afterClosed().subscribe(() => { });
      return
    }
    this.router.navigate(['/games', param]);
  }
  showMoreF(item: number) {
    let nativeElement = this.myElementRef.toArray()[item].nativeElement;
    if (nativeElement) {
      if (nativeElement.classList.contains('showMore')) {
        this.defaultSlices[item] = 4;
        this.renderer.removeClass(nativeElement, 'showMore');
        this.isDetailsVisible[item] = false;
        return;
      }
      this.defaultSlices[item] += 20;
      this.renderer.addClass(nativeElement, 'showMore');
      this.isDetailsVisible[item] = true;
    }
  }

  onSearch(itemSeach:any) {
    this.apiSer.updatePromotion(false);
    if (itemSeach.trim() !== '') {
      let param = { GameCategory: this.selected }
      for (let item of this.subCategorybc) {
          const filteredApiResultsed = this.filteredResults[item]?.filter(result =>
            (result.name.toLowerCase().includes(itemSeach.toLowerCase())) || 
            (result.groupname && result.groupname.toLowerCase().includes(itemSeach.toLowerCase())) || 
            (result.gamecategory && result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase() )) ||
            (result.product && result.product.toLowerCase().includes(itemSeach.toLowerCase() ))
            );
              this.gamesData[item] = filteredApiResultsed;
      }
      this.subCategory = this.subCategorybc.filter(item => this.gamesData[item]?.length > 0);
     
    } else {
      this.gamesData = { ...this.filteredResults };
    }
   
    // window.scrollTo({
    //   top: 1000,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }
  searching(){
    this.onSearch(this.searchTerm);
  }
  updateSlice(item: number) {
    this.defaultSlices[item] += 20;
  }
closeDial2(){
  this.diaRef3.close();
}
  clickVal(val:any){
    this.promotins();
  }
  promotins(){
    this.apiSer.setShowMenu(false);
    this.apiSer.updatePromotion(true);
  }
  checklogin(){
    this.apiSer.updateLoginStatus(true);
  }
}
