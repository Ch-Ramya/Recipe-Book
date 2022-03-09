import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitLine'
})
export class SplitLinePipe implements PipeTransform {

  transform(data: any): any {
    return data.split(".").join('/n');
  }
}
