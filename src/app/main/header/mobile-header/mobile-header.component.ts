import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css'
})
export class MobileHeaderComponent {
  @ViewChild('register') register!: TemplateRef<any>;
  constructor(private dialog: MatDialog){}

  openRegister(){
    let dialogRef = this.dialog.open(this.register, {
      height: '900x',
      width: '600px',
      panelClass: 'screen-dialog',
    });
    dialogRef.afterClosed().subscribe(result => {})
  }
}
