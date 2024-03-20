import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-online-sports-betting',
  templateUrl: './online-sports-betting.component.html',
  styleUrl: './online-sports-betting.component.css'
})
export class OnlineSportsBettingComponent implements OnInit {
  isSmallScreen:boolean=false;
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
