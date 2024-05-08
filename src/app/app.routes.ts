import { Routes } from '@angular/router';
import { SearchDataComponent } from './search-data/search-data.component';
import { SomeDataFeature1Component } from './some-data-feature-1/some-data-feature-1.component';

export const routes: Routes = [
  { path: 'search', component: SearchDataComponent },
  { path: 'someDataFeature1', component: SomeDataFeature1Component },
];
