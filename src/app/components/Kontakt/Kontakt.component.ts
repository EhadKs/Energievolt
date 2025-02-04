import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,  // ✅ Wichtige Standalone-Komponente
  imports: [FormsModule],  // ✅ FormsModule für ngModel hinzufügen
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {
  contactForm = { name: '', email: '', message: '' };

  onSubmit() {
    console.log('Nachricht gesendet:', this.contactForm);
  }
} 