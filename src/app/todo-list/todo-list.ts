import { Component, inject } from '@angular/core';
import { Task, TaskItem } from '../service/task';

@Component({
  selector: 'app-todo-list',
  imports: [TodoList],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'], // исправлено: styleUrl → styleUrls (массив)
})
export class TodoList {
  title = "Задачи";
  userName = "Aldar";
  private taskService = inject(Task);
  tasks = this.taskService.getTask()

  selectedTask: TaskItem | null = null;

  selectTask(task:TaskItem):void{
    this.selectedTask = task;
  }

  toggleComponent(task:TaskItem){
    this.taskService.toggleCompleted(task);
  }
  deleteTask(task:TaskItem):void{
    this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.getTask();

    if(this.selectedTask?.id === task.id){
      this.selectedTask = null;
    }
  }

  getTotalCount():number{
    return this.taskService.getActiveCount();
  }
  getCompletedCount():number{
    return this.taskService.getCompletedCount();
  }
  getActiveCount():number{
    return this.taskService.getActiveCount();
  }
}
