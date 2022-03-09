import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any, searchValue: any): any {
    if(!data) return [];
    if(!searchValue)return data;

    searchValue = searchValue.toLowerCase();
    return data.filter(function(eachElement){
      return JSON.stringify(eachElement).toLowerCase().includes(searchValue);
    })
  }

}
