import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/main/service/api.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{
  contactus!:FormGroup;
  constructor( private fb:FormBuilder,private apiSer:ApiService){

  }
  ngOnInit(): void {
    this.contactus = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
  
    });
    
  }

  onSubmit(){
    if(!this.contactus.controls['first_name'].value){
      this.apiSer.showAlert( '',"Please enter your name",'warning');
      return ; 
    }
    if(!this.contactus.controls['email'].value){
      this.apiSer.showAlert( '',"Email should not be blank.",'warning');
      return ; 
    }
    if(!this.contactus.controls['subject'].value){
      this.apiSer.showAlert( '',"Subject should not be blank",'warning');
      return ; 
    }
    if(!this.contactus.controls['description'].value){
      this.apiSer.showAlert( '',"Subject should not be blank",'warning');
      return ; 
    }
    this.apiSer.showAlert( 'Thanks',"We will response as soon as possible.",'success');
    this.contactus.reset();
  }
}
