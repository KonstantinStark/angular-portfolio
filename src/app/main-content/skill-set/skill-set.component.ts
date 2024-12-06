import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})

export class SkillSetComponent {
  icons: {
    name: string;
    image: string;
  }[] = [
      { name: 'HTML', image: './assets/img/skill-set/HTML.png' },
      { name: 'CSS', image: './assets/img/skill-set/17. Skill animation.png' },
      { name: 'JavaScript', image: './assets/img/skill-set/JavaScript.png' },
      { name: 'TypeScript', image: './assets/img/skill-set/TypeScript.png' },
      { name: 'Angular', image: './assets/img/skill-set/Angular.png' },
      { name: 'Firebase', image: './assets/img/skill-set/Firebase.png' },
      { name: 'GIT', image: './assets/img/skill-set/GIT.png' },
      { name: 'Material Design', image: './assets/img/skill-set/Material Design.png' },
      { name: 'Rest-Api', image: './assets/img/skill-set/Rest-Api.png' },
      { name: 'Scrum', image: './assets/img/skill-set/Scrum.png' },
      { name: 'Growth mindset', image: './assets/img/skill-set/18. Growth Mindset interaction.png' }
    ];
}