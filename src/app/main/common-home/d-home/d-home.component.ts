import { Component, OnInit, ElementRef, Renderer2, QueryList, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-d-home',
  templateUrl: './d-home.component.html',
  styleUrl: './d-home.component.css'
})
export class DHomeComponent implements OnInit {
  slidesPerViewn : number = 1;
  searchTerm: string = '';
  allResults: any[] = [];
  filteredResults: { [key: string]: any[] } = {};
  private loaderSubscriber !: Subscription;
  @ViewChildren('showMore') myElementRef!: QueryList<ElementRef<any>>;
  swiper2?: Swiper;
  private apiSubscriber: Subscription[] = [];
  constructor(private apiSer: ApiService, private router: Router, private renderer: Renderer2) { }
  mainCategory: any[] = [];
  subCategory: any[] = [];
  categoryFetch = false;
  gamelist = false;
  showMore: boolean = false;
  isDetailsVisible: boolean[] = [];
  gamesData: { [key: string]: any[] } = {};
  backgamesData: { [key: string]: any[] } = {};
  selected: any = { mainCat: 'AllGames' };
  subSelected: string = '';
  defaultSlices: number[] = [];
  images = [
    '/assets/images/Cashback.png',
    '/assets/images/WELCOME BONUS.png',
    '/assets/images/VIP offers.png',
    '/assets/images/LUCK.png',
  ];

  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.categoryFetch = ('gameCategory' in loading) ? true : false;
      this.gamelist = ('gameList' in loading) ? true : false;
    });
    this.getAllCategory(this.selected);


  }

  gameListAll(item: any) {
    this.subSelected = '';
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
  sortGamesDataByMaxLength(): void {
    const sortedGamesData = Object.keys(this.gamesData).sort((a, b) =>
      this.gamesData[b].length - this.gamesData[a].length
    );
    const sortedGameDataObject: { [key: string]: any[] } = {};
    sortedGamesData.forEach(key => {
      sortedGameDataObject[key] = this.gamesData[key];
    });
    this.gamesData = sortedGameDataObject;
  }

  gameListOne(item: any) {
    this.isDetailsVisible[0] = false;
    this.subSelected = item;
    this.gamesData = {};
    let param = { GameCategory: item };
    this.apiSer.apiRequest(config['gameList'], param)?.pipe(
      catchError((error) => {
        throw error;
      })
    )?.subscribe(data => {
      this.gamesData[item] = data;
      this.filteredResults[item] = data;
    });
    console.log(this.gamesData);
    console.log(item);
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
    this.subCategory = this.subCategory.sort().reverse();
      this.subCategory.forEach((item: { GameCategory: string; }) => {
        this.defaultSlices.push(20);
        this.isDetailsVisible.push(false);
        this.gameListAll(item);

      })
      // this.sortGamesDataByMaxLength();
    });
  }

  gameStart(param: any) {
    this.router.navigate(['/games', param]);
  }
  showMoreF(item: number) {
    console.log(item);
    this.defaultSlices[item] = 20;
    let nativeElement = this.myElementRef.toArray()[item].nativeElement;
    if (nativeElement) {
      if (nativeElement.classList.contains('showMore')) {
        this.renderer.removeClass(nativeElement, 'showMore');
        this.isDetailsVisible[item] = false;
        return;
      }
      this.renderer.addClass(nativeElement, 'showMore');
      this.isDetailsVisible[item] = true;
    }
  }

  onSearch() {
    if (this.searchTerm.trim() !== '') {
      let param = { GameCategory: this.selected }
      for (let item of this.subCategory) {
        const filteredApiResults = this.filteredResults[item].filter(result =>
          result.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.gamesData[item] = filteredApiResults;
      }
    } else {
      this.gamesData = { ...this.filteredResults };
    }
  }

  scrollPrev(item: number) {
    let nativeElement = this.myElementRef.toArray()[item].nativeElement;
    nativeElement.scrollLeft -= 300;
  }
  scrollNext(item: number) {
    let nativeElement = this.myElementRef.toArray()[item].nativeElement;
    nativeElement.scrollLeft += 300;
  }

  updateSlice(item: any) {
    this.defaultSlices[item] += 20;
  }


}
