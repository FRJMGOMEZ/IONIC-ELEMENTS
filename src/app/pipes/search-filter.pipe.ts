import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array: any[]=[], query: string, column:string): any {    

  if(array != null){
    
    if (query === '') {
      return array
    }
    return array.filter((item) => { return item[column].toLowerCase().includes(query.toLowerCase()) })
    
  }
  }
}
