import { Component, OnInit } from '@angular/core';
import {faList, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { UpdateTodoComponent } from "../update-todo/update-todo.component";
import { AppTodoDirective } from '../app-todo.directive';
import { TodoPipe } from '../todo.pipe';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, TodoDetailComponent, UpdateTodoComponent, AppTodoDirective, TodoPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  faList = faList;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  todos: Todo[] = [];
  selectedTodo: Todo | null = null;
  showDetailModal: boolean = false;
  showUpdateModal: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    console.log("hey ?")
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodoList().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  openDetails(todo: Todo) {
    this.selectedTodo = todo;
    this.showDetailModal = true;
  }

  closeDetails() {
    this.showDetailModal = false;
    this.selectedTodo = null;
  }

  onTodoUpdated(updatedTodo: Todo) {
    const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
    this.closeDetails();
  }

  openUpdateTodoModal(todo: Todo) {
    this.selectedTodo = { ...todo };
    this.showUpdateModal = true;
  }
  
  closeUpdateTodoModal() {
    this.showUpdateModal = false;
  }
  
}

