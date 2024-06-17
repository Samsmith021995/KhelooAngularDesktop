import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonServiceService } from './main/service/common-service.service';
import { register } from 'swiper/element/bundle';
// import { CommonServiceService } from './service/common-service.service';
import { Router,NavigationEnd } from '@angular/router';
import { ApiService } from './main/service/api.service';
register();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'KhelooAngularDesktop';
  isSmallScreen!:boolean;
  private observer!: MutationObserver;
  constructor(private router:Router,private commonSer:CommonServiceService,private apiSer:ApiService){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.refreshHeader(); 
        window.scrollTo(0, 0);
        this.apiSer.updateMetaTags();
      }
    });
    this.commonSer.myVariable$.subscribe((width)=>{
      this.isSmallScreen = width === "true";
    });   
    this.loadTawkScript();
    window.addEventListener('resize', this.handleResize);
   
  }

  refreshHeader(){
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.commonSer?.startloging('login');
    } else {
      this.commonSer?.stoploging('login');
    }
  }
 
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private loadTawkScript(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/60a22370185beb22b30ddc1d/1f5slks90';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.onload = () => {
      this.applyCustomStyles();
      this.initObserver();
    };
    document.head.appendChild(script);
  }

  private applyCustomStyles(): void {
    const style = document.createElement('style');
    style.innerHTML = `
      iframe[title="chat widget"] {
        right: 0 !important;
        left: auto !important;
        bottom: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  private initObserver(): void {
    this.observer = new MutationObserver(this.handleWidgetMutation);
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  private handleWidgetMutation = (): void => {
    const tawkWidgetIframe = document.querySelector('iframe[title="chat widget"]') as HTMLElement | null;
    // const tawkChatContainer = document.querySelector('iframe title="chat widget"] .open') as HTMLElement | null;

    if (tawkWidgetIframe) {
      this.applyInlineStyles(tawkWidgetIframe);
      this.toggleWidgetVisibility(tawkWidgetIframe);
    }
    // if (tawkChatContainer) {
    //   this.applyChatContainerStyles(tawkChatContainer);
    // }
  }
  private applyChatContainerStyles(container: HTMLElement): void {
    container.style.right = '0';
    container.style.left = 'auto';
  }
  private handleResize = (): void => {
    const tawkWidgetIframe = document.querySelector('iframe[title="chat widget"]') as HTMLElement | null;
    if (tawkWidgetIframe) {
      this.toggleWidgetVisibility(tawkWidgetIframe);
    }
  }
  private applyInlineStyles(iframe: HTMLElement): void {
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.left = 'auto ';
    iframe.style.bottom = '0';
    iframe.style.zIndex = '9999';
  }

  private toggleWidgetVisibility(iframe: HTMLElement): void {
    if (window.innerWidth < 768) {
      iframe.style.display = 'none';
    } else {
      iframe.style.display = 'block';
    }
  }
}
