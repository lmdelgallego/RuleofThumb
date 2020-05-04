import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RulesOfThumb';
  showMenu = false;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'iconThumbUp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/icon-thumb-up.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'iconThumbDown',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/icon-thumb-down.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'iconSearch',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/icon-search.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'iconFacebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/icon-facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'iconTwitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/icon-twitter.svg')
    );
  }
}
