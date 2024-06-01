import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError } from 'rxjs';
import {
  NzSkeletonAvatarShape,
  NzSkeletonAvatarSize,
  NzSkeletonButtonShape,
  NzSkeletonButtonSize,
  NzSkeletonInputSize
} from 'ng-zorro-antd/skeleton';
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
  elementSize: NzSkeletonInputSize = 'default';
  buttonShape: NzSkeletonButtonShape = 'default';
  loopArray: number[] = [];
  loopArray1: number[] = [];
  icons: string[] = ['star', 'heart', 'check-circle', 'gift', 'award', 'bell','star', 'heart', 'check-circle', 'gift', 'award', 'bell','star', 'heart', 'check-circle', 'gift', 'award', 'bell','star', 'heart', 'check-circle', 'gift', 'award', 'bell','star', 'heart', 'check-circle', 'gift', 'award', 'bell'];
  constructor(private comfun: ComFunService,private apiSer:ApiService) { }
  gamesProvider = [
    {title:'ezugi',src:this.comfun.cdn+'provider/ezugi.svg'},
    {title:'red tiger',src:this.comfun.cdn+'provider/red-tiger.svg'},
    {title:'smartsoft',src:this.comfun.cdn+'provider/smartsoft.svg'},
    {title:'evolution gaming',src:this.comfun.cdn+'provider/evolution_gaming.svg'},
    {title:'habanero',src:this.comfun.cdn+'provider/habanero.svg'},
    {title:'play\'n go',src:this.comfun.cdn+'provider/playngo.svg'},
    {title:'playtech',src:this.comfun.cdn+'provider/playtech.png'},
    {title:'tvbet',src:this.comfun.cdn+'provider/tvbet.png'},
    {title:'Pragmatic Play',src:this.comfun.cdn+'provider/3oaks.svg'},
    {title:'sexy',src:this.comfun.cdn+'provider/ae-sexy.png'},
    {title:'Betsolutions',src:this.comfun.cdn+'provider/betgames.png'},
    {title:'charismatic',src:this.comfun.cdn+'provider/charismatic.webp'},
    {title:'fantasma games',src:this.comfun.cdn+'provider/fantasma-games.webp'},
    {title:'gamzix',src:this.comfun.cdn+'provider/gamzix.webp'},
    {title:'jili',src:this.comfun.cdn+'provider/jilli.png'},
    {title:'nolimit city',src:this.comfun.cdn+'provider/nolimit-city.svg'},
    {title:'pgsoft',src:this.comfun.cdn+'provider/pgsoft.svg'},
    {title:'quickspin',src:this.comfun.cdn+'provider/quickspin.svg'},
    {title:'Relax Gaming',src:this.comfun.cdn+'provider/relax-gaming.svg'},
    {title:'netent',src:this.comfun.cdn+'provider/netent.svg'},
  ];
  ngOnInit(): void {
    this.bannnerImage();
    this.getAllCategory(this.selected);
    this.loopArray = Array.from({ length: 6 }, (_, i) => i + 1);
    this.loopArray1 = Array.from({ length: 10 }, (_, i) => i + 1);
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
    console.log(item+"<br>");
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
    // console.log(this.gamesData);
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
