import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DataDetailComponent } from '../data-detail/data-detail.component';
import {MaterialInputTextComponent} from '../../../shared/forms/components/material-input-text/material-input-text.component';
import { MaterialTableComponent } from '../../../shared/forms/components/material-table/material-table.component';
import { SolarSystemElement } from '../../interfaces/interfaces';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
];

const PLANET_DATA: SolarSystemElement[] = [
  {
    position: 1,
    name: "Mercure",
    weight: "0,3301 × 10^24 kg",
    type: "tellurique",
    size: "4 880 km"
  },
  {
    position: 2,
    name: "Vénus",
    weight: "4,867 × 10^24 kg",
    type: "tellurique",
    size: "12 104 km"
  },
  {
    position: 1,
    name: "Terre",
    weight: "5,9742 × 10^24 kg",
    type: "tellurique",
    size: "12 742 km"
  },
  {
    position: 1,
    name: "Mars",
    weight: "6,421 × 10^23 kg",
    type: "tellurique",
    size: "6 779 km"
  },
  {
    position: 1,
    name: "Jupiter",
    weight: "1,8986 × 10^27 kg",
    type: "gazeuse",
    size: "142 984 km"
  },
  {
    position: 1,
    name: "Saturne",
    weight: "5,6834 × 10^26 kg",
    type: "gazeuse",
    size: "120 536 km"
  },
  {
    position: 1,
    name: "Uranus",
    weight: "8,6832 × 10^25 kg",
    type: "gazeuse",
    size: "51 118 km"
  },
  {
    position: 1,
    name: "Neptune",
    weight: "1,0835 × 10^26 kg",
    type: "gazeuse",
    size: "49 528 km"
  }
]

@Component({
  selector: 'app-search-data',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.css',
  imports: [
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    //-----composants spécifiques réutilisable
    DataDetailComponent,
    MaterialTableComponent,
    MaterialInputTextComponent
  ],
})
export class SearchDataComponent {
  //----------------------------
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  //----------------------------
  columns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //----------------------------
  columns2: string[] = ['position', 'name', 'weight', 'type', 'size', 'action'];
  dataSource2 = new MatTableDataSource(PLANET_DATA);
  //----------------------------
  editingElement!: PeriodicElement;

  onRowEdited(element: any) {
    console.log('Edition élément', element);
    this.editingElement = element;
  }


}
