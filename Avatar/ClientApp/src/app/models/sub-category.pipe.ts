import { Pipe, PipeTransform } from '@angular/core';
import { subCategoryParser } from './category';

@Pipe({
  name: 'subCategory'
})
export class SubCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return subCategoryParser(value);
  }

}
