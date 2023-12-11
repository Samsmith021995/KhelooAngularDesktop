import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrl: './jackpot.component.css'
})
export class JackpotComponent implements OnInit, OnDestroy {
  countDownValue = 6598326;
  displayValue=this.countDownValue.toString();
  private intervalId: any;
  

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.countDownValue++;
    
      if (this.countDownValue.toString().length > 7) {
        this.countDownValue = 1000000; // Reset to a specific 7-digit number
      }
    
      // Ensure the display value is always 7 digits long
      this.displayValue = this.countDownValue.toString().padStart(7, '0');
    }, 1000)
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
}
