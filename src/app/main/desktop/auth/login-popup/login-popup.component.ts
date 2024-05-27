import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent  implements OnInit{
  validateForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }
  submitForm(){

  }
}
