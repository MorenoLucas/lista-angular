import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconoRol'
})
export class IconoRolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
