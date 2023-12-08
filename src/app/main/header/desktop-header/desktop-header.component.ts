import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';
import { CommonServiceService } from '../../service/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css'
})
export class DesktopHeaderComponent implements OnInit{
  logincheck :boolean = false;
  balance : any; 
  showmenu :boolean = false;
  showsubmitbtn :boolean = false;
  username :any = '';
  loginForm !:FormGroup;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private comSer:CommonServiceService,private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Mobile : ['',[Validators.required,Validators.maxLength(10)]],
      Password : ['',Validators.required],
    });
  }
  showmenubar(){

  }
  logout(){

  }
  login(){
    this.showsubmitbtn = true;
    let param = this.loginForm.value;
    this.apiSer.apiRequest( config['login'],param).subscribe({
      next: data=>{
        if(data.ErrorCode == '1'){
          this.showsubmitbtn = false;
          this.comSer.saveData('UserId',data.UserId);
          this.comSer.saveData('LoginToken',data.LoginToken);
          this.comSer.saveData('name',data.UserName);
          this.apiSer.showAlert(data.ErrorMessage,'','success');
         //  this.apiSer.setUserDetails(data)
          this.router.navigate(['/']);
        }else if(data.ErrorCode != '1'){
          this.apiSer.showAlert(data.ErrorMessage,'','error');
          
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong','','error');
      }
    });
  }
}
