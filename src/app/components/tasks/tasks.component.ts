import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(taskItem: Task) {
    this.taskService
      .deleteTask(taskItem)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }

  toggleRemainderTask(taskItem: Task) {
    this.taskService
      .toggleTask(taskItem)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }

  addTask(taskItem: Task) {
    this.taskService
      .onAddTask(taskItem)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }
}
