import { Routes } from '@angular/router';
import { SearchDataComponent } from './search-data/search-data.component';
import { HomeComponent } from './home/home.component';
import { SomeDataFeature1Component } from './some-data-feature-1/some-data-feature-1.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchDataComponent },
  { path: 'someDataFeature1', component: SomeDataFeature1Component },
];
