import { Component, signal } from '@angular/core';
import { DaccSideMenuComponent, TitleColor } from "dacc-side-menu";

@Component({
  selector: 'app-root',
  imports: [ DaccSideMenuComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dacc-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
