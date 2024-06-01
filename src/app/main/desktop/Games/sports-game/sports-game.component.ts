import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-sports-game',
  templateUrl: './sports-game.component.html',
  styleUrl: './sports-game.component.css'
})
export class SportsGameComponent implements OnInit {
  gameName!:string;
  gamesData:any[] =[];
  elementActive:boolean =true;

  loopArray: number[] = [];
  constructor(private activeRooute:ActivatedRoute,private apiSer:ApiService ){}
ngOnInit(): void {
  this.getGames();
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}
getGames(){
    this.apiSer.apiRequest(config['gameCategory']).pipe(
    catchError((error) => {
      throw error;
    })
  ).subscribe(data => {
    console.log(data)
    data.forEach((item:any) =>{
      let param = {GameCategory:item.SubCategory}
      this.apiSer.apiRequest(config['gameList'],param).pipe(
        catchError((error) => {
          throw error;
        })
      ).subscribe(data => {
        if (data) {
            let itemSeach = 'sport';
            const filteredApiResultsed = data.filter((result: { name: string; groupname: string; gamecategory: string; product: string; })=>
              (result.name.toLowerCase().includes(itemSeach.toLowerCase())) || 
              (result.groupname && result.groupname.toLowerCase().includes(itemSeach.toLowerCase())) || 
              (result.gamecategory && result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase() )) ||
              (result.product && result.product.toLowerCase().includes(itemSeach.toLowerCase() ))
              );
              filteredApiResultsed.forEach((item:any)=>{
                this.gamesData.push(item);
              })
        }
      });

    })
  });

 
 
}
  

}
