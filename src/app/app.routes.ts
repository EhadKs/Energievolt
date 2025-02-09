import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeistungenComponent } from './components/Leistungen/leistungen.component';
import { KontaktComponent } from './components/Kontakt/Kontakt.component';
import { AboutComponent } from './components/about/about.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { FAQComponent } from './components/faq/faq.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leistungen', component: LeistungenComponent},
  { path: 'kontakt', component: KontaktComponent },
  { path: 'about', component: AboutComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'faq', component: FAQComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
