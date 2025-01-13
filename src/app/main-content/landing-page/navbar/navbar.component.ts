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
[x: string]: any;
  menuHidden = true;

  toggleHamburgerMenu() {
    this.menuHidden = !this.menuHidden;
  }

  constructor(private languageService: TranslationService) { }
  translate = inject(TranslationService);
}
