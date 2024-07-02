import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-tennis-betting',
  templateUrl: './tennis-betting.component.html',
  styleUrl: './tennis-betting.component.css'
})
export class TennisBettingComponent  implements OnInit{
  isSmallScreen:boolean=false;
  cdn :string= 'https://cdn.fairbet91.com/KHELOO/content/'
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
