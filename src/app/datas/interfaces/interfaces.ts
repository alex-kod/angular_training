export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface SolarSystemElement {
  name: string;
  position: number;
  type: string;
  weight: string;
  size: string;
}

export interface dropDownItem {
  code: string;
  lib: string;
}

export interface CodificationElement {
  code_a: string;
  lib_a: string;
  code_b: string;
  lib_b: string;
  code_c: string;
  lib_c: string;
  code_d: string;
  lib_d: string;
  data_codif: string;
  lib_data_codif: string;
}