import { Component } from '@angular/core';
import { FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor( private fb:FormBuilder){

  }
  contactus = this.fb.group({
    first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    subject: ['', [Validators.required, Validators.minLength(10)]],

  });
}
