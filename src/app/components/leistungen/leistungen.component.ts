import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-leistungen',
  imports: [CommonModule],
  templateUrl: './leistungen.component.html',
  styleUrls: [ './leistungen.component.css']
})
export class LeistungenComponent { 
  constructor() {
    console.log('LeistungenComponent geladen');
  }
  section: string = 'photovoltaik'; // Standardmäßig Abschnitt 1

  changeSection(sectionName: string) {
    this.section = sectionName;
  }


}
