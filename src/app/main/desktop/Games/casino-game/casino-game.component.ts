import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {  Subscription, catchError } from 'rxjs';

import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-casino-game',
  templateUrl: './casino-game.component.html',
  styleUrl: './casino-game.component.css'
})
export class CasinoGameComponent implements OnInit {
  isLoggedIn: boolean = false;
  private isLoggedInSubscription!: Subscription;
  gameName!: string;
  gamesData: any[] = [];
  elementActive: boolean = true;

  loopArray: number[] = [];
  constructor(private activeRooute: ActivatedRoute, private apiSer: ApiService,private dialog:MatDialog,private router:Router,private comFun:ComFunService) { }
  ngOnInit(): void {
    this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.comFun.filterGames(['casino']).subscribe(filteredGames => {
      this.gamesData = [...filteredGames];
    });
   
  }
  gameStart(param:any){
    this.comFun.checkLoginRedirect(param);
  }
}
