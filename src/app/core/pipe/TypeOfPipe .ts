import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeOf',
  standalone: true
})
export class TypeOfPipe implements PipeTransform {
  transform(value: any): string {
    if (Array.isArray(value)) {
      return 'array';
    }
    return typeof value;
  }
}