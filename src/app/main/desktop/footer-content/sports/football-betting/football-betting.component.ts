import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-football-betting',
  templateUrl: './football-betting.component.html',
  styleUrl: './football-betting.component.css'
})
export class FootballBettingComponent implements OnInit{
  isSmallScreen:boolean=false;
    cdn :string= 'https://cdn.fairbet91.com/KHELOO/content/'
  panels = [
    {
      active: false,
      name: '1. Is it possible to bet on the Indian Super League?',
      disabled: false,
      content:"Football betting on ISL is possible at Kheloo, one of the finest Indian football betting sites. To place ISL bets, you require to go to the Kheloo application or the website, then choose Indian in the upcoming matches tab and then choose ISL matches."
    },
    {
      active: false,
      disabled: false,
      name: '2. Where can I find live stream football?',
      content:"The Kheloo football betting site cares about the comfort of its gamers, which is why you can watch live stream football matches you wish to bet on right on our platform."
    },
    {
      active: false,
      disabled: false,
      name: '3. Can I earn cash on football betting?',
      content:"Indeed you can! Football betting can be great for you. But do not confuse this with the chief income since sports betting, due to its riskiness, can’t replace your chief income. Thus, we recommend you to consider football betting only as an extra income."
    },
    {
      active: false,
      disabled: false,
      name: '4. How to deposit cash on football betting?',
      content:"In order to deposit in your account, sign up on the Kheloo platform, enter your account and tap on the deposit button in the top right corner. There are numerous easy deposit techniques. Then you’ll be able to bet on soccer."
    }
  ];
  constructor(private commSer:CommonServiceService, private router:Router) { }
ngOnInit(): void {
  this.commSer.myVariable$.subscribe((width)=>{
    this.isSmallScreen = width === "true";
  });
  
}
  navigateRegister(){
    if(this.isSmallScreen){
      this.router.navigate(['/signup']);
    }else{
      this.router.navigate(['/register']);
  
    }
  }
}
