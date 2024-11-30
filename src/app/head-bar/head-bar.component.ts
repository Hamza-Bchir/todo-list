import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoTemplateDrivenFormComponent } from '../todo-template-driven-form/todo-template-driven-form.component';
import { Todo } from '../todo';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [RouterModule, TodoTemplateDrivenFormComponent, CommonModule],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {
  todos: Todo[] = [];
  showAddModal = false;

  constructor(public authService: AuthService) { }

  openAddTodoModal() {
    this.showAddModal = true;
  }
  
  closeAddTodoModal() {
    this.showAddModal = false;
  }
  
  onTodoAdded(newTodo: Todo) {
    this.todos.push(newTodo);
    this.closeAddTodoModal();
  }
}
