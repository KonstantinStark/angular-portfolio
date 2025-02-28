import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hoveredImage: string | null = null;
  isOverlayVisible: boolean = false;
  selectedProject: any = null;
  currentProjectIndex = 0;

  projects = [
    {
      number: '01',
      name: 'El Pollo Loco',
      skill: 'JavaScript | HTML | CSS ',
      image: './assets/img/projects/loco.png',
      imageOverlay: './assets/img/projects/locoOverlay.png',
      description: 'PROJECTS.DESCRIPTION_1',
      skillIcons: [
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
      ],
      githubUrl: 'https://github.com/KonstantinStark/El-Pollo-Loco',
      liveTestUrl: 'https://www.loco.konstantin-stark.de/',
    },
    {
      number: '02',
      name: 'Join',
      skill: 'JavaScript | Firebase | HTML | CSS ',
      image: './assets/img/projects/joinSoon.png',
      imageOverlay: './assets/img/projects/joinOverlaySoon.png',
      description: 'PROJECTS.DESCRIPTION_2',
      skillIcons: [
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/firebase.png' },
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
      ],
      githubUrl: 'https://github.com/KonstantinStark/join',
      liveTestUrl: 'finished soon',
    },
    {
      number: '03',
      name: 'Pokedex',
      skill: 'JavaScript | Rest-Api | HTML | CSS ',
      image: './assets/img/projects/poke.png',
      imageOverlay: './assets/img/projects/pokeOverlay.png',
      description: 'PROJECTS.DESCRIPTION_3',
      skillIcons: [
        { image: './assets/img/projects/js.png' },
        { image: './assets/img/projects/html.png' },
        { image: './assets/img/projects/css.png' },
      ],
      githubUrl: 'https://github.com/KonstantinStark/Pokedex',
      liveTestUrl: 'https://www.pokedex.konstantin-stark.de/',
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
  constructor(private languageService: TranslationService) { }
  translate = inject(TranslationService);
}
