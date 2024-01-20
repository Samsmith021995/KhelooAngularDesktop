import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/main/service/common-service.service';
@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrl: './casino.component.css'
})
export class CasinoComponent implements OnInit {
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
