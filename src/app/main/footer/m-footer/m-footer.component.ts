import { Component } from '@angular/core';


@Component({
  selector: 'app-m-footer',
  templateUrl: './m-footer.component.html',
  styleUrl: './m-footer.component.css'
})
export class MFooterComponent {
  pagination:boolean = false;
  prevNxt:boolean = false;
  footer:boolean = true;
  slidesPerViewn:number = 3;
  images = [
   {src: '/assets/images/game_provider1.png',search:'play\'n go'},
    {src:'/assets/images/game_prover_2.png'},
    {src:'/assets/images/game_prover_3.png'},
    {src:'/assets/images/game_prover_4.png'},
    {src:'/assets/images/game_prover_5.png'},
    {src:'/assets/images/game_prover_6.png'},
    {src:'/assets/images/game_prover_7.png'},
    {src:'/assets/images/game_prover_8.png'},
    {src:'/assets/images/game_prover_9.png'},
    {src:'/assets/images/game_prover_10.png'},
    {src:'/assets/images/game_prover_11.png'},
    {src:'/assets/images/game_prover_12.png'},
    {src:'/assets/images/game_prover_13.png'},
    {src:'/assets/images/game_prover_14.png'},
    {src:'/assets/images/game_prover_15.png'},
    {src:'/assets/images/game_prover_16.png'},
    {src:'/assets/images/game_prover_17.png'},
    {src:'/assets/images/game_prover_18.png'},
  ]
}
