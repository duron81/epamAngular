import { Directive, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]'
})
export class ClickStopPropagationDirective {

  @HostListener("mouseover", ["$event"])
    public onClick(event: Event): void
    {
      if (event) {
        event.stopPropagation();
      }
    }

}
