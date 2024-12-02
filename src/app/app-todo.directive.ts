import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppTodo]',
  standalone: true
})
export class AppTodoDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setShadow(shadow: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', shadow);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setShadow('5px 5px 10px 2px rgba(0,0,0,0.5)');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setShadow('none');
  }
}
