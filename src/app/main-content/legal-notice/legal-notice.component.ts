import { Component, inject } from '@angular/core';
import { TranslationService } from './../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../landing-page/navbar/navbar.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private languageService: TranslationService) { }
  translate = inject(TranslationService);
}
