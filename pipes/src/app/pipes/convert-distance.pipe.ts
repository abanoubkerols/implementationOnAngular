import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertDistancePipe implements PipeTransform {

  transform(value: any, targetUnit: any): unknown {
    if (!value) {
      return ''
    }
    switch (targetUnit) {
      case 'Km':
        return value * 1.60935;
      case 'M':
        return value * 1609.35 * 1000;
      case 'cm':
        return value * 1609.35 * 1000 * 100;
      default:
        try {
          throw new Error('Target Unit not Supported');
        } catch (error) {
          return value = error;
          
        }

        
    }

  }


  

}
