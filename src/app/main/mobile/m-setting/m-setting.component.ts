import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-m-setting',
  templateUrl: './m-setting.component.html',
  styleUrl: './m-setting.component.css'
})
export class MSettingComponent implements OnInit {
  @ViewChild('changePass') resetForm !: TemplateRef<any>;
  userDetails: any;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  isLoading: boolean = false;
  constructor(private apiSer: ApiService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('getUserProfile' in loading) ? true : false;
    });
    this.getUserDetails();
  }
  getUserDetails() {
    this.apiSer.apiRequest(config['getUserProfile']).pipe(catchError((Error) => {
      throw Error;
    })).subscribe((data) => {
      this.userDetails = data;
    });
  }
  resetDialog() {
    let diaRef = this.dialog.open(this.resetForm);
    diaRef.afterClosed().subscribe(result => { });
  }
  closePopup() {
    this.dialog.closeAll();
  }
}
