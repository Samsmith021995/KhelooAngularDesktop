import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent {
@ViewChild('register') register!:TemplateRef<any>;
constructor(private dialog:MatDialog){}
openRegister(){
  this.dialog.open(this.register, {
    height: '900x',
    width: '600px',
    panelClass: 'screen-dialog',
  });
}
}
