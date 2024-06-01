import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-tablegames-game',
  templateUrl: './tablegames-game.component.html',
  styleUrl: './tablegames-game.component.css'
})
export class TablegamesGameComponent {
  gameName!:string;
  gamesData:any[] =[];
  elementActive:boolean =true;

  loopArray: number[] = [];
  constructor(private activeRooute:ActivatedRoute,private apiSer:ApiService ){}
ngOnInit(): void {
  this.activeRooute.params.subscribe(params => {
    this.gameName = params['id'];
   this.getGames(this.gameName);
  });
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}
getGames(category:String){
  let param = { GameCategory: 'Table Games' };
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
}
