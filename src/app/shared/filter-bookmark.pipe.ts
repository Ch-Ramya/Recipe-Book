import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBookmark'
})
export class FilterBookmarkPipe implements PipeTransform {

  transform(data) {
    if(!data) return [];
    return data.filter(function(eachElement){
      return eachElement.bookMark == true;
    })
  }

}
