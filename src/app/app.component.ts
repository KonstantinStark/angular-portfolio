import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'routing-app';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
  }
}
