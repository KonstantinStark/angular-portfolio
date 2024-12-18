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

  currentProjectIndex = 0; // Start mit dem ersten Projekt

  projects = [
    {
      number: '01',
      name: 'El Pollo Loco',
      skill: 'JavaScript | HTML | CSS ',
      image: './assets/img/projects/loco.png',
      imageOverlay: './assets/img/projects/locoOverlay.png',
      description: 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      skillIcons: [
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
      ],
    },
    {
      number: '02',
      name: 'Join',
      skill: 'JavaScript | Firebase | HTML | CSS ',
      image: './assets/img/projects/join.png',
      imageOverlay: './assets/img/projects/joinOverlay.png',
      description: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      skillIcons: [
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/firebase.png' },
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
      ],
    },
    {
      number: '03',
      name: 'Pokedex',
      skill: 'JavaScript | Rest-Api | HTML | CSS ',
      image: './assets/img/projects/poke.png',
      imageOverlay: './assets/img/projects/pokeOverlay.png',
      description: 'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.',
      skillIcons: [
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
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

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentProjectIndex];
    this.isOverlayVisible = true;
  }
}
