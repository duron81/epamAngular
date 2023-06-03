import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCreationDate]'
})
export class HighlightCreationDateDirective implements OnInit {

  @Input() appHighlightCreationDate: Date | undefined = new Date();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkCreationDate(this.el);
  }

  private checkCreationDate(el: ElementRef) {
    const currentDate = new Date();
    const millisecondsIn14days = 14 * 24 * 60 * 60 * 1000;
    if(this.appHighlightCreationDate) {
      if (this.appHighlightCreationDate < currentDate 
        && this.appHighlightCreationDate.getTime() >= (currentDate.getTime() - millisecondsIn14days)) {
          this.el.nativeElement.style.borderColor = 'green'
      } else if (this.appHighlightCreationDate > currentDate) {
          this.el.nativeElement.style.borderColor = 'blue'
      } 
    }
  }

}
