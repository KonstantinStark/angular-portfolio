import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../landing-page/navbar/navbar.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
