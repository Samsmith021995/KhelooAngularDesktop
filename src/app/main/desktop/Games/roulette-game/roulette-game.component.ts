import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-roulette-game',
  templateUrl: './roulette-game.component.html',
  styleUrl: './roulette-game.component.css'
})
export class RouletteGameComponent implements OnInit {
  gameName!:string;
  gamesData:any[] =[];
  elementActive:boolean =true;

  loopArray: number[] = [];
  constructor(private activeRooute:ActivatedRoute,private apiSer:ApiService ){}
ngOnInit(): void {
  // this.activeRooute.params.subscribe(params => {
  //   this.gameName = params['id'];
   this.getGames();
  // });
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}
getGames(){
  let cateLottery = ['Roulette','Live Roulette'];
  cateLottery.forEach((item)=>{
    let param = {GameCategory:item}
    this.apiSer.apiRequest(config['gameList'],param).pipe(
      catchError((error) => {
        throw error;
      })
    ).subscribe(data => {
      if (data) {
        data.forEach((item:any)=>{
          this.gamesData.push(item);
        });
        console.log(data);
      }
    });

  });
}
}
