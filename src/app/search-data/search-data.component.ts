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
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-search-data',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  ],
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.css',
})
export class SearchDataComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
