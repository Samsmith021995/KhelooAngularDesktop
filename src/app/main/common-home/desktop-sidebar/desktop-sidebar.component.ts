import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrl: './desktop-sidebar.component.css'
})
export class DesktopSidebarComponent implements OnInit {
  gameName!:string;
  gamesData:any[] =[];
  constructor(private comFun: ComFunService,private router:Router,private activeRooute:ActivatedRoute,private apiSer:ApiService,private msg:NzMessageService) { }
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {
 
  }
  gamesList(param:String){
    this.router.navigate(['/gamesCat',param]);
  }
  callSupport(val:any){
    if(val == 'tawk'){
      window.open('https://tawk.to/chat/60a22370185beb22b30ddc1d/1f5slks90');
      return;
    }
    let param = {type:val}
    this.apiSer.apiRequest(config['supportCallback'],param).subscribe({
      next:(data)=>{
        if(!data){
          this.msg.error('Currently Whatsapp is not available',{nzDuration:3000});
          return
        }
        if(data.ErrorCode == '1'){
          if(val == 'TL'){
            window.open( 'https://t.me/+'+data.Result,'_blank');
          }else{
            window.open(  'https://api.whatsapp.com/send/?phone='+data.Result+'&amp;text&amp;app_absent=0','_blank');
          }
        }else{
          this.msg.error(data.ErrorMessage,{nzDuration:3000});
        }
      },
      error:(err)=>{

      }
    })
  }
}
