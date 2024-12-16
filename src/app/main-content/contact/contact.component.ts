import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] 
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit() {
    console.log(this.contactData);
    
  }
}
