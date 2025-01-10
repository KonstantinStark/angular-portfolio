import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';

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

  translates = inject(TranslationService)
}
