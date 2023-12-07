import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css'
})
export class DesktopHeaderComponent {
  logincheck :boolean = false;
  balance : any; 
  showmenu :boolean = false;
  username :any = '';
  showmenubar(){

  }
  logout(){

  }
}
