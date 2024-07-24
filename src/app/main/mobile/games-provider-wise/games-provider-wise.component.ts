import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription, catchError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-games-provider-wise',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './games-provider-wise.component.html',
  styleUrl: './games-provider-wise.component.css'
})
export class GamesProviderWiseComponent implements OnInit {
  searchGame = '';
  gamelist: boolean = false;
  selected: any = { mainCat: 'AllGames' };
  mainCategory: any[] = [];
  subCategory: any[] = [];
  subCategorybc: any[] = [];
  defaultSlices: number[] = [];
  isDetailsVisible: boolean[] = [];
  gamesData: any = [];
  filteredResults: any = [];
  categoryFetch = false;
  isLoggedIn: boolean = false;
  private loaderSubscriber !: Subscription;
  private isLoggedInSubscription!: Subscription;
  @ViewChild('loginPop') loginPop!: TemplateRef<any>;

  diaRef3: any;
  apiSer = inject(ApiService);
  route = inject(ActivatedRoute)
  router = inject(Router);
  dialog = inject(MatDialog)
  ngOnInit(): void {
    // this.getAllCategory(this.selected);
    this.route.paramMap.subscribe(param => {
      this.getAllCategory(this.selected);
    });
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.categoryFetch = ('gameCategory' in loading) ? true : false;
      this.gamelist = ('gameList' in loading) ? true : false;
    });
  }

  getAllCategory(cat?: any) {
    this.gamesData = [];
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
      // this.selected = cat.mainCat;
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
  gameListAll(item: any) {
    let param = { GameCategory: item };
    this.apiSer.apiRequest(config['gameList'], param).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      if (data) {
        const productString = this.route.snapshot.paramMap.get('provider');
        if (productString) {
          const filteredData = data.filter((game: any) =>
            game.product.toLowerCase().includes(productString.toLowerCase())
          );
          this.gamesData.push(...filteredData);
          this.filteredResults.push(...filteredData);
        }
      }
    });
  }
  onSearch(itemSeach: any) {
    if (itemSeach.trim() !== '') {
      let param = { GameCategory: this.selected }
      for (let item of this.subCategorybc) {
        const filteredApiResultsed = this.filteredResults.filter((result: any) =>
          result.name.toLowerCase().includes(itemSeach.toLowerCase()) ||
          result.groupname.toLowerCase().includes(itemSeach.toLowerCase()) ||
          result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase()) ||
          result.product.toLowerCase().includes(itemSeach.toLowerCase())
        );
        this.gamesData = filteredApiResultsed;
      }
    } else {
      this.gamesData = { ...this.filteredResults };
    }
  }
  searching() {
    this.onSearch(this.searchGame);
  }
  gameStart(param: any) {
    if (!this.isLoggedIn) {
      this.diaRef3 = this.dialog.open(this.loginPop);
      this.diaRef3.afterClosed().subscribe(() => { });
      return
    }
    this.router.navigate(['/games', param]);
  }
  closeDial2() {
    this.diaRef3.close();
  }
}
