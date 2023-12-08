import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError,Subscription } from 'rxjs';

@Component({
  selector: 'app-d-home',
  templateUrl: './d-home.component.html',
  styleUrl: './d-home.component.css'
})
export class DHomeComponent implements OnInit{
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
constructor(private apiSer:ApiService){}
mainCategory:any[] = [];
subCategory:any[] = [];
categoryFetch = false;
gamesData: { [key: string]: any[] } = {};
selected:any = {mainCat:'AllGames'};
// categoryName:any[] = ['Most Popular','Virtual Sports','Baccarat','Blackjack','Casual Games','Craps','Crash Games','Dragon Tiger','Fishing Games','Game Show','Live Baccarat','Live Blackjack','Live Dealer','Live Dragon Tiger','Live Lobby','Live Poker','Live Roulette','Live Sic Bo','Money Wheel',"Play'n Go",'Playtech','Playtech Live','Pragmatic play','Relax Gaming','Roulette'];
ngOnInit(): void {
  this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
    this.categoryFetch = ('gameCategory' in loading) ? true : false;
  });
  this.getAllCategory(this.selected);
  
}
gameListAll(item:any){
  let param = {GameCategory:item};
  this.apiSer.apiRequest(config['gameList'],param).pipe(
    catchError((error)=>{
      throw error;
    })
  ).subscribe(data=>{
    this.gamesData[item] = data;
    // console.log(this.gamesData[item] );
  });

}
gameListOne(item:any){
  this.gamesData = {};
  let param = {GameCategory:item};
  this.apiSer.apiRequest(config['gameList'],param).pipe(
    catchError((error)=>{
      throw error;
    })
  ).subscribe(data=>{
    this.gamesData[item] = data;
    // console.log(this.gamesData[item] );
  });

}
getAllCategory(cat?:any){
// console.log(cat);
this.apiSer.apiRequest(config['gameCategory']).pipe(
  catchError((error)=>{
    throw error;
  })
).subscribe(data=>{
  let categorySet = new Set<string>();
  let subCategorySet = new Set<string>();
  categorySet.add('AllGames')
  data.forEach((item: { GameCategory: string, SubCategory:string}) => {
    categorySet.add(item.GameCategory);
    if(cat.mainCat == item.GameCategory ){
      subCategorySet.add(item.SubCategory);
    } 
    if(cat.mainCat == 'AllGames'){
      subCategorySet.add(item.SubCategory);
    }
  });
  this.selected = cat.mainCat;
  // console.log(cat.mainCat);
  this.mainCategory = Array.from(categorySet);
  this.subCategory = Array.from(subCategorySet);
  
  this.subCategory.forEach((item: { GameCategory: string; }) => {
    this.gameListAll(item);
  })

});
}

}
