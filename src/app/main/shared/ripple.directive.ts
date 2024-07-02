import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const button = this.el.nativeElement;
    const rect = button.getBoundingClientRect();
    const ripple = this.renderer.createElement('span');

    const maxDimension = Math.max(rect.width, rect.height);
    this.renderer.setStyle(ripple, 'width', `${maxDimension * 1}px`);
    this.renderer.setStyle(ripple, 'height', `${maxDimension * 1}px`);
    // this.renderer.setStyle(ripple, 'left', `${event.clientX - rect.left - maxDimension}px`);
    // this.renderer.setStyle(ripple, 'top', `${event.clientY - rect.top - maxDimension}px`);
    this.renderer.addClass(ripple, 'ripple');

    this.renderer.appendChild(button, ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}
