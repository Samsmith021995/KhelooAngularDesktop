import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrl: './desktop-home.component.css',
})
export class DesktopHomeComponent implements OnInit {
  slidesPerViewn: number = 2;
  images = [];
  gamesData: { [key: string]: any[] } = {};
  backgamesData: { [key: string]: any[] } = {};
  filteredResults: { [key: string]: any[] } = {};
  selected: any = { mainCat: 'AllGames' };
  subSelected: string = '';
  mainCategory: any[] = [];
  subCategory: any[] = [];
  subCategorybc: any[] = [];
  categoryFetch = false;
  defaultSlices: number[] = [];
  isDetailsVisible: boolean[] = [];
  icons: string[] = ['star', 'heart', 'check-circle', 'gift', 'award', 'bell'];
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
  constructor(private comfun: ComFunService,private apiSer:ApiService) { }
  ngOnInit(): void {
    this.bannnerImage();
    this.getAllCategory(this.selected);
  }

  bannnerImage() {
    this.comfun.getCDNData('banner').subscribe({
      next: (res: any) => {
        this.images = res
      },
      error: err => {
        console.error(err);
      }
    })
  }
  clickVal(val: any) {

  }

  onSearch(itemSeach:any){

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
    console.log(this.gamesData);
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
        this.defaultSlices.push(6);
        this.isDetailsVisible.push(false);
        this.gameListAll(item);
      })
    });
  }
  showMoreF(item: number) {
    // let nativeElement = this.myElementRef.toArray()[item].nativeElement;
    // if (nativeElement) {
    //   if (nativeElement.classList.contains('showMore')) {
    //     this.defaultSlices[item] = 4;
    //     this.renderer.removeClass(nativeElement, 'showMore');
    //     this.isDetailsVisible[item] = false;
    //     return;
    //   }
    //   this.defaultSlices[item] += 20;
    //   this.renderer.addClass(nativeElement, 'showMore');
    //   this.isDetailsVisible[item] = true;
    // }
  }
  gameStart(param: any) {
  //   if(!this.isLoggedIn){
  //     this.diaRef3 = this.dialog.open(this.loginPop);
  //     this.diaRef3.afterClosed().subscribe(() => { });
  //     return
  //   }
  //   this.router.navigate(['/games', param]);
  }
  updateSlice(item: number) {
    this.defaultSlices[item] += 20;
  }
}
