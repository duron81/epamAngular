import { Directive,  OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';


@Directive({
  selector: '[appHideIfNotAuthenticated]'
})
export class HideIfNotAuthenticatedDirective implements OnInit, OnChanges {

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.updateRendering();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateRendering();
  }

  private updateRendering(): void {
    const shouldHide: boolean = !this.authService.isAuthenticated();

    if (shouldHide) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
