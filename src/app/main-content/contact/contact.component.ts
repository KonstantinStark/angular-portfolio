import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    terms: false,
  }

  get img(): string {
    return this.contactData.terms
      ? 'assets/img/contact/Checked.png'
      : 'assets/img/contact/Default.png';
  }

  toggleTerms() {
    this.contactData.terms = !this.contactData.terms;
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
