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
gamesData: any[]= [];
// categoryName:any[] = ['Most Popular','Virtual Sports','Baccarat','Blackjack','Casual Games','Craps','Crash Games','Dragon Tiger','Fishing Games','Game Show','Live Baccarat','Live Blackjack','Live Dealer','Live Dragon Tiger','Live Lobby','Live Poker','Live Roulette','Live Sic Bo','Money Wheel',"Play'n Go",'Playtech','Playtech Live','Pragmatic play','Relax Gaming','Roulette'];
ngOnInit(): void {
  this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
    this.categoryFetch = ('gameCategory' in loading) ? true : false;
  });
  this.getAllCategory();

// this.gameListAll('Most Popular');
  
}
gameListAll(item:any){
  let param = {GameCategory:item};
  this.apiSer.apiRequest(config['gameList'],param).pipe(
    catchError((error)=>{
      throw error;
    })
  ).subscribe(data=>{
    this.gamesData = data;
    console.log(this.gamesData);
    
  });

}
getAllCategory(){
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
    subCategorySet.add(item.SubCategory);
  });
  this.mainCategory = Array.from(categorySet);
  this.subCategory = Array.from(subCategorySet);
  this.subCategory.forEach((item: { GameCategory: string; }) => {
    this.gameListAll(item);
  })

});
}
}
