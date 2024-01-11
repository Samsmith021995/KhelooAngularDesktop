import { Component, Inject, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Subscription, catchError } from 'rxjs';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../service/common-service.service';

@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrl: './m-home.component.css'
})
export class MHomeComponent implements OnInit {
  slidesPerViewn:number = 1;
  images = [
    '/assets/images/10minwith.png',
    '/assets/images/Banner11.jpeg',
    '/assets/images/Banner18.jpeg',
    '/assets/images/Dil-se-kheloo_375x250.jpeg',
    // '/assets/images/10minwith.png',
    // '/assets/images/Banner11.jpeg',
    // '/assets/images/Banner18.jpeg',
    // '/assets/images/Dil-se-kheloo_375x250.jpeg',
    // '/assets/images/10minwith.png',
    // '/assets/images/Banner11.jpeg',
    // '/assets/images/Banner18.jpeg',
    // '/assets/images/Dil-se-kheloo_375x250.jpeg',

  ];
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
  constructor(private apiSer: ApiService, private renderer: Renderer2, private router: Router, private cdr: ChangeDetectorRef,private comSer:CommonServiceService) { }
  @ViewChildren('showMore') myElementRef!: QueryList<ElementRef<any>>;
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.categoryFetch = ('gameCategory' in loading) ? true : false;
      this.gamelist = ('gameList' in loading) ? true : false;
    });
    this.getAllCategory(this.selected);
    this.comSer.search$.subscribe((search: any) => {
      this.onSearch(search);
    });
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
      // this.cdr.detectChanges();

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
    if (itemSeach.trim() !== '') {
      let param = { GameCategory: this.selected }
      for (let item of this.subCategorybc) {
          const filteredApiResultsed = this.filteredResults[item].filter(result =>
            result.name.toLowerCase().includes(itemSeach.toLowerCase()) || 
            result.groupname.toLowerCase().includes(itemSeach.toLowerCase()) || 
            result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase())
            );
              this.gamesData[item] = filteredApiResultsed;
      }
      this.subCategory = this.subCategorybc.filter(item => this.gamesData[item]?.length > 0);
     
    } else {
      this.gamesData = { ...this.filteredResults };
    }
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: 'smooth'
    });
  }
  searching(){
    this.onSearch(this.searchTerm);
  }
  updateSlice(item: number) {
    this.defaultSlices[item] += 20;
  }

}
