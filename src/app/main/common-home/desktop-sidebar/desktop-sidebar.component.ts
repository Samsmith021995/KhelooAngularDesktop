import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrl: './desktop-sidebar.component.css'
})
export class DesktopSidebarComponent implements OnInit {
  gameName!:string;
  gamesData:any[] =[];
  constructor(private comFun: ComFunService,private router:Router,private activeRooute:ActivatedRoute,private apiSer:ApiService) { }
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {
 
  }
  gamesList(param:String){
    this.router.navigate(['/gamesCat',param]);
  }

}
