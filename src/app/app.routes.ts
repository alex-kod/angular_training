import { Routes } from '@angular/router';
import { SearchDataComponent } from './datas/components/search-data/search-data.component';
import { SomeDataFeature1Component } from './datas/components/some-data-feature-1/some-data-feature-1.component';

export const routes: Routes = [
  { path: 'search', component: SearchDataComponent },
  { path: 'someDataFeature1', component: SomeDataFeature1Component },
];
