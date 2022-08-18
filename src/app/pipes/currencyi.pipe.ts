import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'currencyi',
})
export class CurrencyiPipe implements PipeTransform {
   transform(
      value: number,
      symbol: string,
      reverse?: boolean,
      ...args: any[]
   ): string {
      return reverse
         ? symbol + ' ' + '$' + value.toFixed(2)
         : '$' + value.toFixed(2) + ' ' + symbol;
   }
}
