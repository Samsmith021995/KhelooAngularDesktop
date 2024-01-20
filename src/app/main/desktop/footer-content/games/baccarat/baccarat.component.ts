import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-baccarat',
  templateUrl: './baccarat.component.html',
  styleUrl: './baccarat.component.css'
})
export class BaccaratComponent {
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
