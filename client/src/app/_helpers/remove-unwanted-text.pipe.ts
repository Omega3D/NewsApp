import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnwantedText'
})
export class RemoveUnwantedTextPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (typeof value !== 'string') {
      return ''; // or handle undefined case appropriately
    }
    return value.replace(/\[\+\d+ chars\]/g, '').trim();
  }

}
