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
import { CodificationElement, dropDownItem, PeriodicElement, SolarSystemElement } from '../../interfaces/interfaces';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const MOCK_DATABASE_CODIFICATION: CodificationElement[] = [
  { code_a: 'code_a_1', lib_a: 'lib_a_1', code_b: 'code_b_1', lib_b: 'lib_b_1', code_c: 'code_c_1', lib_c: 'lib_c_1', code_d: 'code_d_1', lib_d: 'lib_d_1', data_codif: 'data_codif_1', lib_data_codif: 'lib_data_codif_1' },
  { code_a: 'code_a_1', lib_a: 'lib_a_1', code_b: 'code_b_2', lib_b: 'lib_b_2', code_c: 'code_c_2', lib_c: 'lib_c_2', code_d: 'code_d_2', lib_d: 'lib_d_2', data_codif: 'data_codif_2', lib_data_codif: 'lib_data_codif_2' },
  { code_a: 'code_a_1', lib_a: 'lib_a_1', code_b: 'code_b_3', lib_b: 'lib_b_3', code_c: 'code_c_3', lib_c: 'lib_c_3', code_d: 'code_d_2', lib_d: 'lib_d_2', data_codif: 'data_codif_3', lib_data_codif: 'lib_data_codif_3' },
  { code_a: 'code_a_1', lib_a: 'lib_a_1', code_b: 'code_b_1', lib_b: 'lib_b_1', code_c: 'code_c_3', lib_c: 'lib_c_3', code_d: 'code_d_3', lib_d: 'lib_d_3', data_codif: 'data_codif_4', lib_data_codif: 'lib_data_codif_4' },
  { code_a: 'code_a_1', lib_a: 'lib_a_1', code_b: 'code_b_2', lib_b: 'lib_b_2', code_c: 'code_c_2', lib_c: 'lib_c_2', code_d: 'code_d_4', lib_d: 'lib_d_4', data_codif: 'data_codif_5', lib_data_codif: 'lib_data_codif_5' },
  { code_a: 'code_a_1', lib_a: 'lib_a_1', code_b: 'code_b_3', lib_b: 'lib_b_3', code_c: 'code_c_1', lib_c: 'lib_c_1', code_d: 'code_d_5', lib_d: 'lib_d_5', data_codif: 'data_codif_6', lib_data_codif: 'lib_data_codif_6' },
  //-----------------------------------------------
  { code_a: 'code_a_2', lib_a: 'lib_a_2', code_b: 'code_b_1', lib_b: 'lib_b_1', code_c: 'code_c_1', lib_c: 'lib_c_1', code_d: 'code_d_5', lib_d: 'lib_d_5', data_codif: 'data_codif_7', lib_data_codif: 'lib_data_codif_7' },
  { code_a: 'code_a_2', lib_a: 'lib_a_2', code_b: 'code_b_2', lib_b: 'lib_b_2', code_c: 'code_c_2', lib_c: 'lib_c_2', code_d: 'code_d_2', lib_d: 'lib_d_2', data_codif: 'data_codif_8', lib_data_codif: 'lib_data_codif_8' },
  { code_a: 'code_a_2', lib_a: 'lib_a_2', code_b: 'code_b_3', lib_b: 'lib_b_3', code_c: 'code_c_3', lib_c: 'lib_c_3', code_d: 'code_d_2', lib_d: 'lib_d_2', data_codif: 'data_codif_9', lib_data_codif: 'lib_data_codif_9' },
  { code_a: 'code_a_2', lib_a: 'lib_a_2', code_b: 'code_b_4', lib_b: 'lib_b_4', code_c: 'code_c_1', lib_c: 'lib_c_1', code_d: 'code_d_3', lib_d: 'lib_d_3', data_codif: 'data_codif_10', lib_data_codif: 'lib_data_codif_10' },
  { code_a: 'code_a_2', lib_a: 'lib_a_2', code_b: 'code_b_5', lib_b: 'lib_b_5', code_c: 'code_c_2', lib_c: 'lib_c_2', code_d: 'code_d_3', lib_d: 'lib_d_3', data_codif: 'data_codif_11', lib_data_codif: 'lib_data_codif_11' },
  { code_a: 'code_a_2', lib_a: 'lib_a_2', code_b: 'code_b_6', lib_b: 'lib_b_6', code_c: 'code_c_3', lib_c: 'lib_c_3', code_d: 'code_d_1', lib_d: 'lib_d_1', data_codif: 'data_codif_12', lib_data_codif: 'lib_data_codif_12' },
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


  //==============================================================================================
  codificationData: CodificationElement[] = MOCK_DATABASE_CODIFICATION;

  filters = {};

  codeAOptions: dropDownItem[] = []; // Options for code_a dropdown
  isSelectedCodeA!: boolean;

  codeBOptions: dropDownItem[] = []; // Options for code_b dropdown
  isSelectedCodeB!: boolean;

  codeCOptions: dropDownItem[] = []; // Options for code_C dropdown
  isSelectedCodeC!: boolean;

  codeDOptions: dropDownItem[] = []; // Options for code_d dropdown
  isSelectedCodeD!: boolean;

  dataCodifOptions: dropDownItem[] = []; // Options for data_codif dropdown
  isSelectedDataCodif!: boolean;

  initDropDown() {
    this.codeAOptions = this.getUniqueOptions(this.codificationData, 'code_a', 'lib_a');
    this.isSelectedCodeA = false;
    //------------------------------
    this.codeBOptions = this.getUniqueOptions(this.codificationData, 'code_b', 'lib_b');
    this.isSelectedCodeB = false;
    // //-----------------------------
    this.codeCOptions = this.getUniqueOptions(this.codificationData, 'code_c', 'lib_c');
    this.isSelectedCodeC = false;
    //------------------------------
    this.codeDOptions = this.getUniqueOptions(this.codificationData, 'code_d', 'lib_d');
    this.isSelectedCodeD = false;
    //------------------------------
    this.dataCodifOptions = this.getUniqueOptions(this.codificationData, 'data_codif', 'lib_data_codif');
    this.isSelectedDataCodif = false;
  }

  /* 
    Création des données uniques et non filtrés d'une liste déroulante à partir des identifiants idCode / libCode des données sources
    Ces données sont stocké via l'interface dropDownItem (code / lib) 
    ---------------
    data: CodificationElement[] => les données sources (determinant leur liens) (ces données ne sont pas modifiées)
    idCode: keyof CodificationElement => identifiant pour récupérer les valeurs code(dropDownItem) de la liste déroulante ciblé dans les données sources
    idLib: keyof CodificationElement => identifiant pour récupérer les valeurs lib(dropDownItem) libellés associé aux codes dans les données sources
  */
  getUniqueOptions(data: CodificationElement[], idCode: keyof CodificationElement, idLib: keyof CodificationElement): dropDownItem[] {

    /*
    Les données sources peuvent contenir plusieurs fois les même valeurs du fait des combinaoires possibles.
    Il faut donc pouvoir ne récupérer qu'une seule fois une même valeur lors de la constitution de la liste déroulante
    */
    const uniqueSetDropDownItems = new Map<string, dropDownItem>();

    // filtrage des données à récupérer pour la liste déroulante
    data.forEach(element => {

      // élément filtrant pour déterminer pour quelle liste déroulante on souhaite récupérer les données
      const key = element[idCode];

      // filtrage des données data
      if (!uniqueSetDropDownItems.has(key)) {

        // set new dropDownItem (code / lib) exemple {code = element['code_a'], lib = element['lib_a']}
        uniqueSetDropDownItems.set(key, { code: element[idCode], lib: element[idLib] });

      }

    });

    // Ce tableau contient uniquement des éléments de menu déroulant uniques, où chaque élément est un objet avec des propriétés code et lib.
    return Array.from(uniqueSetDropDownItems.values());

  }

  /* 
    Création des données uniques et filtrés d'une liste déroulante à partir des identifiants idCode / libCode des données sources
    Ces données sont filtrées via des données stocké dans un objet filters
    Ces données sont stocké via l'interface dropDownItem (code / lib) 
    ---------------
    data: CodificationElement[] => les données sources (determinant leur liens) (ces données ne sont pas modifiées)
    filters: { [key in keyof CodificationElement]?: string[] } filtres sur les autres données que la liste déroulante en cours
    idCode: keyof CodificationElement => identifiant pour récupérer les valeurs code(dropDownItem) de la liste déroulante ciblé dans les données sources
    idLib: keyof CodificationElement => identifiant pour récupérer les valeurs lib(dropDownItem) libellés associé aux codes dans les données sources
 */
  getUniqueFiltredOptions(
    data: CodificationElement[],
    filters: { [key in keyof CodificationElement]?: string[] },
    idCode: keyof CodificationElement,
    idLib: keyof CodificationElement
  ): dropDownItem[] {

    /*
    Les données sources peuvent contenir plusieurs fois les même valeurs du fait des combinaoires possibles.
    Il faut donc pouvoir ne récupérer qu'une seule fois une même valeur lors de la constitution de la liste déroulante
    */
    const uniqueSet = new Map<string, dropDownItem>();
    // élément filtrant pour déterminer les données à garder à partir des données sources
    data
      .filter(element => {
        return (Object.keys(filters) as (keyof CodificationElement)[]).every(filterKey => {
          const filterValues = filters[filterKey];
          return filterValues ? filterValues.includes(element[filterKey]) : true;
        });
      })
      .forEach(element => {
        // élément filtrant pour déterminer pour quelle liste déroulante on souhaite récupérer les données
        const key = element[idCode];
        if (!uniqueSet.has(key)) {
          // set new dropDownItem (code / lib) exemple {code = element['code_a'], lib = element['lib_a']}
          uniqueSet.set(key, { code: element[idCode], lib: element[idLib] });
        }
      });

    // Ce tableau contient uniquement des éléments de menu déroulant uniques, où chaque élément est un objet avec des propriétés code et lib.
    return Array.from(uniqueSet.values());
  }


  /*
    Actions lors de la définition du filtre
  */
  setFilterDataValue(code: string, control: string, selectedCode: string) {
    this.simpleForm.controls[control].patchValue(selectedCode)
    this.addFilterValue(this.filters, code, this.simpleForm.controls[control].value);
  }

  /*
     Ajout de filtre : permet d'ajouter plusieur valuer sur une même clé exemple code_a : val1 , val2,... n 
  */
  addFilterValue = (filters: { [key: string]: string[] }, key: string, filter: string) => {
    filters[key] = [filter];
  };

  /*
      supprime toutes les valeurs du filtre pour la clé doonné exemple code_a : val1 , val2,... n 
  */
  removeFilterValue = (filters: { [key: string]: string[] }, key: string) => {
    delete filters[key];
  };

  /*
    Actions lors de la ré-initialisation du filtre
  */
  cleanFilter( key: string, control: string){
    this.removeFilterValue(this.filters, key);
    this.simpleForm.controls[control].patchValue(null);
  }


  /*
    Action effectuée lors de la secltion d'une valeur d'une liste déroulante
  */
  trigerfilterCodeOptions(dropdownCode: string, selectedCode: string) {

    console.log("++++++++++++++++");
    console.log("dropdown triggered code: " + dropdownCode);
    console.log("dropdown selected Code : " + selectedCode);
    console.log("++++++++++++++++");

    if (dropdownCode === 'code_a') {
      this.setFilterDataValue(dropdownCode, 'codeA', selectedCode)
      this.isSelectedCodeA = true;
    }
    if (dropdownCode === 'code_b') {
      this.setFilterDataValue(dropdownCode, 'codeB', selectedCode)
      this.isSelectedCodeB = true;
    }
    if (dropdownCode === 'code_c') {
      this.setFilterDataValue(dropdownCode, 'codeC', selectedCode)
      this.isSelectedCodeC = true;
    }
    if (dropdownCode === 'code_d') {
      this.setFilterDataValue(dropdownCode, 'codeD', selectedCode)
      this.isSelectedCodeD = true;
    }
    if (dropdownCode === 'data_codif') {
      this.setFilterDataValue(dropdownCode, 'dataCodif', selectedCode)
      this.isSelectedDataCodif = true;
    }
    //------------------------------------------------

    this.updateAllDropDown();


    console.log("==============================================");
  }

  cleanDropDowSelect(code: string) {
    console.log("-----------------");
    console.log("dropdown cleared Code : " + code);
    console.log("-----------------");

    if (code === 'code_a') {
      this.isSelectedCodeA = false;
      this.cleanFilter( 'code_a', 'codeA');
    }
    else if (code === 'code_b') {
      this.isSelectedCodeB = false;
      this.cleanFilter( 'code_b', 'codeB');
    }
    else if (code === 'code_c') {
      this.isSelectedCodeC = false;
      this.cleanFilter( 'code_c', 'codeC');
    }
    else if (code === 'code_d') {
      this.isSelectedCodeD = false;
      this.cleanFilter( 'code_d', 'codeD');
    }
    else if (code === 'data_codif') {
      this.isSelectedDataCodif = false;
      this.cleanFilter( 'data_codif', 'dataCodif');
    }

    this.updateAllDropDown();
    console.log("==============================================");
  }


  /*
    En Angular, si vous n'utilisez pas le mot-clé this pour lier une propriété de composant à une entrée de modèle, 
    la variable ciblée ne sera pas mise à jour car le modèle n'est pas conscient des changements de propriété du composant. 
    Cela est dû au mécanisme de détection des modifications d'Angular, 
    qui repose sur des liaisons définies explicitement pour suivre et propager les changements de données entre le composant et la vue.
    Si vous omettez le mot-clé this, vous créez essentiellement une variable locale dans le modèle qui n'est pas directement connectée à la propriété du composant. 
    En conséquence, le modèle reste inconscient de toute modification de la propriété du composant et l'élément d'entrée ne sera pas mis à jour.
  */
  // updateDropDown(codeOptions: dropDownItem[], idCode: keyof CodificationElement, idLib: keyof CodificationElement, control: string) {
  //   codeOptions = this.getUniqueFiltredOptions(this.codificationData, this.filters, idCode, idLib);
  //   if (codeOptions.length == 1) {
  //     this.simpleForm.controls[control].patchValue(codeOptions[0].code)
  //   } else {
  //     this.simpleForm.controls[control].patchValue(null)
  //   }
  //   codeOptions.forEach(item => console.log(idCode + ":" + `${item.code}`, "+" + idLib + ":" + `${item.lib}`));
  // }

  updateAllDropDown() {
    console.log("-----------------")
    this.codeAOptions = this.getUniqueFiltredOptions(this.codificationData, this.filters, 'code_a', 'lib_a');
    if (this.codeAOptions.length == 1) {
      this.simpleForm.controls['codeA'].patchValue(this.codeAOptions[0].code)
    } else {
      this.simpleForm.controls['codeA'].patchValue(null)
    }
    this.codeAOptions.forEach(item => console.log(`code_a: ${item.code}, lib_a: ${item.lib}`));


    console.log("-----------------")
    this.codeBOptions = this.getUniqueFiltredOptions(this.codificationData, this.filters, 'code_b', 'lib_b');
    if (this.codeBOptions.length == 1) {
      this.simpleForm.controls['codeB'].patchValue(this.codeBOptions[0].code)
    } else {
      this.simpleForm.controls['codeB'].patchValue(null)
    }
    console.log("code_b : " + this.codeBOptions);

    console.log("-----------------")
    this.codeCOptions = this.getUniqueFiltredOptions(this.codificationData, this.filters, 'code_c', 'lib_c');
    if (this.codeCOptions.length == 1) {
      this.simpleForm.controls['codeC'].patchValue(this.codeCOptions[0].code)
    } else {
      this.simpleForm.controls['codeC'].patchValue(null)
    }
    console.log("code_c : " + this.codeBOptions);

    console.log("-----------------")
    this.codeDOptions = this.getUniqueFiltredOptions(this.codificationData, this.filters, 'code_d', 'lib_d');
    if (this.codeDOptions.length == 1) {
      this.simpleForm.controls['codeD'].patchValue(this.codeDOptions[0].code)
    } else {
      this.simpleForm.controls['codeD'].patchValue(null)
    }
    console.log("code_d : " + this.codeDOptions);

    console.log("-----------------")
    this.dataCodifOptions = this.getUniqueFiltredOptions(this.codificationData, this.filters, 'data_codif', 'lib_data_codif');
    if (this.dataCodifOptions.length == 1) {
      this.simpleForm.controls['dataCodif'].patchValue(this.dataCodifOptions[0].code)
    } else {
      this.simpleForm.controls['dataCodif'].patchValue(null)
    }
    console.log("data_codif : " + this.dataCodifOptions);
  }
  //==============================================================================================
  elements = MOCK_DATABASE_ELEMENT_DATA;

  constructor(private formBuilder: FormBuilder) { }

  //----------------------------
  @ViewChild(MatAccordion) accordion!: MatAccordion;

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
      codeB: [null],
      codeC: [null],
      codeD: [null],
      dataCodif: [null],

    }, {
      updateOn: 'blur'  /*uniquement lorsque l'utilisateur change de champ, c'est-à-dire lors du  blur  des différents champs.*/
    });

    this.initDropDown();

  }





}


