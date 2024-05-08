import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PeriodicElement } from '../interfaces/interfaces';

@Component({
  selector: 'app-data-detail',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    // MatTableDataSource,
  ],
  templateUrl: './data-detail.component.html',
  styleUrl: './data-detail.component.css',
})
export class DataDetailComponent {
  @Input() editingElement!: PeriodicElement;
  @Input() dataSource!: PeriodicElement[];
}
