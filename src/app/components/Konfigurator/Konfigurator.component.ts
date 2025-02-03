import { Component } from '@angular/core';

@Component({
  selector: 'app-configurator',
  templateUrl: './Konfigurator.component.html',
  styleUrls: ['./Konfigurator.component.css']
})
export class ConfiguratorComponent {
  offer = {
    type: '',
    budget: 0
  };

  onSubmit() {
    console.log('Konfiguriertes Angebot:', this.offer);
    alert('Ihr Angebot wurde erstellt!');
  }
}
