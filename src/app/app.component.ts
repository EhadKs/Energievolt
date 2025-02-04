import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/Header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],  // ✅ Header + Footer importieren
  template: `
    <app-header></app-header>  <!-- ✅ Navbar oben -->
    <router-outlet></router-outlet>  <!-- ✅ Inhalte hier laden -->
    <app-footer></app-footer>  <!-- ✅ Footer unten -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
