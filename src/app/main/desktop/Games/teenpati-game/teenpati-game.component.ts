import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { config } from 'src/app/main/service/config';
@Component({
  selector: 'app-teenpati-game',
  templateUrl: './teenpati-game.component.html',
  styleUrl: './teenpati-game.component.css'
})
export class TeenpatiGameComponent implements OnInit {
  gameName!:string;
  gamesData:any[] =[];
  elementActive:boolean =true;

  loopArray: number[] = [];
  constructor(private activeRooute:ActivatedRoute,private apiSer:ApiService,private comFun:ComFunService ){}
ngOnInit(): void {
  let cateLottery = ['Teenpatti'];
  this.comFun.filterGames(cateLottery).subscribe(filteredGames => {
    this.gamesData = [...filteredGames];
  });
  this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
}
// getGames(){
//     this.apiSer.apiRequest(config['gameCategory']).pipe(
//     catchError((error) => {
//       throw error;
//     })
//   ).subscribe(data => {
//     data.forEach((item:any) =>{
//       let param = {GameCategory:item.SubCategory}
//       this.apiSer.apiRequest(config['gameList'],param).pipe(
//         catchError((error) => {
//           throw error;
//         })
//       ).subscribe(data => {
//         if (data) {
//             let itemSeach = 'Teenpatti';
//             const filteredApiResultsed = data.filter((result: { name: string; groupname: string; gamecategory: string; product: string; })=>
//               (result.name.toLowerCase().includes(itemSeach.toLowerCase())) || 
//               (result.groupname && result.groupname.toLowerCase().includes(itemSeach.toLowerCase())) || 
//               (result.gamecategory && result.gamecategory.toLowerCase().includes(itemSeach.toLowerCase() )) ||
//               (result.product && result.product.toLowerCase().includes(itemSeach.toLowerCase() ))
//               );
//               filteredApiResultsed.forEach((item:any)=>{
//                 this.gamesData.push(item);
//               })
//         }
//       });

//     })
//   });
// }
gameStart(param:any){
  this.comFun.checkLoginRedirect(param);
}
}
