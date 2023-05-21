import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  imageUrl: SafeResourceUrl;

  constructor (private sanitizer: DomSanitizer) {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/logo.png'); 
  }
}
