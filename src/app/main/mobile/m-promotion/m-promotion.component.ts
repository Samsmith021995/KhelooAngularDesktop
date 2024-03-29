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
  {name:'lossback25',src:'/assets/images/lossback25.jpeg'},
  {name:'bonus300',src:'/assets/images/bonus300.jpeg'},
  {name:'bonus200',src:'/assets/images/bonus200.jpeg'},
  {name:'bonus150',src:'/assets/images/bonus150.jpeg'},
  {name:'cashbackextra',src:'/assets/images/cashbackextra.jpeg'},
  {name:'ezugispecial',src:'/assets/images/ez-promotion.png'},
  // {name:'viplossbackBonus',src:'/assets/images/promotion4.jpeg'},
  {name:'firstDeposit',src:'/assets/images/promotionNew.jpeg'},
  // {name:'depositBonus',src:'/assets/images/promotion1.jpeg'},
  // {name:'lossbackBonus',src:'/assets/images/promotion2.jpeg'}
];
constructor(private dialog:MatDialog){

}
ngOnInit(): void {
}

openInfo(index:any){
 this.promotionRef = index;
  this.defref = this.dialog.open(this.promoinfo);
  this.defref.afterClosed().subscribe(() => { });
}
closePo(){
  this.defref.close();    
}
}
