import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';

@Component({
  selector: 'app-blackjack-game',
  templateUrl: './blackjack-game.component.html',
  styleUrl: './blackjack-game.component.css'
})
export class BlackjackGameComponent implements OnInit {
  gameName!:string;
  gamesData:any[] =[];
  elementActive:boolean =true;

  loopArray: number[] = [];
  constructor(private apiSer:ApiService,private comFun:ComFunService ){}
ngOnInit(): void {
  let cateLottery = ['Blackjack'];
  this.comFun.filterGames(cateLottery).subscribe(filteredGames => {
    this.gamesData = [...filteredGames];
  });
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}

gameStart(param:any){
  this.comFun.checkLoginRedirect(param);
}
}
