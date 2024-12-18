import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// http = inject(HttpClient);

//   contactData = {
//     name: "",
//     email: "",
//     message: "",
//     terms: false,
//   }

//   mailTest = true;

//   post = {
//     endPoint: 'https://konstantin-stark.de/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };

//   onSubmit(ngForm: NgForm) {
//     if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//       this.http.post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: (response) => {

//             ngForm.resetForm();
//           },
//           error: (error) => {
//             console.error(error);
//           },
//           complete: () => console.info('send post complete'),
//         });
//     } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

//       ngForm.resetForm();
//     }
//   }


<table style="font-family: Arial, sans-serif; color: #ffffff; background-color: #00332f; max-width: 600px; border-radius: 8px; padding: 10px;">
  <tr>
    <!-- Logo -->
    <td style="vertical-align: middle; padding-right: 10px;">
      <img src="https://deine-domain.de/starklogo.png" alt="Konstantin Stark Logo" width="70" style="display: block; border-radius: 50%;">
    </td>
    <!-- Name und Jobtitel -->
    <td style="padding: 10px;">
      <h2 style="margin: 0; color: #00bfa6; font-size: 18px;">Konstantin Stark</h2>
      <p style="margin: 0; color: #aaaaaa; font-size: 14px;">Frontend Developer</p>
    </td>
  </tr>
  <tr>
    <!-- Kontaktinformationen -->
    <td colspan="2" style="padding: 10px; border-top: 1px solid #00bfa6;">
      <p style="margin: 0; font-size: 12px; color: #ffffff;">
        📧 <a href="mailto:konstantin.stark.dev@gmail.com" style="color: #00bfa6; text-decoration: none;">konstantin.stark.dev@gmail.com</a><br>
        💼 <a href="https://www.linkedin.com" style="color: #00bfa6; text-decoration: none;">LinkedIn</a> |
        🌐 <a href="https://www.deine-portfolio-website.de" style="color: #00bfa6; text-decoration: none;">Portfolio</a>
      </p>
    </td>
  </tr>
</table>