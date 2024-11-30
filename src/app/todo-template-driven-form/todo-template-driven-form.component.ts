import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-template-driven-form.component.html',
  styleUrl: './todo-template-driven-form.component.css'
})
export class TodoTemplateDrivenFormComponent {
  @Output() close = new EventEmitter<void>(); // Événement pour fermer la modale
  @Output() added = new EventEmitter<Todo>(); // Événement pour signaler l'ajout
  @Input() show: boolean = false

  todo: Partial<Todo> = {
    title: '',
    description: '',
    date: new Date(),
    done: false,
  };

  constructor(private todoService: TodoService) {}

  closeModal() {
    this.show = false;
    this.close.emit();
  }

  onSubmit(todoForm: any) {
    if (todoForm.valid) {
      this.todoService.addTodo(this.todo as Todo).subscribe((newTodo) => {
        this.added.emit(newTodo);
        this.closeModal();
      });
    }
  }
}