import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComFunService } from '../../service/com-fun.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css'
})
export class PromotionComponent  implements OnInit{
  showMor:boolean = false;
  showMor1:boolean = false;
  showMor2:boolean = false;
  isVisibleTop = false;
  isVisibleMiddle = false;
  htmlcon: string = ''
  isSpinning:boolean = false;
  // ngOnInit(): void {
    
  // }
  showContent(item:string){  
    if(item === 'welcomeBonus'){
      this.showMor =!this.showMor;
      
    }else if(item === 'depositBonus'){
      this.showMor1 =!this.showMor1;

    }else if(item === 'lossbackBonus'){
      this.showMor2 =!this.showMor2;

    }
  }
  @ViewChild('promoinfo') promoinfo !: TemplateRef<any>;
promotionRef:any = {};
defref:any
image:any = [
  // {name:'lossback25',src:'/assets/images/lossback25.jpeg'},
  // {name:'bonus300',src:'/assets/images/bonus300.jpeg'},
  // {name:'bonus200',src:'/assets/images/bonus200.jpeg'},
  // {name:'bonus150',src:'/assets/images/bonus150.jpeg'},
  // {name:'cashbackextra',src:'/assets/images/cashbackextra.jpeg'},
  // {name:'ezugispecial',src:'/assets/images/ez-promotion.png'},
  // {name:'firstDeposit',src:'/assets/images/promotionNew.jpeg'},
  // {name:'viplossbackBonus',src:'/assets/images/promotion4.jpeg'},
  // {name:'depositBonus',src:'/assets/images/promotion1.jpeg'},
  // {name:'lossbackBonus',src:'/assets/images/promotion2.jpeg'}
];
constructor(private dialog:MatDialog, private comFun:ComFunService,private http: HttpClient){

}
ngOnInit(): void {
  this.getPromoImage();
}
getPromoImage(){
  this.comFun.getCDNData('promotion').subscribe({
    next:(res:any)=>{
      this.image = res;
    },
    error:err=>{
      console.error("error");
    }
  })
}
openInfo(index:any){
  this.isSpinning = true;
  this.promotionRef = index;
  // this.defref = this.dialog.open(this.promoinfo);
  this.getHtmlContent(this.promotionRef.content).subscribe({
    next: (res) => {
      this.htmlcon = res;
      this.isVisibleMiddle = true;
      this.isSpinning = false;
    },
    error: err => console.error(err)
  });
  // this.defref.afterClosed().subscribe(() => { });
}
closePo(){
  this.defref.close();    
}



  showModalTop(): void {
    this.isVisibleTop = true;
  }

  // openInfo(index:any): void {
  //   this.promotionRef = index;
  //   this.isVisibleMiddle = true;
  // }

  handleOkTop(): void {
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  getHtmlContent(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }
}
