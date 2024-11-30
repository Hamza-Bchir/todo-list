import { Directive } from '@angular/core';

@Directive({
  selector: '[appTodo]',
  standalone: true
})
export class TodoDirective {

  constructor() { }

}
