import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[addhar-card]'
})
export class AddharDirective {

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 14) {
      trimmed = trimmed.substr(0, 14);
    }


    trimmed = trimmed.replace(/-/g, '');

    let addharNumber = [];

    addharNumber.push(trimmed.substr(0, 4));
    if (trimmed.substr(4, 4) !== "")
      addharNumber.push(trimmed.substr(4, 4));
    if (trimmed.substr(8, 4) != "")
      addharNumber.push(trimmed.substr(8, 4));


    input.value = addharNumber.join('-');

  }
}