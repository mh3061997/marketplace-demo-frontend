import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitedQuantityPipe'
})
export class LimitedQuantityPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
