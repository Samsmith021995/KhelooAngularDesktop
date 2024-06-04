import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { catchError } from 'rxjs';
import { config } from '../../service/config';
import { ComFunService } from '../../service/com-fun.service';

@Component({
  selector: 'app-games-category',
  templateUrl: './games-category.component.html',
  styleUrl: './games-category.component.css'
})
export class GamesCategoryComponent implements OnInit{
  gameName!:string;
  gamesData:any[] =[];
  elementActive:boolean =true;

  loopArray: number[] = [];
  constructor(private activeRooute:ActivatedRoute,private apiSer:ApiService,private comFun:ComFunService ){}
ngOnInit(): void {
  this.activeRooute.params.subscribe(params => {
    this.gameName = params['id'];
   this.getGames(this.gameName);
  });
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}
getGames(category:String){
  let param = { GameCategory: category };
  this.apiSer.apiRequest(config['gameList'],param).pipe(
    catchError((error) => {
      throw error;
    })
  ).subscribe(data => {
    if (data) {
      this.gamesData = data;
      console.log(data);
    }
  });
}
gameStart(param:any){
  this.comFun.checkLoginRedirect(param);
}
}
