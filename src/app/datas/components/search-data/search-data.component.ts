import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DataDetailComponent } from '../data-detail/data-detail.component';
import { MaterialTableComponent } from '../../../shared/forms/components/material-table/material-table.component';
import { CodificationElement, PeriodicElement, SolarSystemElement } from '../../interfaces/interfaces';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



const MOCK_DATABASE_CODIFICATION: CodificationElement[] = [
  { code_a: 'code_a_1', code_b: 'code_b_1', code_c: 'code_c_1', code_d: 'code_d_1', data_codif: 'data_codif_1' },
  { code_a: 'code_a_1', code_b: 'code_b_2', code_c: 'code_c_2', code_d: 'code_d_2', data_codif: 'data_codif_2' },
  { code_a: 'code_a_1', code_b: 'code_b_3', code_c: 'code_c_3', code_d: 'code_d_2', data_codif: 'data_codif_3' },
  { code_a: 'code_a_1', code_b: 'code_b_1', code_c: 'code_c_3', code_d: 'code_d_3', data_codif: 'data_codif_4' },
  { code_a: 'code_a_1', code_b: 'code_b_2', code_c: 'code_c_2', code_d: 'code_d_4', data_codif: 'data_codif_5' },
  { code_a: 'code_a_1', code_b: 'code_b_3', code_c: 'code_c_1', code_d: 'code_d_5', data_codif: 'data_codif_6' },
  //-----------------------------------------------
  { code_a: 'code_a_2', code_b: 'code_b_1', code_c: 'code_c_1', code_d: 'code_d_5', data_codif: 'data_codif_7' },
  { code_a: 'code_a_2', code_b: 'code_b_2', code_c: 'code_c_2', code_d: 'code_d_2', data_codif: 'data_codif_8' },
  { code_a: 'code_a_2', code_b: 'code_b_3', code_c: 'code_c_3', code_d: 'code_d_2', data_codif: 'data_codif_9' },
  { code_a: 'code_a_2', code_b: 'code_b_4', code_c: 'code_c_1', code_d: 'code_d_3', data_codif: 'data_codif_10' },
  { code_a: 'code_a_2', code_b: 'code_b_5', code_c: 'code_c_2', code_d: 'code_d_3', data_codif: 'data_codif_11' },
  { code_a: 'code_a_2', code_b: 'code_b_6', code_c: 'code_c_3', code_d: 'code_d_1', data_codif: 'data_codif_12' },
];

const MOCK_DATABASE_ELEMENT_DATA: PeriodicElement[] = [
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

const MOCK_DATABASE_PLANET_DATA: SolarSystemElement[] = [
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
    ReactiveFormsModule,
    MatSelectModule,
    //-----composants spécifiques réutilisable
    DataDetailComponent,
    MaterialTableComponent,
  ],
})
export class SearchDataComponent implements OnInit {
  elements = MOCK_DATABASE_ELEMENT_DATA;
  constructor(private formBuilder: FormBuilder) { }

  //----------------------------
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  //----------------------------
  codificationData: CodificationElement[] = MOCK_DATABASE_CODIFICATION;

  codeAOptions: string[] = []; // Options for code_a dropdown
  selectedCodeA!: string;

  codeBOptions: string[] = []; // Options for code_b dropdown
  selectedCodeB!: string;

  // codeCOptions: string[] = []; // Options for code_C dropdown
  // selectedCodeC!: string;

  // codeDOptions: string[] = []; // Options for code_d dropdown
  // selectedCodeD!: string;

  // dataCodifOptions: string[] = []; // Options for data_codif dropdown
  // selectedDataCodif!: string;

  getUniqueOptions(data: any[], property: string): string[] {
    const uniqueSet = new Set(data.map(element => element[property]));
    return Array.from(uniqueSet);
  }

  initDropDown() {
    this.codeAOptions = this.getUniqueOptions(this.codificationData, 'code_a');
    //------------------------------
    this.codeBOptions = this.getUniqueOptions(this.codificationData, 'code_b');
    // //-----------------------------
    // this.codeCOptions = this.getUniqueOptions(this.codificationData, 'code_c');
    // //------------------------------
    // this.codeDOptions = this.getUniqueOptions(this.codificationData, 'code_d');
    // //------------------------------
    // this.dataCodifOptions = this.getUniqueOptions(this.codificationData, 'data_codif');
  }

  getUniqueFiltredOptions(data: any[], dropdownOrigin: string, property: string, selectedCode: string): string[] {
    const uniqueSet = new Set(
      data
        .filter(element => element[dropdownOrigin] === selectedCode)
        .map(element => element[property]));
    console.log("uniqueSet : " + Array.from(uniqueSet));
    return Array.from(uniqueSet);
  }


  trigerfilterCodeOptions(dropdownOrigin: string, selectedCode: string) {

    console.log("dropdownOrigin : " + dropdownOrigin);
    console.log("selectedCode : " + selectedCode);


    console.log("==> populateCodeAOptions");
    this.codeAOptions = this.getUniqueFiltredOptions(this.codificationData, dropdownOrigin, 'code_a', selectedCode)
    if (this.codeAOptions.length < 2) {//uniquement si valeur unique
      this.selectedCodeA = selectedCode;
      console.log("-> set selectedCodeA : "+this.codeAOptions[0]);
    }

    console.log("==> populateCodeBOptions");
    this.codeBOptions = this.getUniqueFiltredOptions(this.codificationData, dropdownOrigin, 'code_b', selectedCode)
    if (this.codeBOptions.length < 2) {//uniquement si valeur unique
      this.selectedCodeB = selectedCode;
      console.log("-> set selectedCodeB : "+this.codeBOptions[0]);
    }


    console.log("========");
    // this.codeCOptions = this.getUniqueFiltredOptions(this.codificationData, 'code_c', selectedCode)
    // this.codeDOptions = this.getUniqueFiltredOptions(this.codificationData, 'code_d', selectedCode)
    // this.dataCodifOptions = this.getUniqueFiltredOptions(this.codificationData, 'data_codif', selectedCode)

  }

  //----------------------------
  columns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource(MOCK_DATABASE_ELEMENT_DATA);

  //----------------------------
  columns2: string[] = ['position', 'name', 'weight', 'type', 'size', 'action'];
  dataSource2 = new MatTableDataSource(MOCK_DATABASE_PLANET_DATA);

  //----------------------------
  simpleForm!: FormGroup;
  urlRegex!: RegExp;
  editingElement!: PeriodicElement;

  //----------------------------
  onRowEdited(element: any) {
    console.log('Edition élément', element);
    this.editingElement = element;
  }

  labelTitre!: string;
  formControlNameTitre!: string;

  ngOnInit(): void {

    /*Les Validators sont des fonctions, mais attention à ne pas mettre les parenthèses  ()  . 
    Par exemple, ne mettez pas  Validators.required(), mais bien  Validators.required. 
    On passe la fonction comme argument – on ne l'appelle pas.*/
    this.simpleForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      codeA: [null],
      codeB: [null]
    }, {
      updateOn: 'blur'  /*uniquement lorsque l'utilisateur change de champ, c'est-à-dire lors du  blur  des différents champs.*/
    });

    this.initDropDown();

  }



  onSubmitForm() {
    console.log(this.simpleForm.value);
    this.filterElements();
  }

  filterElements() {
    const name = this.simpleForm.value.name.toLowerCase();
    this.elements = MOCK_DATABASE_ELEMENT_DATA.filter(element =>
      element.name.toLowerCase().includes(name)
    );
    this.dataSource.data = this.elements;
  }

}


