import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { CommonServiceService } from '../../service/common-service.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent  implements OnInit{
  constructor(private router:Router,private apiSer:ApiService,private comSer:CommonServiceService){}
ngOnInit(): void {
  setTimeout(() => {
    this.router.navigate(['/']); 
    this.login();
  }, 5000);
}

login(){
  let mob = localStorage.getItem('Mobile');
  let pass = localStorage.getItem('Password');
  this.apiSer.login(mob,pass);
}

}
