import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KontaktComponent } from './components/Kontakt/Kontakt.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { SanierungenComponent } from './components/sanierungen/sanierungen.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // ✅ Startseite als Standard
  { path: 'leistungen', component: LeistungenComponent },
  { path: 'sanierungen', component: SanierungenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'kontakt', component: KontaktComponent },
];
