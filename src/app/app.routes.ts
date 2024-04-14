import { Routes } from '@angular/router';
import { SearchDataComponent } from './search-data/search-data.component';
import { HomeComponent } from './home/home.component';
import { SomeDataFeature1Component } from './some-data-feature-1/some-data-feature-1.component';

export const routes: Routes = [
  { path: 'search', component: SearchDataComponent },
  { path: 'someDataFeature1', component: SomeDataFeature1Component },
  // lazylaod
  // {
  //   path: 'someDataFeature1',
  //   loadComponent: () =>
  //     import('./some-data-feature-1/some-data-feature-1.component').then(
  //       (c) => c.SomeDataFeature1Component
  //     ),
  // },
];
