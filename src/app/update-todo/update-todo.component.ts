import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})
export class UpdateTodoComponent {
  @Input() todo: Todo | null = null; // Le todo à modifier
  @Output() close = new EventEmitter<void>(); // Événement pour fermer la modale
  @Output() updated = new EventEmitter<Todo>(); // Événement pour signaler la mise à jour
  @Input() show: boolean = false;



  constructor(private todoService: TodoService) {}

  closeModal() {
    this.show = false;
    this.close.emit();
  }

  onSubmit(todoForm: any) {
    if (todoForm.valid && this.todo) {
      this.todoService.updateTodo(this.todo).subscribe((updatedTodo) => {
        this.updated.emit(updatedTodo);
        this.closeModal();
      });
    }
  }
}
