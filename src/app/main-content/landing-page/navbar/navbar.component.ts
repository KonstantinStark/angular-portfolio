import { Component } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  menuHidden = true;

  constructor(private languageService: TranslationService) { }

  toggleHamburgerMenu() {
    this.menuHidden = !this.menuHidden;
  }

  switchLanguage() {
    const currentLang = this.languageService.getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'de' : 'en';
    this.languageService.switchLanguage(newLang);
  }
}