import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-m-promotion',
  templateUrl: './m-promotion.component.html',
  styleUrl: './m-promotion.component.css'
})
export class MPromotionComponent implements OnInit{
@ViewChild('promoinfo') promoinfo !: TemplateRef<any>;
defref:any
constructor(private dialog:MatDialog){

}
ngOnInit(): void {
  
}

openInfo(){

  this.defref = this.dialog.open(this.promoinfo);
  this.defref.afterClosed().subscribe(() => { });
}
closePo(){
    this.defref.close();    
}
}
