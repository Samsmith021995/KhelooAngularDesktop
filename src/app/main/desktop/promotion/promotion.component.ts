import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css'
})
export class PromotionComponent  implements OnInit{
  showMor:boolean = false;
  ngOnInit(): void {
    
  }
  showContent(){  
      this.showMor =!this.showMor;
  }
}
