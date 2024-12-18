import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../landing-page/navbar/navbar.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
