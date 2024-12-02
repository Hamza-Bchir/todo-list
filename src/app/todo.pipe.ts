import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
  standalone: true
})
export class TodoPipe implements PipeTransform {
  transform(todos: any[]): any[] {
    const currentDate = new Date().getTime();

    return todos.map(todo => {
      const dueDate = new Date(todo.date).getTime();
      const isCloseToDeadline = (dueDate - currentDate) <= 2 * 24 * 60 * 60 * 1000;

      return {
        ...todo,
        isCloseToDeadline
      };
    });
  }
}
