import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrl: './jackpot.component.css'
})
export class JackpotComponent implements OnInit, OnDestroy {
  countDownValue = 6598326;
  displayValue=this.countDownValue.toString();
  private intervalId: any;
  dataDetails:any;
  constructor(private apiSer:ApiService){}

  ngOnInit(): void {
    this.getRecentWith();
    setInterval(() => {
      this.getRecentWith()
    }, 60000);
    this.intervalId = setInterval(() => {
      this.countDownValue++;
    
      if (this.countDownValue.toString().length > 7) {
        this.countDownValue = 1000000; // Reset to a specific 7-digit number
      }
    
      // Ensure the display value is always 7 digits long
      this.displayValue = this.countDownValue.toString().padStart(7, '0');
    }, 1000)
  }

  getRecentWith(){
    this.apiSer.apiRequest(config['recent']).subscribe({
      next:data=>{
        if(data){
          this.dataDetails = data;
        }
      },
      error:err=>{
        console.error(err);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
}
