import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,  // ✅ Wichtige Standalone-Komponente
  imports: [FormsModule],  // ✅ FormsModule für ngModel hinzufügen
  templateUrl: './Kontakt.component.html',
  styleUrls: ['./Kontakt.component.css']
})
export class KontaktComponent {
  contactForm = { name: '', email: '', message: '' };

  onSubmit() {
    console.log('Nachricht gesendet:', this.contactForm);
  }
} 