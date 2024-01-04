import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './main/service/common-service.service';
import { register } from 'swiper/element/bundle';
// import { CommonServiceService } from './service/common-service.service';
import { Router,NavigationEnd } from '@angular/router';
register();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KhelooAngularDesktop';
  isSmallScreen!:boolean;
  constructor(private router:Router,private commonSer:CommonServiceService){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.refreshHeader(); 
        window.scrollTo(0, 0);
      }
    });
    this.commonSer.myVariable$.subscribe((width)=>{
      this.isSmallScreen = width === "true";
    });    
  }

  refreshHeader(){
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.commonSer?.startloging('login');
    } else {
      this.commonSer?.stoploging('login');
    }
  }
}
