import { TASKS } from './../../../mock-tasks';
import { Component } from '@angular/core';
import Task from 'src/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  Tasks:Task[] = TASKS;
}
