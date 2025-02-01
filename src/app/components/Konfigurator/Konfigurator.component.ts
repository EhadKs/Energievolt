import { Component } from '@angular/core';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
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
