import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAllowOverflow]',
  standalone: true,
})
export class AllowOverflowDirective {
  private ele = inject<ElementRef<HTMLElement>>(ElementRef);
  constructor() {
    let toolbar = this.ele.nativeElement;
    setTimeout(() => {
      let container = toolbar.shadowRoot?.querySelector('.toolbar-container') as HTMLLIElement;
      if (container) {
        container.style.overflow = 'visible'
        container.style.contain = 'none'
      }
    }, 200);
  }
}
