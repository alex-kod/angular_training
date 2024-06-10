import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-material-table',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatTableModule,
    CdkDropList,
    CdkDrag,
    MatPaginator,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
  ],
  templateUrl: './material-table.component.html',
  styleUrl: './material-table.component.css'
})

export class MaterialTableComponent {
  //----------------------------
  @Input() columns!: string[];
  @Input() dataSource!: MatTableDataSource<any>;
  //----------------------------
  @Output() editRow = new EventEmitter<any>();
  //----------------------------
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
 
  onColumnRemoved(column: string) {
    console.log('Column removed', column);
    this.columns = this.columns.filter(col => col !== column);
    console.log('Columns list is : ', column);
  }

  removeColumn(colonneASupprimer: string) {
    let index = this.columns.indexOf(colonneASupprimer);
    console.log('index colonne supprimé : ' + index);
    this.columns.splice(index, 1);
    console.log(this.columns);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    console.log(this.columns);
  }

  sortTable(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
