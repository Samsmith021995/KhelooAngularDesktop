import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription, catchError } from 'rxjs';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-game-platform',
  templateUrl: './game-platform.component.html',
  styleUrl: './game-platform.component.css'
})
export class GamePlatformComponent {
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  id: number = 0;
  pltSource !: SafeHtml;
  isLoading: boolean = false;
  btnLoading: boolean = false
  constructor(private router: ActivatedRoute, private api: ApiService, private sanitizer: DomSanitizer) {


  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getGames(this.id);
    });
    this.loaderSubscriber = this.api.loaderService.loading$.pipe(
      catchError((error) => {
        throw error
      })
    ).subscribe((loading: any = {}) => {
      this.btnLoading = ('getProvider' in loading) ? true : false;
    });
    //  this.api.isLoading$.subscribe((isLoading) => {
    //   this.isLoading = isLoading;
    // });
  }


  getGames(id: number) {
    // this.api.loaderShow();
    let params = { game_id: id };
    this.api.apiRequest(config['getProvider'], params).subscribe({
      next: data => {
        // this.api.loaderHide();
        if (data.ErrorCode == '1') {
          this.pltSource = this.sanitizer.bypassSecurityTrustResourceUrl(data.Result);
        } else {
          this.api.showAlert(data.ErrorMessage, '', 'error');
        }
      },
      error: err => {
        this.api.showAlert('Something Went Wrong', 'please check your Internet Connection', 'error');
        // this.api.loaderHide();
      }
    });
  }
}
