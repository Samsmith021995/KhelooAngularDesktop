import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { catchError } from 'rxjs';
import { config } from '../../service/config';
import { ComFunService } from '../../service/com-fun.service';

@Component({
  selector: 'app-games-category',
  templateUrl: './games-category.component.html',
  styleUrl: './games-category.component.css'
})
export class GamesCategoryComponent implements OnInit {
  gameName!: string;
  gamesData: any[] = [];
  elementActive: boolean = true;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  canScrollLeft = false;
  canScrollRight = true;
  loopArray: number[] = [];
  constructor(private activeRooute: ActivatedRoute, private apiSer: ApiService, private comFun: ComFunService,private router:Router) { }
  gamesProvider = [
    {title:'ezugi',src:this.comFun.cdn+'provider/ezugi_1.svg'},
    {title:'red tiger',src:this.comFun.cdn+'provider/red-tiger-gaming.svg'},
    {title:'smartsoft',src:this.comFun.cdn+'provider/smartsoft-transformed.webp'},
    {title:'evolution gaming',src:this.comFun.cdn+'provider/evolution.svg'},
    {title:'habanero',src:this.comFun.cdn+'provider/habanero_1.svg'},
    {title:'play\'n go',src:this.comFun.cdn+'provider/playngo.svg'},
    {title:'playtech',src:this.comFun.cdn+'provider/Playtech-Logo.wine.svg'},
    {title:'tvbet',src:this.comFun.cdn+'provider/tvbet.png'},
    {title:'Pragmatic Play',src:this.comFun.cdn+'provider/3oaks.svg'},
    {title:'sexy',src:this.comFun.cdn+'provider/AE-Sexy.png'},
    {title:'Betsolutions',src:this.comFun.cdn+'provider/betgames.png'},
    {title:'charismatic',src:this.comFun.cdn+'provider/chrismatic.png'},
    {title:'fantasma games',src:this.comFun.cdn+'provider/fantasma_1.svg'},
    {title:'gamzix',src:this.comFun.cdn+'provider/gamzix_1.svg'},
    {title:'jili',src:this.comFun.cdn+'provider/jilli.png'},
    {title:'nolimit city',src:this.comFun.cdn+'provider/nolimit.svg'},
    {title:'pgsoft',src:this.comFun.cdn+'provider/pgsoft.png'},
    {title:'quickspin',src:this.comFun.cdn+'provider/quickspin.svg'},
    {title:'Relax Gaming',src:this.comFun.cdn+'provider/relax.svg'},
    {title:'netent',src:this.comFun.cdn+'provider/netent.svg'},
  ];
  
  ngOnInit(): void {
    this.activeRooute.params.subscribe(params => {
      this.gameName = params['id'];
     
        this.comFun.filterGames([this.gameName]).subscribe(filteredGames => {
          this.gamesData = [...filteredGames];
        });

    });
    this.loopArray = Array.from({ length: 60 }, (_, i) => i + 1);
  }

  gameStart(param: any) {
    this.comFun.checkLoginRedirect(param);
  }
  redirectCategory(item:string){
    this.router.navigate(['/gamesCat',item]);
  }

  checkScroll() {
    const scrollContainer = this.scrollContainer.nativeElement;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    this.canScrollLeft = scrollContainer.scrollLeft > 0;
    this.canScrollRight = Math.round(scrollContainer.scrollLeft) < Math.round(maxScrollLeft);
  }

  scroll(container: HTMLElement, direction: 'left' | 'right') {
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    setTimeout(() => this.checkScroll(), 300); // Adjust delay as needed
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
