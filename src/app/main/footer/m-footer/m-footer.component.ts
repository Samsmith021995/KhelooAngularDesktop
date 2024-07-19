import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';


@Component({
  selector: 'app-m-footer',
  templateUrl: './m-footer.component.html',
  styleUrl: './m-footer.component.css'
})
export class MFooterComponent implements OnInit{
  pagination:boolean = false;
  prevNxt:boolean = false;
  footer:boolean = true;
  slidesPerViewn:number = 3;
constructor(private comFun:ComFunService){}
  cdn = this.comFun.cdn;
  images = [
    this.comFun.cdn+'images/game_provider1.png',
    this.comFun.cdn+'images/game_prover_2.png',
    this.comFun.cdn+'images/game_prover_3.png',
    this.comFun.cdn+'images/game_prover_4.png',
    this.comFun.cdn+'images/game_prover_5.png',
    this.comFun.cdn+'images/game_prover_6.png',
    this.comFun.cdn+'images/game_prover_7.png',
    this.comFun.cdn+'images/game_prover_8.png',
    this.comFun.cdn+'images/game_prover_9.png',
    this.comFun.cdn+'images/game_prover_10.png',
    this.comFun.cdn+'images/game_prover_11.png',
    this.comFun.cdn+'images/game_prover_12.png',
    this.comFun.cdn+'images/game_prover_13.png',
    this.comFun.cdn+'images/game_prover_14.png',
    this.comFun.cdn+'images/game_prover_15.png',
    this.comFun.cdn+'images/game_prover_16.png',
    this.comFun.cdn+'images/game_prover_17.png',
    this.comFun.cdn+'images/game_prover_18.png',
  ];
  // images = [
  //   {src:'/assets/images/game_provider1.png',search:'play\'n go'},
  //   {src: '/assets/images/game_prover_2.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_3.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_4.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_5.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_6.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_7.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_8.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_9.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_10.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_11.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_12.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_13.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_14.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_15.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_16.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_17.png',search:'play\'n go'},
  //   {src:'/assets/images/game_prover_18.png',search:'play\'n go'},
  // ]
  ngOnInit(): void {
    
  }
}
