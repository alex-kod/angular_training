import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { SearchDataComponent } from '../search-data/search-data.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    SearchDataComponent,
  ],
})
export class HomeComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  smallMode = true;
  isCollapsed = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    /*
    BreakpointObserver est un outil fourni par Angular CDK (Angular Material https://material.angular.io/cdk)
    qui permet de vérifier l'état de correspondance des requêtes media. En d'autres termes, 
    il vous aide à réagir aux changements de taille de l'écran dans votre application Angular.
    */
    this.breakpointObserver
      .observe(['(max-width: 800px)']) //changements de taille d'écran où la largeur maximale est inférieure ou égale à 800 pixels.
      .subscribe((screenSize) => {
        if (screenSize.matches) {
          this.smallMode = true;
        } else {
          this.smallMode = false;
        }
        console.log('smallMode : ' + this.smallMode);
      });
  }

  toggleMenu() {
    if (this.smallMode) {
      this.sidenav.toggle();
      this.isCollapsed = false; // En smallMode, le menu ne peut jamais être collapsed
    } else {
      this.sidenav.open(); // Sinon en smallMode, le menu ne peut jamais être complétement fermé
      this.isCollapsed = !this.isCollapsed;
    }
  }

  isSubmenuOpen = false;
}
