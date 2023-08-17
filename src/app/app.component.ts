import { Component, OnInit } from '@angular/core';
import { Tasks } from './mock-tasks';
import { Task } from './Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Task Tracker';
  tasks: Task[] = Tasks;
  ngOnInit(): void {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }
}
