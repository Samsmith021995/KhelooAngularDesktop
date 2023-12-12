import {Component, Inject, ViewChild,ElementRef, TemplateRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css'
})
export class MobileHeaderComponent {
  @ViewChild('login') login!: TemplateRef<any>;
  constructor(public dialog:MatDialog){}
  openDialog(){
    this.dialog.open(this.login)

  }
}
