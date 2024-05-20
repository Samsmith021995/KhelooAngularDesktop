import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';

@Component({
  selector: 'app-desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrl: './desktop-sidebar.component.css'
})
export class DesktopSidebarComponent implements OnInit {
  constructor(private comFun: ComFunService) { }
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {

  }
}
