import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys',
  standalone: true  // Déclaration standalone
})
export class ObjectKeysPipe implements PipeTransform {

  transform(value: any): any {
    /*
      ----------------------------------------------------------------------------------------------------------------
       The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
       ----------------------------------------------------------------------------------------------------------------
      const object1 = {
        a: 'somestring',
        b: 42,
        c: false,
      };
      console.log(Object.keys(object1));
      // Expected output: Array ["a", "b", "c"]
        ----------------------------
   */
    return Object.keys(value);
  }
}