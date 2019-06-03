import { Pipe, PipeTransform } from '@angular/core';
import { categoryParser } from './category';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return categoryParser(value);
  }

}
