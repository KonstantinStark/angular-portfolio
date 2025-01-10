import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
[x: string]: any;
  menuHidden = true;

  toggleHamburgerMenu() {
    this.menuHidden = !this.menuHidden;
  }

  switchLanguage(language: string) {
    this['translationService'].switchLanguage(language);
  }
}
