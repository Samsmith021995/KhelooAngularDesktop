import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrl: './second-header.component.css'
})
export class SecondHeaderComponent implements OnInit {
@Input() title!: string;

  constructor() { }

  ngOnInit() {
  
}
}
