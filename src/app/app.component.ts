import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  appTitle = 'routing-app';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
  }

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle('Frontend Developer - Konstantin Stark');
    this.meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'Konstantin Stark' },
      { property: 'og:title', content: 'Frontend Developer' },
      { property: 'og:description', content: 'Portfolio' },
      { property: 'og:image', content: 'https://www.konstantin-stark.de/assets/img/navbar/starklogo.png' },
      { property: 'og:url', content: 'https://konstantin-stark.de' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ]);
  }
}
