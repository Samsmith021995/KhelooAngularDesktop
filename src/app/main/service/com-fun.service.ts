import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { config } from './config';
import { CommonServiceService } from './common-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../desktop/auth/login-popup/login-popup.component';

@Injectable({
  providedIn: 'root'
})
export class ComFunService {
  isLoggedIn: boolean = false;
  private isLoggedInSubscription!: Subscription;
  cdn:string = 'https://cdn.fairbet91.com/KHELOO/';
  private gamesDataSubject = new BehaviorSubject<any[]>([]);
  gamesData$ = this.gamesDataSubject.asObservable();
  gamesData: any[] = [];
  private gamesDataCatSubject = new BehaviorSubject<any[]>([]);
  gamesDataCat$ = this.gamesDataCatSubject.asObservable();
  gamesDataCat: any[] = [];
  private isDataLoaded = false;
  private gamesByCategory: { [key: string]: any[] } = {};
  private gamesByCategorySubject = new BehaviorSubject<{ [key: string]: any[] }>({});
  constructor(private apiSer:ApiService,private comSer:CommonServiceService,private router:Router,private http:HttpClient,private dialog:MatDialog) {
    this.getAllGames();
   }

  login(param:any){
   return this.apiSer.apiRequest(config['login'],param);
  }
  // subscribe({
  //   next: data=>{
  //     if(data.ErrorCode == '1'){
  //       // this.showsubmitbtn = false;
  //       this.comSer.saveData('UserId',data.UserId);
  //       this.comSer.saveData('LoginToken',data.LoginToken);
  //       this.comSer.saveData('name',data.UserName);
  //       this.apiSer.showAlert(data.ErrorMessage,'','success');
  //      //  this.apiSer.setUserDetails(data)
  //      this.refreshHeader();
  //       this.router.navigate(['/']);
  //     }else if(data.ErrorCode != '1'){
  //       this.apiSer.showAlert(data.ErrorMessage,'','error');
  //     }
  //   },
  //   error: err => {
  //     this.apiSer.showAlert('Something Went Wrong','','error');
  //   }
  // });
  refreshHeader() {
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.comSer?.startloging('login');
    } else {
      this.comSer?.stoploging('login');
    }
  }
  getCDNData(dataType:any): Observable<any> {
    return this.http.get<any>('https://cdn.fairbet91.com/KHELOO/bannerPromo.json').pipe(
      map((data: any) => data[dataType]));
  }
  checkLoginRedirect(param:any){
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
    if(!this.isLoggedIn){
      let diaRef3:any = '';
      diaRef3 = this.dialog.open(LoginPopupComponent,{
        width:'1200px'
      });
      diaRef3.afterClosed().subscribe(() => { });
      return
    }
    this.router.navigate(['/games', param]);

  }
  loginCheck(param?:any){
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
    if(!this.isLoggedIn){
      let diaRef3:any = '';
      diaRef3 = this.dialog.open(LoginPopupComponent,{
        width:'1200px'
      });
      diaRef3.afterClosed().subscribe(() => { });
      return
    }
    this.router.navigate(['/'+param]);

  }

  getAllGames(){
    if (this.isDataLoaded) {
      this.gamesDataSubject.next(this.gamesData);
      this.gamesByCategorySubject.next(this.gamesByCategory);
      return;
    }
    this.apiSer.apiRequest(config['gameCategory']).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      const uniqueSubCategories = Array.from(new Set(data.map((item: { SubCategory: any; }) => item.SubCategory)));
      let categoriesToFetch = uniqueSubCategories.length;
      uniqueSubCategories.forEach((item: any) => {
        const category = item;
        let param = { GameCategory: item }
        this.apiSer.apiRequest(config['gameList'], param).pipe(
          catchError((error) => {
            throw error;
          })
        ).subscribe(data => {
          if (data) {
              this.gamesData = [...this.gamesData, ...data];
              this.gamesDataSubject.next(this.gamesData);


            if (!this.gamesByCategory[category]) {
              this.gamesByCategory[category] = [];
            }
            this.gamesByCategory[category] = [...this.gamesByCategory[category], ...data];
            this.gamesByCategorySubject.next(this.gamesByCategory);

            
            categoriesToFetch--;
            if (categoriesToFetch === 0) {
              this.isDataLoaded = true;
            }

          }
        });

      })
    });
  }
  getCategorizedGames(): Observable<{ [key: string]: any[] }> {
    return this.gamesByCategorySubject.asObservable();
  }

  //     gameCategoryWise(item:any):Observable<any>{
  //         let itemSeach = item;
  //           const filteredApiResultsed = this.gamesData.filter((result: { name: string; groupname: string; gamecategory: string; product: string; }) =>
  //             (result.name.toLowerCase().includes(itemSeach.toLowerCase())) ||
  //             (result.groupname && result.groupname.toLowerCase().includes(itemSeach.toLowerCase())) ||
  //             (result.gamecategory && result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase())) ||
  //             (result.product && result.product.toLowerCase().includes(itemSeach.toLowerCase()))
  //           );
  //           filteredApiResultsed.forEach((item: any) => {
  //             this.gamesDataCat = [item];
  //           return this.gamesDataCatSubject.next(item);
  //             // this.gamesData.push(data);
  //           })
  //           // console.log();
  //           return this.gamesDataCat;
  // }
  // filterGames(searchStrings: string[]): Observable<any[]> {
  //   return this.gamesData$.pipe(
  //     map(data => {
  //       const filteredGames = data.filter(game => {
  //         return searchStrings.some(searchString => {
  //           return (
  //             game.name.toLowerCase().includes(searchString.toLowerCase()) ||
  //             (game.groupname && game.groupname.toLowerCase().includes(searchString.toLowerCase())) ||
  //             (game.gamecategory && game.gamecategory.toLowerCase().includes(searchString.toLowerCase())) ||
  //             (game.product && game.product.toLowerCase().includes(searchString.toLowerCase()))
  //           );
  //         });
  //       });
  //       return filteredGames;
  //     })
  //   );
  // }
  filterGames(searchStrings: string[]): Observable<any[]> {
    return this.gamesData$.pipe(
        map(data => {
            const uniqueGames = new Map<number, any>(); // Use game_id as the key
            if (!Array.isArray(searchStrings)) {
              searchStrings = [searchStrings]; // Convert to array if it's not already
            }
            // Filter games based on search strings and uniqueness of game_id
            data.forEach(game => {
                const matchesSearch = searchStrings.some(searchString => 
                    game.name.toLowerCase().includes(searchString.toLowerCase()) ||
                    (game.groupname && game.groupname.toLowerCase().includes(searchString.toLowerCase())) ||
                    (game.gamecategory && game.gamecategory.toLowerCase().includes(searchString.toLowerCase())) ||
                    (game.product && game.product.toLowerCase().includes(searchString.toLowerCase()))
                );

                if (matchesSearch && !uniqueGames.has(game.game_id)) {
                    uniqueGames.set(game.game_id, game); // Add to Map if game_id is unique
                }
            });

            return Array.from(uniqueGames.values()); // Convert Map values to an array
        })
    );
}
  // filterGames(searchStrings: string[]): Observable<any[]> {
  //   return this.gamesData$.pipe(
  //     map(data => {
  //       const uniqueGames = new Map<string, any>(); // Use a Map to track unique games
  //       const filteredGames = data.filter(game => {
  //         const matchesSearch = searchStrings.some(searchString => {
  //           return (
  //             game.name.toLowerCase().includes(searchString.toLowerCase()) ||
  //             (game.groupname && game.groupname.toLowerCase().includes(searchString.toLowerCase())) ||
  //             (game.gamecategory && game.gamecategory.toLowerCase().includes(searchString.toLowerCase())) ||
  //             (game.product && game.product.toLowerCase().includes(searchString.toLowerCase()))
  //           );
  //         });
  //         if (matchesSearch) {
  //           if (!uniqueGames.has(game.name)) { // Use game.name or game.id as the unique key
  //             uniqueGames.set(game.name, game); // Add to the Map if not already present
  //           }
  //         }
  //         return matchesSearch;
  //       });
  //       return Array.from(uniqueGames.values()); // Convert Map values to an array
  //     })
  //   );
  // }
  private drawerVisibleSubject = new BehaviorSubject<boolean>(false);
  drawerVisible$ = this.drawerVisibleSubject.asObservable();

  openDrawer() {
    this.drawerVisibleSubject.next(true);
  }

  closeDrawer() {
    this.drawerVisibleSubject.next(false);
  }
  toggleDrawer() {
    this.drawerVisibleSubject.next(!this.drawerVisibleSubject.value);
  }


}
