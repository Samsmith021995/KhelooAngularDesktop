import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';

@Component({
  selector: 'app-d-jackpot',
  templateUrl: './d-jackpot.component.html',
  styleUrl: './d-jackpot.component.css'
})
export class DJackpotComponent implements OnInit {
  recentWithdraws: any[] = [];
  number: any;
  result: any = "";
  completed: string = "";
  id: string = "";
  title: string = "";

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.syncNumber();
    this.getQuote();

    // this.apiService.getdata().subscribe((data) => {
    //   this.result = data;
    // });
    // this.apiService.getQuote().subscribe((data) => {
    //   this.Quote = data[content];
    // });
  }
  getQuote() {
    this.apiService.apiRequest(config['recent']).subscribe(
      (data: any) => {
        this.result = data;
      },
      (error) => {
        console.error("Error fetching quote", error);
      }
    );
  }
  syncNumber() {
    const startNumber = 5910072; 
    const endNumber = 9999999;
    const resetNumber = 8889989;

    let currentNumber = startNumber;

    setInterval(() => {
      currentNumber++;

      if (currentNumber > endNumber) {
        currentNumber = resetNumber;
      }

      this.number = currentNumber;
    }, 1000);
  }
}
