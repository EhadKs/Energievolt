import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeistungenComponent } from './components/Leistungen/leistungen.component';
import { KontaktComponent } from './components/Kontakt/Kontakt.component';
import { AboutComponent } from './components/about/about.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Leistungen', component: LeistungenComponent},
  { path: 'kontakt', component: KontaktComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
