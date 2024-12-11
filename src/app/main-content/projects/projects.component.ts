import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hoveredImage: string | null = null;

  projects = [
    {
      name: 'Join',
      tech: 'HTML | CSS | JavaScript | Firebase',
      image: './assets/img/projects/join.png' 
    },
    {
      name: 'El Pollo Loco',
      tech: 'HTML | CSS | JavaScript',
      image: './assets/img/projects/loco.png'
    }
  ];

  showImage(imagePath: string) {
    this.hoveredImage = imagePath;
  }

  hideImage(){
    this.hoveredImage = null;
  }
}
