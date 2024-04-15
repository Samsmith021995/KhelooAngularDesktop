import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComFunService } from '../../service/com-fun.service';

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
constructor(private dialog:MatDialog, private comFun:ComFunService){

}
ngOnInit(): void {
}
getBannerImage(){
  this.comFun.getCDNData('promotion').subscribe({
    next:(res:any)=>{
      this.image = res;
    },
    error:err=>{
      console.log("error");
    }
  })
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
