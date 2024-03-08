import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-paymentcheck',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './paymentcheck.component.html',
  styleUrl: './paymentcheck.component.css'
})
export class PaymentcheckComponent implements OnInit {
  // router = 
  // apiSer =  inject(ApiService);
ngOnInit(): void {
  this.Check();
}
Check(){
  setTimeout(() => {
    window.location.href = "https://kheloo.com";
  }, 3000);
}
}
