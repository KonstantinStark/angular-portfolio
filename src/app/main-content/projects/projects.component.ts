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
  isOverlayVisible: boolean = false;
  selectedProject: any = null;

  projects = [
    {
      number: '01',
      name: 'Join',
      skill: 'HTML | CSS | JavaScript | Firebase',
      image: './assets/img/projects/join.png',
      imageOverlay: './assets/img/projects/joinOverlay.png',
      description: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      skillIcons: [] = [
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/firebase.png' },
      ],
    },
    {
      number: '02',
      name: 'El Pollo Loco',
      skill: 'HTML | CSS | JavaScript',
      image: './assets/img/projects/loco.png',
      imageOverlay: './assets/img/projects/locoOverlay.png',
      description: 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      skillIcons: [] = [
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
        { image: './assets/img/projects/js.png' },
      ],
    }
  ];

  showImage(imagePath: string) {
    this.hoveredImage = imagePath;
  }

  hideImage() {
    this.hoveredImage = null;
  }

  openOverlay(project: any) {
    this.selectedProject = project;
    this.isOverlayVisible = true;
  }

  closeOverlay() {
    this.isOverlayVisible = false;
    this.selectedProject = null;
  }
}
