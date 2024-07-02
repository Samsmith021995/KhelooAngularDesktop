import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrl: './roulette.component.css'
})
export class RouletteComponent implements OnInit {
  isSmallScreen:boolean=false;
panels = [
  {
    active: false,
    name: '1. What sorts of live roulette games can I play at Kheloo casino?',
    disabled: false,
    content: "Our online casino attributes over 2 dozen live roulette games, which include top-rated creations for Ezugi, Evolution and many others. You can try all types of distinctive and interesting roulette choices, including Speed Roulette, Lightning Roulette, and more."
  },
  {
    active: false,
    disabled: false,
    name: '2. Are online games of roulette rigged?',
    content: "All of our digital roulette games have been certified for utilising random number generators to make sure that absolutely unpredictable and random results. At the same time, all of our live games that are presented by a dealer come from credible studios that have a stern notoriety for offering fair games."
  },
  {
    active: false,
    disabled: false,
    name: '3. What is the absolute best version of online roulette?',
    content: "In terms of having the absolute possibilities of winning long term, French and European roulette are better than the American version of the game due to a diminished house edge. Because of la partage and en prison rules, French roulette can have a house edge as low as 1.35%."
  },
  {
    active: false,
    disabled: false,
    name: '4. What is the best strategy for online roulette?',
    content: "A few of the most famous roulette strategies are Martinagel, Fibonacci and D’Alembert, but know that no strategy will absolutely guarantee a win. Roulette is a game of possibilities and you’ll simply require luck on your side to triumph."
  }
];
  constructor(private commSer:CommonServiceService, private router:Router,private comFun:ComFunService) { }
  cdn = this.comFun.cdn;
ngOnInit(): void {
  this.commSer.myVariable$.subscribe((width)=>{
    this.isSmallScreen = width === "true";
  });
  
}
navigateRegister(){
  if(this.isSmallScreen){
    this.router.navigate(['/signup']);
  }else{
    this.comFun.loginCheck();
  }
}
}
