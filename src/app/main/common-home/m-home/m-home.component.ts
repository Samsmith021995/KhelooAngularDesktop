import {Component, Inject, OnInit, Renderer2,ViewChildren,QueryList,ElementRef} from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Subscription,catchError } from 'rxjs';
import { config } from '../../service/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrl: './m-home.component.css'
})
export class MHomeComponent implements OnInit{
  images = [
    'https://kheloo.com/images/10minwith.png',
    'https://kheloo.com/images/Banner11.jpg',
    'https://kheloo.com/images/Banner18.jpg',
    'https://kheloo.com/images/Dil-se-kheloo_375x250.jpg',
    'https://kheloo.com/images/10minwith.png',
    'https://kheloo.com/images/Banner11.jpg',
    'https://kheloo.com/images/Banner18.jpg',
    'https://kheloo.com/images/Dil-se-kheloo_375x250.jpg',
    'https://kheloo.com/images/10minwith.png',
    'https://kheloo.com/images/Banner11.jpg',
    'https://kheloo.com/images/Banner18.jpg',
    'https://kheloo.com/images/Dil-se-kheloo_375x250.jpg',
    
  ];
  mainCategory: any[] = [];
  subCategory: any[] = [];
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
  filteredResults: { [key: string]: any[] } = {};
  private loaderSubscriber !: Subscription;
  constructor(private apiSer:ApiService,private renderer: Renderer2,private router:Router){}
  @ViewChildren('showMore') myElementRef!: QueryList<ElementRef<any>>;
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.categoryFetch = ('gameCategory' in loading) ? true : false;
      this.gamelist = ('gameList' in loading) ? true : false;
    });
    this.getAllCategory(this.selected);
  }
  gameListAll(item: any) {
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
      this.subCategory.forEach((item: { GameCategory: string; }) => {
        this.defaultSlices.push(4);
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
        return;
      }
      this.defaultSlices[item] += 20;
      this.renderer.addClass(nativeElement, 'showMore');
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
  
  updateSlice(item:number){
    this.defaultSlices[item] += 20;
  }

}
