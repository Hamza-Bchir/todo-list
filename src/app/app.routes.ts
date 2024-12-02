import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
    {path: 'new', component: TodoTemplateDrivenFormComponent},
    {path: 'signin', component: TodoReactiveFormComponent },
    {path: 'todo-reactive-form', component: TodoReactiveFormComponent},
    {path: '**', redirectTo: ''}
];
