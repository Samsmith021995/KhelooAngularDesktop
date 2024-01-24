import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-m-promotion',
  templateUrl: './m-promotion.component.html',
  styleUrl: './m-promotion.component.css'
})
export class MPromotionComponent implements OnInit{
@ViewChild('promoinfo') promoinfo !: TemplateRef<any>;
promotionRef:string='';
defref:any
image = [
'/assets/images/Banner7.jpeg',
'/assets/images/promotion1.jpeg',
'/assets/images/promotion2.jpeg',
];
constructor(private dialog:MatDialog){

}
ngOnInit(): void {
}

openInfo(index:number){
  if(index === 0){
    this.promotionRef = 'welcomeBonus';
  }else if(index === 1){
    this.promotionRef = 'depositBonus';
  }else if(index === 2){
    this.promotionRef = 'lossbackBonus';
  }
  this.defref = this.dialog.open(this.promoinfo);
  this.defref.afterClosed().subscribe(() => { });
}
closePo(){
  this.defref.close();    
}
}
