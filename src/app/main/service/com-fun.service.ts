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
      diaRef3 = this.dialog.open(LoginPopupComponent);
      diaRef3.afterClosed().subscribe(() => { });
      return
    }
    this.router.navigate(['/games', param]);

  }
  getAllGames(){
    if (this.isDataLoaded) {
      // If data is already loaded, emit the cached data
      this.gamesDataSubject.next(this.gamesData);
      return;
    }
    this.apiSer.apiRequest(config['gameCategory']).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      // console.log(data)
      data.forEach((item: any) => {
        let param = { GameCategory: item.SubCategory }
        this.apiSer.apiRequest(config['gameList'], param).pipe(
          catchError((error) => {
            throw error;
          })
        ).subscribe(data => {
          if (data) {
            // let itemSeach = searchitem;
            // const filteredApiResultsed = data.filter((result: { name: string; groupname: string; gamecategory: string; product: string; }) =>
            //   (result.name.toLowerCase().includes(itemSeach.toLowerCase())) ||
            //   (result.groupname && result.groupname.toLowerCase().includes(itemSeach.toLowerCase())) ||
            //   (result.gamecategory && result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase())) ||
            //   (result.product && result.product.toLowerCase().includes(itemSeach.toLowerCase()))
            // );
            // filteredApiResultsed.forEach((item: any) => {
              this.gamesData = [...this.gamesData, ...data];
            this.gamesDataSubject.next(this.gamesData);
            this.isDataLoaded = true; 
              // this.gamesData.push(data);
            // })
          }
        });

      })
    });
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
  filterGames(searchStrings: string[]): Observable<any[]> {
    return this.gamesData$.pipe(
      map(data => {
        const filteredGames = data.filter(game => {
          return searchStrings.some(searchString => {
            return (
              game.name.toLowerCase().includes(searchString.toLowerCase()) ||
              (game.groupname && game.groupname.toLowerCase().includes(searchString.toLowerCase())) ||
              (game.gamecategory && game.gamecategory.toLowerCase().includes(searchString.toLowerCase())) ||
              (game.product && game.product.toLowerCase().includes(searchString.toLowerCase()))
            );
          });
        });
        return filteredGames;
      })
    );
  }

}
