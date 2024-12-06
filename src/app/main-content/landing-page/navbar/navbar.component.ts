import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuHidden = true; // Zustand des Menüs

  toggleHamburgerMenu(): void {
    this.menuHidden = !this.menuHidden;
  }
}
