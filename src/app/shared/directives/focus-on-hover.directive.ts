import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[focusOnHover]',
})
export class FocusOnHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  public onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', 0.8);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', 1);
  }
}
