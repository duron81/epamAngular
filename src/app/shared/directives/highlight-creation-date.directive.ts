import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCreationDate]'
})
export class HighlightCreationDateDirective implements OnInit {

  @Input() appHighlightCreationDate: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.checkCreationDate();
  }

  private checkCreationDate() {
    const currentDate = new Date();
    const millisecondsIn14days = 14 * 24 * 60 * 60 * 1000;
    if(this.appHighlightCreationDate) {
      const date = new Date(this.appHighlightCreationDate);
      if (date < currentDate 
        && date.getTime() >= (currentDate.getTime() - millisecondsIn14days)) {
          this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
      } else if (date > currentDate) {
          this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
      } 
    }
  }

}
