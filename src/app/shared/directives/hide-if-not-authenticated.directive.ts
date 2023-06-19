import { ChangeDetectorRef, Directive, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

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


  @HostListener('click')
  onClick(): void {
    this.updateRendering();
  }

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
      console.log('should not be rendered in custom directive');
    } else {
      console.log('should render in custom directive');
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }


  // ngOnInit(): void {
  //   // console.log('herre');
  //   if(!this.authService.isAuthenticated()) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }
  
  // ngOnDestroy() {
  //   this.unsubscribe();
  // }

  // private unsubscribe() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  // ngOnChanges(): void {
  //   this.hideIfAuthenticated();
  // };

  // ngOnInit(): void {
  //   this.hideIfAuthenticated();
  // }

  // private toggleView(isAuthenticated: boolean) {
  //   if (isAuthenticated) {
  //     this.viewContainer.clear();
  //   } else {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   }
  // }

  // hideIfAuthenticated() {
  //   if (this.authService.isAuthenticated() === true) {
  //     this.viewContainer.clear();
  //     console.log('true');
  //     console.log(this.authService.getUserLogin());
  //   } else {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //     console.log('false');
  //   }
  // }
}
