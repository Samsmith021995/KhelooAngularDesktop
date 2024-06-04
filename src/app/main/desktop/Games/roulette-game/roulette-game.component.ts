import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';
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
  constructor(private activeRooute:ActivatedRoute,private apiSer:ApiService,private comFun:ComFunService ){}
ngOnInit(): void {
  let cateLottery = ['Roulette','Live Roulette'];
  this.comFun.filterGames(cateLottery).subscribe(filteredGames => {
    this.gamesData = [...filteredGames];
  });
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}

gameStart(param:any){
  this.comFun.checkLoginRedirect(param);
}
}
