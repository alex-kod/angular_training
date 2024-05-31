import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PeriodicElement } from '../../interfaces/interfaces';
import { ObjectKeysPipe } from '../../../core/pipe/ObjectKeysPipe';
import { TypeOfPipe } from "../../../core/pipe/TypeOfPipe ";  // Import du pipe

@Component({
    selector: 'app-data-detail',
    standalone: true,
    templateUrl: './data-detail.component.html',
    styleUrl: './data-detail.component.css',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        ObjectKeysPipe
        // MatTableDataSource,
        ,
        TypeOfPipe
    ]
})
export class DataDetailComponent {
  // @Input() editingElement!: any;
  @Input() editingElement!: { [key: string]: any };
  // @Input() dataSource!: PeriodicElement[];

  trackByFn(index: number, key: string): string {
    return key;
  }
}
