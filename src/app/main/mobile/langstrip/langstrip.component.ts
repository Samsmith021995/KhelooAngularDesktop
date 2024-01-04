import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-langstrip',
  templateUrl: './langstrip.component.html',
  styleUrl: './langstrip.component.css'
})
export class LangstripComponent implements OnInit {
  @ViewChild('langstripPop') langstripPop !:TemplateRef<any>;
  defref:any;
  constructor(private dialog:MatDialog,private apiSer:ApiService){

  }
ngOnInit(): void {
  this.apiSer.loadTranslateScript();
}

openDialog(){
  this.defref = this.dialog.open(this.langstripPop);
  this.defref.afterClosed().subscribe(()=>{});
}
  Onclose(){
    this.defref.close();
  }
  changelanguage(item:string){
    
    this.apiSer.googleTranslateElementInit(item);
  }
}
