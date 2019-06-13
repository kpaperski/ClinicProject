import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, field1: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !field1 || !value) {
      return items;
    }

    return items.filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase()) || singleItem[field1].toLowerCase().includes(value.toLowerCase())
    );
  }
}
