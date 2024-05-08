import { Component, Input, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PeriodicElement } from '../interfaces/interfaces';
// import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-detail',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatTableDataSource,
  ],
  templateUrl: './data-detail.component.html',
  styleUrl: './data-detail.component.css',
})
export class DataDetailComponent {
  // @input() element!: PeriodicElement;
  @Input() editingElement!: PeriodicElement;
  @Input() dataSource!: MatTableDataSource<PeriodicElement[]>;
}
