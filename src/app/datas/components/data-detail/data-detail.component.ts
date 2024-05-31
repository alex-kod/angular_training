import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ObjectKeysPipe } from '../../../core/pipe/ObjectKeysPipe';
import { TypeOfPipe } from "../../../core/pipe/TypeOfPipe "; 

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
        ObjectKeysPipe,
        TypeOfPipe
    ]
})
export class DataDetailComponent {

  @Input() editingElement!: { [key: string]: any };
  trackByFn(index: number, key: string): string {
    return key;
  }
}
