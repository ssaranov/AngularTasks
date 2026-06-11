import { Component } from '@angular/core';
import { TodoList } from '../../todo-list/todo-list';

@Component({
  selector: 'app-tasks',
  imports: [TodoList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
