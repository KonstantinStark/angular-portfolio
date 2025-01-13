import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  menuHidden = true;

  constructor(public translationService: TranslationService) {}

  toggleHamburgerMenu() {
    this.menuHidden = !this.menuHidden;
  }

  switchLanguage() {
    this.translationService.switchLanguage();
  }
}