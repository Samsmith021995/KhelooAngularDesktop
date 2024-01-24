import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css'
})
export class PromotionComponent  implements OnInit{
  showMor:boolean = false;
  showMor1:boolean = false;
  showMor2:boolean = false;
  ngOnInit(): void {
    
  }
  showContent(item:string){  
    if(item === 'welcomeBonus'){
      this.showMor =!this.showMor;
      
    }else if(item === 'depositBonus'){
      this.showMor1 =!this.showMor1;

    }else if(item === 'lossbackBonus'){
      this.showMor2 =!this.showMor2;

    }
  }
}
