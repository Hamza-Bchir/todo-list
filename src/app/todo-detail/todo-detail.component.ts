import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  @Input() todo: Todo | null = null; // Le todo à afficher
  @Input() show: boolean = false; // Contrôle l'affichage de la modale
  @Output() close = new EventEmitter<void>(); // Événement pour fermer la modale
  @Output() updated = new EventEmitter<Todo>(); // Événement pour signaler la mise à jour d'un todo

  faCheck = faCheck;

  constructor(private todoService: TodoService) {}

  closeModal() {
    this.show = false;
    this.close.emit();
  }

  updateTodo() {
    if (this.todo) {
      this.todo.done = !this.todo.done; // Change l'état du todo
      this.todoService.updateTodo(this.todo).subscribe((updatedTodo) => {
        this.updated.emit(updatedTodo); // Informe le parent
        this.closeModal(); // Ferme la modale
      });
    }
  }
}